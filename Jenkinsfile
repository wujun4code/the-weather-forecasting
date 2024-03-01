node {
    stage('Clone Repo') {
        git branch: 'main', url:'https://github.com/agus-3rd-yoga/weather-app.git'
    }
}

pipeline {
    agent {
        docker {
            image 'node:16-slim'
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
                sh 'npm test --passWithNoTests'
            }
        }
        stage('Manual Approval') {
            steps {
                script {
                    sh 'sleep 1'
                    input message: 'Lanjutkan ke tahap Deploy? (Click "Proceed" to continue)'
                }
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'set -x'
                sh 'npm start & sleep 1 && echo $! > .pidfile'
                sh 'sleep 60'
                sh 'chmod 0777 ./jenkins/scripts/upload.sh'
                sh './jenkins/scripts/upload.sh'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}