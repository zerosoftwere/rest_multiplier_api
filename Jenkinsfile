node {
    stage('Preparation') {
        checkout scm
    }

    stage('Test') {
        nodejs(NodeJSInstallationName: 'nodejs') {
            sh 'npm install --only-dev'
            sh 'npm test'
        }
    }
}