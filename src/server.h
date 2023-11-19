#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <netinet/in.h>
#include <pthread.h>
#include <unistd.h>
#include <signal.h>

#include <stdbool.h>

#include <time.h>

// Defines
#define NUM_CONNECTIONS 1

#define PORT 1034

#define STD_RESPONSE 1048576
#define STD_RECIEVE 1048576

#define NUM_CONTENT_SIZE 7 //
#define MAX_FILE_NAME 30 // Max file name length

#define MAX_METHOD_SIZE 3 // Open method for reading a file

#define STR_EQ 0

#define FEEDBACK_FILE "feedback.txt"
