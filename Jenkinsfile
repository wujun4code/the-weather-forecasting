node {
    stage('Clone Repo') {
        git branch: 'main', url:'https://github.com/agus-3rd-yoga/weather-app.git'
    }
}

pipeline {
    agent {
        docker {
            image 'node:slim'
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
                sh 'echo "Skip testing..."'
            }
        }
        stage('Manual Approval') { 
            steps {
                input message: 'Lanjut ke tahap deploy? \
                    (Klik "Proceed" untuk melanjutkan eksekusi pipeline ke tahap Deploy)'
            }
        }
        stage('Deploy') { 
            steps {
                sh './jenkins/scripts/deliver.sh'
                sh 'sleep 60'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}