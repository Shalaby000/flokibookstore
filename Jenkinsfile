pipeline {
    agent any

    stages {

        stage('Login to Docker') {
            steps {
                echo 'Logging into Docker registry...'
                script {
                    withDockerRegistry([credentialsId: "$DOCKINGFLOKI_CRED", url: "https://hub.docker.com/repository/docker/dockingfloki/flokidocker"])
                    echo 'Logging Succeeded'
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