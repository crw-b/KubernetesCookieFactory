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

## Scale Up and Down
To scale the Deployment to 4 replicas:
```
kubectl scale deployments/cookie-factory --replicas=4
```

To list the deployments again to see the updated desired number of replicas:
```
kubectl get deployments
```

To check that the number of Pods has changed:
```
kubectl get pods -o wide
```

Each pod has a different IP address.
To check the changes in the Deployment events log:
```
kubectl describe deployments/cookie-factory
```

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

## Next: [Clean-Up](./Step7_Clean.md)
Once you've completed the steps in this file, continue to learn how to clean-up any resources once you're done with the app.