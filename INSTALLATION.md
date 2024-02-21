# Setting up the Project Locally

Please follow the follwing guidelines to setup the project locally

## Prerequisites

1. Install [Git](https://git-scm.com/) on your machine.
2. Install [Node](https://nodejs.org/en) on your machine.

## Getting started

1. Fork this repostiory using Github GUI.
2. Clone the project using the following command in your terminal :

```bash
https://github.com/<YOUR_GITHUB_USERNAME>/bookx.git
```

3. Change directory to project's directroy:

```bash
cd book-api
```

4. Install all the dependencies

```bash
npm install
```

4. Create a mongodb database instance and add the `DATABASE_URL` in `.env` file as specified in `.env.sample` file

5. Run the development server using the following command

```bash
npm run dev
```

The server should start on `http://localhost:3000`.

Yay! You are good to go now! We are waiting for your valuable contributions
