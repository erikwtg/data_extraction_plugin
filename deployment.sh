#!/bin/bash

if docker network inspect handtalk_extraction_plugin_network &>/dev/null; then
  echo "Network handtalk_extraction_plugin_network already exists."
else
  docker network create handtalk_extraction_plugin_network
  echo "Network handtalk_extraction_plugin_network created."
fi

docker-compose -f docker-compose.yml up -d --build

echo "Containers started successfully."

if docker ps | grep -q "handtalk_extraction_plugin_network"; then
  echo "Container is running."
else
  echo "Container is not running."  
fi