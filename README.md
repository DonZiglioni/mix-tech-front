This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running with Docker

You can run this project in a production-ready container using Docker and Docker Compose.

- **Node.js version:** The Docker image uses Node.js `22.13.1-slim`.
- **Exposed port:** The app runs on port `3000` inside the container and is mapped to `3000` on your host.
- **Environment variables:** If your project requires environment variables, create a `.env` file in the project root and uncomment the `env_file` line in the `docker-compose.yml`.

### Build and Run

To build and start the app using Docker Compose:

```bash
docker compose up --build
```

This will build the Docker image and start the `javascript-app` service. The app will be available at [http://localhost:3000](http://localhost:3000).

No additional configuration is required unless your app depends on environment variables. The container runs as a non-root user for improved security.
