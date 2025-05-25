This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites
1. **Node.js and npm**

   Make sure you have Node.js (which includes npm) installed on your machine.

   * Recommended version: Node.js 18.x or later (check your project’s `package.json` `engines` field if you have one)
   * To check if installed, go to your desired terminal (e.g. PowerShell, Git Bash, macOS Terminal, etc.) run:
     ```
     node --version
     npm --version
     ```
   * You should see a version similar to the below:
     ```
     node --version
     v18.20.2

     node --version
     v18.20.2
     ```
     If you don't, download and install from [nodejs.org](https://nodejs.org/)

2. **Git**
   Git is required to clone the repository (where the code is stored) from GitHub.
   * To check if installed:
     ```
     git --version
     ```
   * If you don't have Git, download and install from [git-scm.com](https://git-scm.com/)

### Cloning the repository
Navigate to any directory where you want to put the project (e.g., your Desktop):
```
cd Desktop
```

To copy of the code for the Insutex web app, clone the Github remote repository with the command:
```
git clone https://github.com/Antoneee/Insutex-Webapp.git
```
This will create a directory named `Insutex-Webapp`. 

Navigate to this directory with:
```
cd Insutex-Webapp
```

### Installing dependencies
To install all of the NPM package dependencies that the Insutex web app needs to run,
run the command in the `Insutex-Webapp` directory:
```
npm install
```

### Running the development server:
To start the web app, run the command:
```
npm run dev
```

You should see an output similar to
```
> insutex@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.81:3000

 ✓ Starting...
 ✓ Ready in 772ms
```

### Viewing the web app
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running locally.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
