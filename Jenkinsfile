pipeline {
    agent { 
        docker { image 'nodejs:14' } 

        environment {
            Home = '.'
        }
    }

    stages {
        stage ('Test') {
            step {
                sh 'npm install --dev-only'
                sh 'npm test'
                sh 'npm test:e2e'
            }
        }
    }
}