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
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'sleep 60'
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}