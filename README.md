How to Run Locally
1. Run the Backend (API)
Open the solution file SimpliTask.Api.sln in Visual Studio 2022.
Press F5 or click the Start button.
The API will run, and the Swagger documentation will be available at: https://localhost:7204/swagger/index.html (Note: Port may vary).

2. Run the Frontend (Angular)
Open a terminal and navigate to the SimpliTask-UI folder.
Install the necessary dependencies:
Ensure the apiUrl in src/app/services/task.service.ts matches your backend port.
Start the application:
Open your browser and navigate to: http://localhost:4200

Features
Real-time CRUD: Create, Read, Update, and Delete tasks without page refreshes.
Task Status: Toggle task completion with visual indicators.
Responsive UI: Built with a clean and modern design.
CORS Configured: Secure communication between the frontend and backend.

Deliverables included in this Repo:
Full Source Code (Angular & .NET Core).
Database Migration Scripts.
Step-by-step local setup guide.
