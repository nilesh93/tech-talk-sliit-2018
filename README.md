# Docker Reference

## Build image

docker build -t <image-name> .

## SSH into container

docker run  -it --rm <image-name>  /bin/sh

## Dev container

```docker-compose build```
```docker-compose run -p 3000:3000  meetup-node-dev  /bin/sh```

## Prod

cd into prod folder

```docker-compose build```
```docker-compose up```


## Push to docker hub

docker images

get the image_id

docker tag image_id username/app_name:tag_name

docker push username/app_name:tag_name