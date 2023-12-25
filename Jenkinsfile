node {
    stage('Clone Repo') {
        git branch: 'main', url:'https://github.com/agus-3rd-yoga/weather-app.git'
    }
}

pipeline {
    agent {
        docker {
            image 'node:16'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'react-scripts test --passWithNoTests'
            }
        }
        stage('Manual Approval') {
            steps {
                input message: 'Lanjutkan ke tahap Deploy? \
                sh 'echo ""' \
                (Click "Proceed" to continue)'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm start'
                sh 'sleep 60'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}