# 3. Deploy App
## This file will cover how to...
- Create a deployment
- View deployments
- Create a proxy
- Create an environment variable
- Access the pod through an api
- Read logs

## Create Deployment
If you do not currently have a cluster running, you will need to go back through "Create a Cluster".

To check if you have a cluster running:
```
kubectl get nodes
```

In order to deploy our cookieapp, you will need to provide the deployment name and the app's image.

```
kubectl create deployment cookie-factory --image=cookieapp:v1
```
This command searches for a node that can be used to run our app, which we've named "cookie-factory" and is the image we built and loaded named "cookieapp" and then scheduled the cookieapp to run on that node.

## View Deployments
To see your deployment:
```
kubectl get deployments
```
There should only be one deployment and it should state that it's a available to run the image on.

## Create a Proxy
To create a proxy that will forward messages to the cluster-wide private network, open up a **second terminal window** and run:
```
echo -e "\n\n\n\e[92mStarting Proxy. After starting it will not output a response. Return to the first Terminal Tab\n]";
kubectl proxy
```
To see all APIs hosted through the proxy endpoint, you can use the curl command.

Return to your original terminal (but do not close the second terminal) and run:
```
curl http://localhost:8001/version
```

## Create a Pod Name Variable
To create a Pod name and store in the environment variable POD_NAME:
```
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
```
Then, to check that we can use $POD_NAME to reference the name of the pod:
```
echo Name of the Pod: $POD_NAME
```
## Access Pod through API
To access the Pod through the API:
```
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/
```

To view which containers are inside of each pod:
```
kubectl describe pods
```

To make sure you can access your pod via your 2nd terminal proxy, you can run another curl request in your 1st terminal:
```
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/proxy/
```
## Read Logs
Anything that gets sent to STDOUT will now be available in the logs. To retreive these logs:
```
kubectl logs $POD_NAME
```

## Next: [Shell](./Step4_Shell.md)
Once you've completed the steps in this file, continue to learn how to run bash commands in a pod's container