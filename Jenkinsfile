pipeline {
    agent any

    stages {

        stage('Login to Docker') {
            steps {
                script {
                    echo 'Logging into Docker registry...'
                    sh "echo alcvb567987 | docker login -u dockingfloki --password-stdin docker.io"
                }
            }
        }

        stage('Pulling Linux Image') {
            steps {
                script {
                    echo 'Pulling simple Image'
                    sh "docker pull hello-world"
                }
            }
        }

        stage('Tagging Image') {
            steps {
                script {
                    echo 'Tagging Created Docker Image Before Pushing...'
                    sh "docker tag hello-world:latest dockingfloki/flokidocker/hello-world:latest"
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                script {
                    echo 'Pushing Uno...'
                    sh "docker push dockingfloki/flokidocker/hello-world:latest"
                }
            }
        }
    }
}