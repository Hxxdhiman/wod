FROM openjdk:latest
WORKDIR usr/lib
EXPOSE 8083
ADD ./target/login-0.0.1-SNAPSHOT.jar /usr/lib/login-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","login-0.0.1-SNAPSHOT.jar"]