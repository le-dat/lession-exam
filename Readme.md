# Modern Exam Platform

Welcome to the Modern Exam Platform! This project is a comprehensive online examination system designed to enhance the learning experience through interactive lessons and personalized assessments.

## 🔑 Key Features

- **Interactive Lessons**: Learn through engaging and interactive content.
- **Personalized Assessments**: Receive tailored assessments to track your progress.
- **Real-time Feedback**: Get instant feedback on your answers.
- **Progress Tracking**: Monitor your learning journey and achievements.
- **Admin Dashboard**: Manage courses, lessons, and users efficiently.

### Prerequisites

- **Node.js** version > 20.0.0
- **Yarn** (preferred package manager)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/le-dat/lession-exam.git
   cd modern-exam-platform
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create an `.env` file and add the following variables.**
   ```sh
   PORT=5000

   # JWT
   ACCESS_TOKEN_SECRET=secretkeytaiday
   REFRESH_TOKEN_SECRET=secretkeytaiday

   # MONGO DATABASE
   DATABASE_NAME=exam-server
   USERNAME_DB=le-dat
   PASSWORD_DB=le-dat
   CLIENT_ID=AXlfyJ2QROzOTSv_v9dNbFStavQmkh0HAhaVSB7cTJARukMq30pIKUUGuHrw1mMPu7zrHqj4LuKYjXrT
   ```
4. **Run the development client**:

   ```sh
   npm run dev | yarn dev
   ```

5. **Build for production**:
   ```sh
   npm run build
   ```

## Contributing

We welcome contributions from the community. Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## Author

### Le Quoc Dat

Passionate software developer with a knack for creating efficient and user-friendly applications. Dedicated to continuous learning and improvement, always exploring new technologies and methodologies.

- **Portfolio:** [Website Portfolio](https://ledat-portfolio.vercel.app/)
- **GitHub:** [Le Quoc Dat](https://github.com/le-dat)
- **LinkedIn:** [Le Quoc Dat](https://www.linkedin.com/in/le-quoc-dat)
