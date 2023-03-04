# 7. Update App
## This file will cover how to...
- Update image to new version

To update the image of the application to version 2:
```
kubectl set image deployments/cookie-factory cookie-factory=docker.io/library/cookieapp:v2
```

To check for the new Pods:
```
kubectl get pods
```

## Next: [Clean-Up](./Step8_Clean.md)
Once you've completed the steps in this file, continue to Step 8 and learn how to clean up anything kubernetes is running.