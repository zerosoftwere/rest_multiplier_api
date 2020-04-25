pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install --only-dev'
                    sh 'npm test'
                }
            }
        }
    }
}