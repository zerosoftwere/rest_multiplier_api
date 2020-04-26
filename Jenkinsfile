pipeline {
    agent {
        docker {image 'node:14'}
    }

    stages {
        stage('Prepare') {
            checkout scm
        }
        stage('Test') {
            steps {
                sh 'npm install --only-dev'
                sh 'npm test'
            }
        }
    }
}