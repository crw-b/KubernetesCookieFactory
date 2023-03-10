# 5. Services
## This file will cover how to...
- Create a proxy
- Create an environment variable
- Access the pod through an api
- Read logs
- View current services
- Create a new service
- Expose a new service
- View opened ports
- Create environment variable for node port
- Delete a service

## Create a Proxy
To create a proxy that will forward messages to the cluster-wide private network, open up a **second terminal window** and run:
```
kubectl proxy
```
To see all APIs hosted through the proxy endpoint, you can use the curl command.

Return to your original terminal (but do not close the second terminal) and run:
```
curl http://localhost:8001/api
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

## Read Logs
Anything that gets sent to STDOUT will now be available in the logs. To retreive these logs:
```
kubectl logs $POD_NAME
```

## View Current Services

To check the current services in our cluster:
```
kubectl get services
```
## Create and Expose a New Service
To create a new service and expose it to external traffic:
```
kubectl expose deployment/cookie-factory --type="ClusterIP" --port 8080
```

Rerun the get services command to make sure it's running:
```
kubectl get services
```
## View Opened Ports
To see which port was opened externally:
```
kubectl describe services/cookie-factory
```
## Delete Service
To delete service:
```
kubectl delete service -l app=cookie-factory
```

To confirm the service is gone:
```
kubectl get services
```

## Next: [Clean-Up](./Step5_Clean.md)
Once you've completed the steps in this file, continue to learn how to clean-up any resources once you're done with the app.