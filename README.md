# eJam FullStack Interview

## Final Questions:

## Future Improvements
If I had more time, here's what I'd improve or explore further:

- **Navbar and Routing:** Implement a navbar for easy navigation between sections using React Router for a seamless SPA experience
- **Authentication:** Add user authentication (e.g., JWT) and role-based access control (RBAC) to manage superhero data securely
- **Filtering:** Create a filtering system to sort superheroes by attributes like superpower or humility score
- **Pagination:** Implement paginated results to improve performance with large datasets
- **Error Handling:** Develop user-friendly error messages for form submissions and API failures
- **Lazy Loading:** Optimize loading times by implementing code splitting and on-demand content loading
- **Testing:** Expand test coverage with Jest unit tests, integration tests, and Cypress E2E tests
- **Docker:** Containerize the application for easier deployment and environment consistency

## Team Player Approach
### Collaboration Strategies
- **Planning:** Dedicate time upfront for detailed scope definition, UI/UX planning, and technical risk assessment
- **Task Management:** Break down the project into discrete tasks:
  - Backend/API development
  - Frontend implementation
  - Deployment pipeline setup
  - Documentation
- **Communication:** Establish:
  - Daily standups/ weekly sprint planning sessions
  - Blocker resolution meetings (shadowing/peer-programming) 
- **Knowledge Sharing:** Implement pair programming sessions and documentation reviews
- **Quality Assurance:** Conduct team-based:
  - Test case creation
  - Code reviews
  - User acceptance testing
- **Adaptability:** Maintain open channels for feedback and process improvements

# Tech ReadMe

This repository contains both the Frontend and Backend for the eJam FullStack Interview. It consists of a React application for the frontend and a NestJS application for the backend.

## Table of Contents
- [Frontend (React)](#frontend-react)
- [Backend (NestJS)](#backend-nestjs)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [License](#license)

## Frontend (React)
The frontend is built using React with TypeScript and Bootstrap for styling. It is responsible for displaying a list of superheroes, adding new superheroes via a form, and interacting with the backend API.

**Features:**
- Display a list of superheroes with their name, superpower, and humility score
- Add new superheroes to the list
- React components handle form submissions and table rendering
- Fetches data from the backend to refresh the superhero list after adding a new one

## Backend (NestJS)
The backend is built using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. The backend exposes an API to handle CRUD operations for superheroes.

**Features:**
- CRUD API for managing superheroes
- Validation using class-validator to ensure valid superhero data
- Connects to a SQLite or other database to persist superhero data

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn (npm comes with Node.js)
- Git

### Frontend Setup
1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Set up a `.env` file (optional, for API base URL):
```env
REACT_APP_API_BASE_URL=http://localhost:3000
```

4. Run the frontend:
```bash
npm start
```
The application will be available at http://localhost:3001

### Backend Setup
1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Run the backend:
```bash
npm run start
```
The backend will be available at http://localhost:3000

## Running the Application
After both services are running:
- Frontend: Open http://localhost:3001 in your browser
- Backend: Ensure the API is available at http://localhost:3000

## API Endpoints

**GET /superheroes**
- Description: Retrieve all superheroes
- Response:
```json
[
  {
    "id": 1,
    "name": "Batman",
    "superpower": "Detective skills",
    "humilityScore": 8
  }
]
```

**POST /superheroes**
- Description: Add new superhero
- Request Body:
```json
{
  "name": "Iron Man",
  "superpower": "High-tech suit",
  "humilityScore": 7
}
```
- Response:
```json
{
  "id": 3,
  "name": "Iron Man",
  "superpower": "High-tech suit",
  "humilityScore": 7
}
```

## Technologies Used

**Frontend**
- React
- TypeScript
- Axios
- Bootstrap

**Backend**
- NestJS
- TypeScript
- class-validator
- SQLite (or other database)

## Folder Structure

```
client/
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
└── README.md

server/
├── src/
│   ├── superheroes/
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
├── package.json
└── README.md
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
