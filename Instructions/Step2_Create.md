# 2: Create an Image and Cluster
## This file will cover how to...
- Create a docker image from a simple app
- Create a cluster with kind
- Confirm the cluster is running
- View nodes in the cluster
- Load a docker image
- View images in a node

## Build a Docker Image
This package already contains a simple Node.js file and a Dockerfile which has instructions on how to build an image for the Node.js file. To run the pre-written Dockerfile, open your Docker desktop app then navigate to the root file of this package in a terminal to run:
```
docker build -t cookieapp:v1 .
```
Be sure to include that . as it represents the path to the Dockerfile giving build instructions.

The last line output from the build in your terminal should give the image name, something like "docker.io/library/cookeiapp:v1" representing that it is saved in your local docker desktop library.

## Create a Kind Cluster
Create a cluster with kind and name it cookie-factory by running the following:
```
kind create cluster --name cookie-factory
```
If you leave off the --name <name_of_app>, your app will be given the default name "kind".

## Check that the Cluster is Running
To get info on the cluster and see that it's running, run:
```
kubectl cluster-info
```
This should print out the IP address and port number the master node of your new cluster is running at.

To view nodes in the cluster:
```
kubectl get nodes
```
This command should show the name of our only node (the control plane) along with the status (Ready, etc.) of the node.

## Load a Docker Image
To access the docker image from inside the kind cluster, the image will need to be loaded onto it.

To load the docker image you created onto your only running node:
```
kind load docker-image cookieapp:v1 --name cookie-factory
```

## View Loaded Docker Images
To check the images that have been loaded on a node we can use the command docker exec -it <name-of-node> crictl images. 

Since the only node we should have for this cluster is the control plane it should be cookie-factory-control-plane but you can run kubectl get nodes again to check.
```
docker exec -it cookie-factory-control-plane crictl images
```
Amongst the images for kind and kubernetes there should be one named docker.io/library/cookieapp with the tag v1.

## Next: [Deploy](./Step3_Deploy.md)
Once you've completed the steps in this file, continue to learn how to deploy the app.