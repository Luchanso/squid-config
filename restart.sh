#!/bin/bash

docker stop squid
docker rm -v squid
./run.sh