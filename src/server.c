#include "server.h"

long readFile(const char *filename, unsigned char **fileContent);
void sendFile(const char *fileName, int client_socket);
void getFileName(char *requestMsg, char *fileDest);
void handle_client(int args);
void getExtension(char delim, const char *inputChar, char *extention);
void getMessageFromPost(const char* requestMsg, char* resultMsg);
void writeMessageToFile(const char* message);

int main()
{
	int server_socket;
	struct sockaddr_in server_address;
	int bind_res, listen_res;
    int reuse_addr_res, reuse_port_res;
    socklen_t client_size;

	signal(SIGPIPE, SIG_IGN);

	server_socket = socket(AF_INET, SOCK_STREAM, 0);
	if(server_socket == -1)
	{
		fprintf(stderr, "A problem occured when creating server socket... stopping\n");
		exit(EXIT_FAILURE);
	}

    reuse_addr_res = setsockopt(server_socket, SOL_SOCKET, SO_REUSEADDR, &(int){1}, sizeof(int));
    if(reuse_addr_res < 0)
    {
        fprintf(stderr, "A problem occurred when making server address reusable... stopping\n");
        exit(EXIT_FAILURE);
    }

    reuse_port_res = setsockopt(server_socket, SOL_SOCKET, SO_REUSEPORT, &(int){1}, sizeof(int));
    if(reuse_port_res < 0)
    {
        fprintf(stderr, "A problem occurred when making server port reusable... stopping\n");
        exit(EXIT_FAILURE);
    }
	server_address.sin_family = AF_INET;
	server_address.sin_addr.s_addr = htonl(INADDR_ANY);
	server_address.sin_port = htons(PORT);

	bind_res = bind(server_socket, (struct sockaddr *)&server_address, sizeof(server_address));
	if(bind_res)
	{
		fprintf(stderr, "A problem occured when binding socket... stopping\n");
		exit(EXIT_FAILURE);
	}

	listen_res = listen(server_socket, 1);
	if(listen_res)
	{
		fprintf(stderr, "A problem occured when listening... stopping\n");
		exit(EXIT_FAILURE);
	}

	printf("Server started...\n");

	while(true)
	{
    	pthread_t threadID; // Not used
		int client_socket = accept(server_socket, NULL, NULL);

        handle_client(client_socket);
	}

	return 0;
}

long getFileSize(const char *filename)
{
    long filesize = -1;
    FILE *file = fopen(filename, "rb");
    if(!file)
    {
        //Print error and return file size (-1)
        printf("getFileSize: Failed to open %s.\n", filename);
        perror("getFileSize");
        return filesize;
    }

    //Seek to end of file and get size
    fseek(file, 0L, SEEK_END);
    filesize = ftell(file);
    rewind(file);
    fclose(file);
    return filesize;
}

long readFile(const char* filename, unsigned char **fileContent)
{
    long filesize = getFileSize(filename);
    size_t contentlength = strlen(*fileContent);
    if(contentlength < filesize)
    {
        *fileContent = realloc(*fileContent, filesize);
    }

    FILE *file = fopen(filename, "rb");
    if(!file)
    {
        printf("readFile: Failed to read %s.\n", filename);
        perror("readFile");
        return -1;
    }

    fread(*fileContent, sizeof(unsigned char), filesize, file);
    fclose(file);

    return filesize;
}

void sendFile(const char *fileName, int client_socket)
{
	char resp[STD_RESPONSE] = "HTTP/1.0 200 OK\r\n"
              	  			  "Server: webserver-c\r\n"
              	  			  "Keep-Alive: timeout=5, max=999\r\n"
              	  			  "Content-Type: ";

    long fileLength;
    unsigned char *fileContent = (unsigned char*)malloc(sizeof(unsigned char) * STD_RECIEVE);
    char contentSize[NUM_CONTENT_SIZE];

    // Get file content
    fileLength = readFile(fileName, &fileContent);
    if(fileLength < 0)
    {
        printf("sendFile: Failed to send file %s.\n", fileName);
        perror("sendFile");
    }
    // Set content type of the response value
    if(strstr(fileName, ".html"))
    {
    	strcat(resp, "text/html");
    }
    else if(strstr(fileName, ".css"))
    {
    	strcat(resp, "text/css");
    }
    else if(strstr(fileName, ".jpeg"))
    {
    	strcat(resp, "image/jpeg");
    }

    strcat(resp, "\r\n");

    // Set content length
    sprintf(contentSize, "%li", fileLength);
    strcat(resp, "Content-Length: ");
    strncat(resp, contentSize, strlen(contentSize));

    // Finish headers
    strcat(resp, "\r\n\r\n");

	write(client_socket, resp, strlen(resp));
    write(client_socket, fileContent, fileLength);

	free(fileContent);
}

void getFileName(char *requestMsg, char *fileDest)
{
    char* namePtr = strstr(requestMsg, "/") + 1;
    int resIndex = 0;

    while(*namePtr != ' ' && resIndex < MAX_FILE_NAME)
    {
        fileDest[resIndex] = *namePtr;
        namePtr++;
        resIndex++;
    }

    if(resIndex == 0)
    {
        strcpy(fileDest, "index.html");
    }
    else
    {
        fileDest[resIndex] = '\0';
    }
}

void handle_client(int client_socket)
{
    char requestMsg[STD_RECIEVE], fileName[MAX_FILE_NAME] = "\0";
    char resultMsg[STD_RECIEVE];

    read(client_socket, (void *)requestMsg, (size_t)STD_RECIEVE);

    if(strncmp(requestMsg, "GET", 3) == STR_EQ)
    {
        getFileName(requestMsg, fileName);

        // We do not support favicon.ico, so don't attempt to send it
        if(fileName[0] != '\0' &&
           strcmp(fileName, "favicon.ico") != STR_EQ)
        {
            sendFile(fileName, client_socket);
        }
    }
    else
    {
        getMessageFromPost(requestMsg, resultMsg);
        writeMessageToFile(resultMsg);
    }

    close(client_socket);
}

void getMessageFromPost(const char* requestMsg, char* resultMsg)
{
    char* patternPtr = strstr(requestMsg, "mail=");
    int resultIndex = 0;
    const int emailStrSize = 6, feedbackStrSize = 8;

    strcpy(resultMsg, "Email:");
    resultIndex += emailStrSize;

    while(*patternPtr != '&')
    {
        resultMsg[resultIndex] = *patternPtr;
        patternPtr++;
        resultIndex++;
    }

    resultMsg[resultIndex] = '\n';
    strcat(resultMsg, "Feedback:");
    resultIndex += feedbackStrSize;

    while(*patternPtr != '\0')
    {
        resultMsg[resultIndex] = *patternPtr;
        patternPtr++;
        resultIndex++;
    }
    resultMsg[resultIndex] = '\0';
}

void writeMessageToFile(const char* message)
{
    char *msgNoFeedback = strstr(message, "=") + 1;
    FILE* file = fopen(FEEDBACK_FILE, "a");

    fprintf(file, "\n%s\n", msgNoFeedback);

    fclose(file);
}
