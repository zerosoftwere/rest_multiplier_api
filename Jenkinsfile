pipeline {
    agent {
        docker {image 'node:14'}
    }
    environment {
        HOME = '.'
    }

    stages {
        stage('Test') {
            steps {
                sh 'npm install --only-dev'
                sh 'npm test'
            }
        }
    }
}