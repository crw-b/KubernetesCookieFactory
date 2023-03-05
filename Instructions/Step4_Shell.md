# 4. Shell Commands
## This file will cover how to...
- Run commands directly on a container
  
To make sure your pods are running:
```
kubectl get pods
```
## Run Shell Commands on Container
To execute shell commands directly on the container:
```
kubectl exec $POD_NAME -- env
```
You can use the following to start using shell commands on a container:
```
kubectl exec -ti $POD_NAME -- /bin/sh 
```

To open the NodeJS application on our newly opened console you can type in cat and the name of the js file where the app's source code lies:
```
cat server.js
```

## Close Bash Session
To close your container connection:
```
exit
```

## Next: [Services](./Step5_Services.md)
Once you've completed the steps in this file, continue to learn how to create, delete, and expose services.