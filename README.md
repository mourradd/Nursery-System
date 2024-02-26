### Nursery-System
#Project Description:
The nursery system is designed to manage teachers, children, and administrative tasks within a nursery setting. The system is built as a RESTful API using Node.js, with data storage managed through MongoDB. It includes various features such as user registration, profile management, password encryption, and authentication.

##Key Features:

#User Authentication and Authorization: The system has authentication mechanisms for administrators and teachers. Only registered users with valid credentials can access certain functionalities.

#User Registration: Teachers can register themselves within the system. The registration process likely involves validating input data and storing user information securely in the MongoDB database. Passwords are encrypted for security.

#Administrator Functionality: The system has an administrator account with static credentials. The administrator can add children to the system, manage user profiles, and possibly perform other administrative tasks.

#Endpoint Validations: All API endpoints have proper validation checks to ensure data integrity and security. This involves validating input data, handling errors gracefully, and returning appropriate HTTP status codes.

#Swagger Documentation: The API endpoints are documented using Swagger, providing a clear and structured overview of available routes, parameters, and responses.

#Environment Configuration: Project-specific configuration settings such as secret keys, database URLs, and port numbers are stored in an environment file to facilitate easy configuration and deployment across different environments.

#Profile Picture Upload: The system allows users (teachers and children) to upload profile pictures. This functionality ensures a personalized user experience and adds visual identification to user profiles.

#Change Password Endpoint: Users can change their passwords through a dedicated endpoint, enhancing security by allowing periodic password updates.


#Conclusion:
Your project is a comprehensive Node.js application that fulfills the requirements of managing a nursery system efficiently. It incorporates essential features such as user authentication, data validation, database integration, documentation, and security measures to ensure a robust and reliable system.
