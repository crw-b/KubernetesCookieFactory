# 7. Clean-Up
If you still have the proxy 2nd terminal running, you can close it out using *ctrl + c*

To check if you are stil using any resources:
```
kubectl get pods,services,deployments
kind get clusters
```

You can either delete all pods, services, and deployments one-by-one 
```
kubectl delete deployments <name of deployment>
kubectl delete services <name of service>
kubectl delete pods <name of pod>
kind delete clusters <name of cluster>
```

or delete them all of them without specifying names:

```
kubectl delete deployments --all
kubectl delete services --all
kubectl delete pods --all
kind delete clusters --all
```