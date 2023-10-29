#include "server.h"

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

	return 0;
}
