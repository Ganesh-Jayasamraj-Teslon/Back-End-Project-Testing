node {
    stage("SCM Checkout") {
        git branch: 'main', url: 'https://github.com/Ganesh-Jayasamraj-Teslon/Back-End-Project-Testing.git'
    }

    stage("Docker build and run using compose") {
        sh "docker compose up -d"
    }
}