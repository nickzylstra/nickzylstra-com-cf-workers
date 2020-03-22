#!/bin/bash
########################################
# Put this on a Server
# run chmod +x deploy_app.sh to make the script executable
# 
# Execute this script:  ./deploy_app.sh ariv3ra/python-circleci-docker:$TAG
# Replace the $TAG with the actual Build Tag you want to deploy
#
########################################

set -e

DOCKER_IMAGE=$1
CONTAINER_NAME="nickzylstra-com_app_server_1"

# Check for arguments
if [[ $# -lt 1 ]] ; then
    echo '[ERROR] You must supply a Docker Image to pull'
    exit 1
fi

echo "Deploying App Server to Docker Container"


#Check for running container & stop it before starting a new one
if [ $(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME) = "true" ]; then
    docker stop $CONTAINER_NAME
fi

docker rm $CONTAINER_NAME
echo "Waiting for Docker Hub to ensure new image available"
sleep 10
docker pull $DOCKER_IMAGE
REPODIR="/home/ec2-user/nickzylstra-com/"
COMPOSE1="${REPODIR}docker-compose.yml"
COMPOSE2="${REPODIR}docker-compose.prod.yml"
docker-compose -f $COMPOSE1 -f $COMPOSE2 up -d
docker system prune -f --volumes
docker ps -a