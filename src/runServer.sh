#!/bin/bash

rm server

gcc server.c -lpthread -o server -g

./server