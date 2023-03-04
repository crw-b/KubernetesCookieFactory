# 1: Install and Clone
## This file will cover how to...
- Clone Your Repo
- Install Kubectl
- Install Kind
- Install Docker Desktop

## Clone Repo
To get started, clone this repo onto your local machine and navigate to the root of the package using your terminal.

## Install Kubectl, Kind, and Docker on Local Machine
If you have already installed both Kubernetes and Kind, you can skip to "Create a Cluster". If you are unsure if you already have them installed, you can check their versions.

#### Check if kubectl is installed:
```
kubectl version
```
#### Install Links for kubectl:
- Install kubectl on Linux
https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

- Install kubectl on macOS
https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/

- Install kubectl on Windows
https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/


#### To check if kind is installed:
```
kind version
```

#### Install kind:
https://kind.sigs.k8s.io/docs/user/quick-start/#installation

### Install Docker:
https://docs.docker.com/desktop/

## Next: [Create](./Step2_Create.md)
Once you've completed these steps
continue to learn how to build a Docker image and create a Kind cluster