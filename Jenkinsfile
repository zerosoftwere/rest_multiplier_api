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

    post {
        success {
            sendSlack color: '00FF00', message: "SUCCESS: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}] (${env.BUILD_URL})" 
        }
        failure {
            sendSlack color: 'FF0000', message: "FAILED: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}] (${env.BUILD_URL})"
        }
    }
}