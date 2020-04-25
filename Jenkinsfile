node {
    stage('Preparation') {
        checkout scm
    }

    stage('Test') {
        nodejs(nodeJSInstallationName: 'nodejs') {
            sh 'npm install --only-dev'
            sh 'npm test'
        }
    }
}