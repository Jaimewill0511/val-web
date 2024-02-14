pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub repository
                git branch: 'main',
                    url: 'git@github.com:Jaimewill0511/val-web.git'
            }
        }
        stage('Build') {
            steps {
                // Example build step, you can replace this with your actual build commands
                echo "Its working?"
            }
        }
        // Add more stages as needed
    }
}
