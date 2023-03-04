# 5. Services
## This file will cover how to...
- View current services
- Create a new service
- Expose a new service
- View opened ports
- Create environment variable for node port
- Delete a service

## View Current Services
To check that our pod is still running:
```
kubectl get pods
```

To check the current services in our cluster:
```
kubectl get services
```
## Create and Expose a New Service
To create a new service and expose it to external traffic:
```
kubectl expose deployment/cookie-factory --type="NodePort" --port 8080
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
## Create NODE_PORT environment variable
To create an environment variable called NODE_PORT that has the value of the Node port assigned:
```
export NODE_PORT=$(kubectl get services/cookie-factory -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT
```

To test that the app is exposed outside of the cluster:
```
curl $(??-ip):$NODE_PORT
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

To confirm that the app is still running inside the pod:
```
kubectl exec -ti $POD_NAME -- curl localhost:8080
```

## Next: [Scale](./Step6_Scale.md)
Once you've completed the steps in this file, continue to learn how to scale the number of pods running up and down.