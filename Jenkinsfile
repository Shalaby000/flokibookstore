pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'dockingfloki/flokidocker'
        BACKEND_IMAGE = "${DOCKER_REGISTRY}/bookstore-backend:${BUILD_NUMBER}"
        K8S_NAMESPACE = 'default'
    }
    

    stages {
        stage('Build Backend') {
            steps {
                script {
                    echo 'Building Uno...'
                    sh "docker build -t ${BACKEND_IMAGE} -f Dockerfile ."
                }
            }
        }

        stage('Login to Docker') {
            steps {
                script {
                    echo 'Logging into Docker registry...'
                    sh "docker login -u dockingfloki -p alcvb567987" docker.io
                }
            }
        }
        
        stage('Push Backend Image') {
            steps {
                script {
                    echo 'Pushing Uno...'
                    sh "docker push ${BACKEND_IMAGE}"
                }
            }
        }

        stage('Deploy Backend to K8s') {
            steps {
                script {
                    echo 'Deploying...'
                    sh "kubectl apply -f k8s/deployment.yaml --namespace=${K8S_NAMESPACE}"
                    sh "kubectl apply -f k8s/service.yaml --namespace=${K8S_NAMESPACE}"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
            archiveArtifacts artifacts: 'backend/target/*.jar', allowEmptyArchive: true
        }
    }
}
