# 2: Create an Image and Cluster
## This file will cover how to...
- Create a docker image from a simple app
- Create a cluster with kind
- Confirm the cluster is running
- View nodes in the cluster
- Load a docker image
- View images in a node

## Build a Docker Image
This package already contains a simple Node.js file and a Dockerfile which has instructions on how to build an image for it. To run the pre-written Dockerfile, open a terminal, navigate to the root file of this package, and run:
```
docker build -t cookieapp:v1 .
```
Be sure to include that . to show that the dockerfile you are running to build the image is at the same level you are running the command at.

## Create a Kind Cluster
Create a cluster with kind and name it cookie-factory by running the following:
```
kind create cluster --name cookie-factory
```
If you leave off the --name <name_of_app>, your app will be given the default name "kind".

## Check the Cluster is Running
To get info on the cluster and see that it's running, run:
```
kubectl cluster-info
```
To view nodes in the cluster:
```
kubectl get nodes
```
## Load a Docker Image
To load the docker image we created onto our only running node:
```
kind load docker-image cookieapp:v1 --name cookie-factory
```
## View Loaded Docker Images
To check the images that have been loaded on a node we can use the command docker exec -it <name-of-node> crictl images. 

Since the only node we should have for this cluster is the control plane it should be cookie-factory-control-plane but you can run kubectl get nodes again to check.
```
docker exec -it cookie-factory-control-plane crictl images
```
Amongst the images for kind and kubernetes there should be one named docker.io/library/cookieapp with the tag v1 to represent version 1.

## Next: [Deploy](./Step3_Deploy.md)
Once you've completed the steps in this file, continue to learn how to deploy the app.