node {
    environment {
        Home = '.'
    }

    stage('Prepare') {
        checkout scm
    }

    stage('Test') {
        def testContainer = docker.image('node:14')
        testContainer.pull()
        testContainer.inside {
            sh 'npm install --only-dev'
            sh 'npm test'
            sh 'npm test:e2e'
            sh 'npm test:cov'
        }
    }
}