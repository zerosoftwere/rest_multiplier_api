node {
    stage('Prepare') {
        checkout scm
    }

    stage('Test') {
        def nodeContainer = docker.image('node:14')
        nodeContainer.pull()
        nodeContainer.inside {
            sh 'npm install --only-dev'
            sh 'npm test'
            sh 'npm test:e2e'
            sh 'npm test:cov'
        }
    }
}