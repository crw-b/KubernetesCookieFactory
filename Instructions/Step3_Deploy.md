# 3. Deploy App
## This file will cover how to...
- Create a deployment imperatively
- View deployments
- View pods
- Scale deployments
- Create a deployment imperatively
- Delete a deployment

## Create Deployment Imperatively
If you do not currently have a cluster running, you will need to go back through "Create a Cluster".

To check if you have a cluster running:
```
kubectl get nodes
```

In order to deploy our cookieapp imperatively, you will need to provide the deployment name and the app's image. In this case, the deployment will be named cookie-factory and the image will be the image we built and saved locally called cookieapp.

```
kubectl create deployment cookie-factory --image=cookieapp:v1
```
This command searches for a node that can be used to run our app and then scheduled the cookieapp to run on that node.

## View Deployments
To see your deployment:
```
kubectl get deployments
```
There should only be one deployment and it should state that it's a available to run the image on.

## View Pods
To see the single pod we have on our deployment:
```
kubectl get pods
```
There should only be one pod running. If we delete this pod, the deployment will start a new pod in its place.

Try it out:
```
kubectl delete pods --all
```
then:
```
kubectl get pods
```

You should see the previous pod is being terminated or has already been terminated and a new pod has been created in its place.

## View Replicas

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

## Create Deployment Declaratively
We can also create a deployment using a yaml file. here is a file name declarative.yml in this package with instructions to create a deployment named "other-cookie-app" using the same docker image.

To create a deployment with this yam file:
```
kubectl apply -f declarative.yml
```
Now we can view deployments again:
```
kubectl get deployments
```
And also our new pods:
```
kubectl get pods
```
## Delete Deployment
We can delete either deployment.
```
kubectl delete deployments other-cookie-app
```


## Next: [Shell](./Step4_Services.md)
Once you've completed the steps in this file, continue to learn how to expose your deployment and run a proxy to access it.