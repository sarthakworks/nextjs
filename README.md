# Deployment Guide

Follow these instructions to deploy the Next.js application to GitHub Pages.

## 🛠 Setup (One-time)

Install the `gh-pages` package as a dev dependency:

```bash
npm install gh-pages --save-dev
```

## 🚀 Deployment Workflow

Perform these steps every time you want to deploy changes:

1.  **Checkout Main Branch**: Ensure you are on the `main` branch.
    ```bash
    git checkout main
    ```
2.  **Commit Changes**: Stage and commit all your changes.
    ```bash
    git add .
    git commit -m "Your commit message"
    ```
3.  **Deploy**: Run the deploy script. This command creates a static build and pushes it to the `gh-pages` branch.
    ```bash
    npm run deploy
    ```

> **Note**: Your changes will become live on the `gh-pages` branch after 2-3 minutes.

## 📝 Important Notes

*   **Gitignore**: Ensure the `.next` folder is added to your `.gitignore` file. There is no need to commit it to the main branch.
*   **Live Site**: You can view your changes at:  
    [https://sarthakworks.github.io/nextjs/](https://sarthakworks.github.io/nextjs/)