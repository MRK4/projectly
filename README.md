# Projectly

> [!IMPORTANT]
> The project is currently under development, and is currently **unusable**.

npx shadcn@latest add button alert input label checkbox card chart badge dropdown-menu tabs switch

## Description
**Projectly** is a collaborative task management application designed to help teams streamline their workflows. With Projectly, users can create, assign, and track the progress of tasks within projects, making it easier to collaborate and stay on top of deadlines. The platform also includes a real-time chat feature to enhance communication among team members.

## Tech Stack
- **Frontend**: Next.js (React-based)
- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) & bcrypt for password hashing
- **Styling**: TailwindCSS and Shadcn/ui
- **Hosting**: Vercel

## Features
- **User Management**: User registration, login, and profile management.
- **Team Collaboration**: Users can join teams and collaborate on shared projects.
- **Project Management**: Create projects, assign tasks, and track their progress.
- **Task Management**: Add, edit, delete, and assign tasks with priority and deadlines.
- **Task & Project History**: Keep a record of changes made to tasks and projects for better tracking.
- **Responsive Design**: Mobile-friendly design using Tailwind CSS for optimal usability across devices.

## Installation
1. **Clone the repository**:
    ```bash
    git clone git@github.com:MRK4/projectly.git
    cd projectly
    ```

2. **Backend Setup**:
    - Navigate to the `server` folder:
      ```bash
      cd server
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` by typing this command:
      ```bash
      cp .env.example .env
      ```
      ```conf
      DATABASE_URL=mongodb://localhost:27017/projectly
      JWT_SECRET=your_jwt_secret
      ```
    - Start the server:
      ```bash
      npm start
      ```

3. **Frontend Setup**:
    - Navigate to the `client` folder:
      ```bash
      cd client
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env.local` by typing:
    - ```bash
      cp .env.local.example .env.local
      ```
      ```conf
      NEXT_PUBLIC_API_URL=http://localhost:5000
      ```
    - Start the development server:
      ```bash
      npm run dev
      ```

## Usage
- Access the application on `http://localhost:3000` after running the frontend and backend servers.
- Create an account or log in with an existing account.
- Join a team or create a new one to start collaborating.
- Create projects and add tasks, assigning them to team members.
- Use the real-time chat to communicate with team members while working on projects.

## Roadmap
- [ ] Implement user authentication.
- [ ] Protect routes for roles (user, project owner and admin)
- [ ] Implement teams, projects and tasks creation.
- [ ] Implement task filtering and sorting options.
- [ ] Add a dashboard for team performance analytics.
- [ ] Introduce a notification system for task updates.
