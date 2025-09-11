pipeline {
    agent any

    tools {
        nodejs "NodeJS_18"  // Name from Jenkins Global Tool Config
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/mohammedyassinAa/pfa-suitecrm-tests'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                // Run your BDD tests (this creates cucumber-report.json)
                sh 'npm run test:bdd'
            }
        }

        stage('Generate HTML Report') {
            steps {
                // Create the HTML report
                sh 'npm run generate:report'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML(target: [
                    reportName : 'Cucumber BDD Report',
                    reportDir  : '.',
                    reportFiles: 'cucumber-report.html',
                    keepAll    : true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cucumber-report.html', fingerprint: true
        }
    }
}
