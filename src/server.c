#include "server.h"

int readFile(const char *filename, unsigned char **fileContent);
void sendFile(const char *fileName, int client_socket);
void getFileName(char *requestMsg, char *fileDest);
void *handle_client(void *args);
void getExtension(char delim, const char *inputChar, char *extention);

pthread_mutex_t mutex;

int main()
{
	int server_socket;
	struct sockaddr_in server_address;
	int bind_res, listen_res;
    struct sockaddr_in client_addr;
    socklen_t client_size;

	signal(SIGPIPE, SIG_IGN);

	server_socket = socket(AF_INET, SOCK_STREAM, 0);
	if(server_socket == -1)
	{
		fprintf(stderr, "A problem occured when creating server socket... stopping\n");
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

        pthread_mutex_lock(&mutex);

        pthread_create(&threadID, NULL, handle_client, (void *)&client_socket);
	}

	return 0;
}

int readFile(const char* filename, unsigned char **fileContent)
{
	int length;
	char openMethod[MAX_METHOD_SIZE] = "r";

	// Check if the server is sending binary information (picture)
	if(strstr(filename, ".jpeg"))
	{
		// Set open method of the file to read binary
		strcpy(openMethod, "rb");
	}
	FILE *filePtr = fopen(filename, openMethod);

	fseek(filePtr, 0, SEEK_END);
	length = ftell(filePtr);

	fseek(filePtr, 0, SEEK_SET);

	*fileContent = malloc(length + 1);
	fread(*fileContent, sizeof(unsigned char), length, filePtr);
	(*fileContent)[length] = 0;
	fclose(filePtr);

	return length;
}

void sendFile(const char *fileName, int client_socket)
{
	char resp[STD_RESPONSE] = "HTTP/1.0 200 OK\r\n"
              	  			  "Server: webserver-c\r\n"
              	  			  "Content-Type: ";

    int fileLength, client, sent = 0;
    unsigned char *fileContent;
    char contentSize[NUM_CONTENT_SIZE];

    // Get file content
    fileLength = readFile(fileName, &fileContent);

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

    sprintf(contentSize, "%d", fileLength);
    strcat(resp, "Content-Length: ");
    strncat(resp, contentSize, strlen(contentSize));

    strcat(resp, "\r\n\r\n");

	while(sent < strlen(resp))
	{
		sent += write(client_socket, resp+sent, strlen(resp)-sent);
	}
	sent = 0;

	while(sent < fileLength)
	{
		sent += write(client_socket, fileContent+sent, fileLength);
	}
}

void getFileName(char *requestMsg, char *fileDest)
{
    int reqIndex = 0, fileIndex = 0;

	if(strncmp(requestMsg, "GET / ", 6) == STR_EQ ||
	   strncmp(requestMsg, "GET /index.html", 15) == STR_EQ)
    {
        strcat(fileDest, "index.html");
    }
    else if(strncmp("GET /game.html", requestMsg, 14) == STR_EQ)
    {
        strcat(fileDest, "game.html");
    }
    else if(strncmp("GET /test.css", requestMsg, 13) == STR_EQ)
    {
        strcat(fileDest, "test.css");
    }
    else if(strncmp("GET /styles.css.css", requestMsg, 19) == STR_EQ)
    {
    	strcat(fileDest, "styles.css.css");
    }
    else if(strncmp("GET /logo.jpeg", requestMsg, 14) == STR_EQ)
    {
    	strcat(fileDest, "logo.jpeg");
    }
    else if(strncmp("GET /background.jpeg", requestMsg, 20) == STR_EQ)
    {
    	strcat(fileDest, "background.jpeg");
    }
    else if(strncmp("GET /checkers.css", requestMsg, 17) == STR_EQ)
    {
    	strcat(fileDest, "checkers.css");
    }
}

void *handle_client(void *args)
{
    int client_socket = *((int *) args);
    pthread_mutex_unlock(&mutex);
    char requestMsg[STD_RECIEVE], fileName[MAX_FILE_NAME];

    recv(client_socket, requestMsg, STD_RECIEVE, 0);

    getFileName(requestMsg, fileName);

    if(fileName[0] != '\0')
    {
        sendFile(fileName, client_socket);
    }

    close(client_socket);

    return NULL;
}
