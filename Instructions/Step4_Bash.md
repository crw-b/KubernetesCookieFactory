# 4. Bash Commands
## This file will cover how to...
- Run commands directly on a container
  
To make sure your pods are running:
```
kubectl get pods
```
## Run Bash Commands on Container
To execute commands directly on the container:
```
kubectl exec $POD_NAME -- env
```
To start a bash session in the Pod's container:
```
kubectl exec -ti $POD_NAME --bash
```
To run the NodeJS application on our newly opened console on the container you can type in cat and the name of the js file where the app's source code lies:
```
cat server.js
```
To check the application is up:
```
curl localhost:8080
```
## Close Bash Session
To close your container connection:
```
exit
```

## Next: [Services](./Step5_Services.md)
Once you've completed the steps in this file, continue to learn how to create, delete, and expose services.