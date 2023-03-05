# 1: Install and Clone
## This file will cover how to...
- Clone Your Repo
- Install Kubectl
- Install Kind
- Install Docker Desktop

## Clone Repo
To get started, clone this repo onto your local machine and navigate to the root of the package using your terminal.

If you need more instructions on how to clone a github repository, follow the instructions in the [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Install Kubectl, Kind, and Docker on Local Machine
If you have already installed Kubectl, Kind and Docker, you can skip to [Part 2: Create a Docker Image and Kind Cluster](./Step2_Create.md). If you are unsure if you already have them installed, you can check their versions.

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

#### To check if Docker is installed:
```
docker -v
```

### Install Docker Desktop:
https://docs.docker.com/desktop/

## Next: [Create](./Step2_Create.md)
Once you've completed these steps
continue to learn how to build a Docker image and create a Kind cluster