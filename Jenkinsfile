pipeline {
    agent { 
        docker { image 'nodejs:14' } 
    }

    environment {
        Home = '.'
    }

    stage('Prepare') {
        checkout scm
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