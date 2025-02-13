# Use an official OpenJDK runtime as a parent image
FROM docker.io/eclipse-temurin:17-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the built Spring Boot JAR file into the container
COPY target/*.jar app.jar

# Expose the application port (Spring Boot default is 8080)
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]