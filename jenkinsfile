node {
    stage("SCM Checkout") {
        git branch: 'main', url: 'https://github.com/Ganesh-Jayasamraj-Teslon/Back-End-Project-Testing.git'
    }
    
    stage("Docker Mongo") {
        sh "docker stop mongodb"
        sh "docker rm mongodb"
        sh "docker run -itd -p 27017:27017 --name mongodb mongo:latest"
    }
    
    stage("Docker Deployment") {
        sh "docker stop deploy"
        sh "docker rm deploy"
        sh "docker rmi project"
        sh "docker build -t project ."
        sh "docker run -itd -p 3000:3000 --name deploy project"
    }
}