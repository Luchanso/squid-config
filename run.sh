#!/bin/bash

docker run --name squid -d --restart=always \
  --publish 3128:3128 \
  --volume /root/squid.conf:/etc/squid3/squid.conf \
  --volume /srv/docker/squid/cache:/var/spool/squid3 \
  sameersbn/squid:3.3.8-23