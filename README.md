# Gallerie

This is a an Image gallery that allows signed in users to rearrange the images in any order of choice and also allows user to search for images with particular tags.

## Getting Started

- clone repo:

  ```bash
  git clone https://github.com/chisomchris/gallerie.git
  ```

- install neccessary dependencies:

```bash
npm install
```

- create a `.env.local` file in the root folder
    
    ```sh
    touch .env.local
    ```

- setup your mongoDB database and add connection string to **.env.local** file

    `.env.local`

    ```
    MONGODB_URI = connection-string-for-your-database
    ```
    
- finally, run on local development server

  ```bash
  npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
