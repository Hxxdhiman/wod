FROM openjdk:latest
WORKDIR usr/lib
EXPOSE 8085
ADD ./target/dashboard-0.0.1-SNAPSHOT.jar /usr/lib/dashboard-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","dashboard-0.0.1-SNAPSHOT.jar"]