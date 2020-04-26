pipeline {
    agent { 
        docker { image 'node:14' } 
    }

    environment {
        Home = '.'
    }

    stages {
        stage ('Test') {
            steps {
                sh 'npm install --dev-only'
                sh 'npm run test'
                sh 'npm run test:e2e'
            }
        }
    }
}