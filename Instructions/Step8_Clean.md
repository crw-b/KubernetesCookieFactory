# 8. Clean-Up
To check if you are stil using any resources:
```
kubectl get pods,services,deployments
```

You can either delete all pods, services, and deployments one-by-one or delete them all at once:

```
kubectl delete deployments --all
kubectl delete services --all
kubectl delete pods --all
```