# 6. Scale App
## This file will cover how to...
- View replicas
- Scale up and down

## View Replicas
To list deployments:
```
kubectl get deployments
```

To see the ReplicaSet created by the Deployment:
```
kubectl get rs
```

This command will show: 
1. The *desired number* of replicas of the application which is defined when the Deployment is created.
2. The *current number* of replicas are the number of replicas that are currently running the application.

## Scale Up
To scale the Deployment to 4 replicas:
```
kubectl scale deployments/cookie-factory --replicas=4
```

To list the deployments again to see the updated desired number of replicas:
```
kubectl get deployments
```
## Check Load-Balancing
To check that the number of Pods has changed:
```
kubectl get pods -o wide
```

Each pod has a different IP address.
To check the changes in the Deployment events log:
```
kubectl describe deployments/cookie-factory
```

To check that the Service is load-balancing the traffic, use your previously made NODE_PORT environment variable to call the exposed IP multiple times:
```
curl $(?ip):$NODE_PORT
```

After running this multiple times, you should see different Pods being hit by different requests.

## Scale Down
To scale the Service back down to 2 replicas:
```
kubectl scale deployments/cookie-factory --replicas=2
```

To check that the change was applied, get deployments again:
```
kubectl get deployments
```

And check the number of replicas by getting the pods again:
```
kubectl get pods -o wide
```

## Next: [Update](./Step7_Update.md)
Once you've completed the steps in this file, continue to learn how to update the app.