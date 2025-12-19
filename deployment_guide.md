# How to Run Oblovx Online

The files you see (`.tsx`, `.ts`) are the **source code**. To turn them into a playable website that anyone can visit, you need to **deploy** them.

Since you are using Next.js, the easiest way to do this is with **Vercel** (the creators of Next.js). It is free and connects directly to your GitHub.

## Option 1: Deploy to the Web (Recommended)

This will give you a real URL (e.g., `oblovx.vercel.app`) to share.

1.  **Go to Vercel**: Visit [https://vercel.com/signup](https://vercel.com/signup).
2.  **Sign Up/Login**: Continue with **GitHub**.
3.  **Import Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   You should see your repository `DevBradley/oblovx` in the list. Click **Import**.
4.  **Deploy**:
    *   On the configuration screen, leave everything as default.
    *   Click **Deploy**.
5.  **Wait**: Vercel will take about 1-2 minutes to install dependencies and build your site.
6.  **Play**: Once done, you will get a button to **Visit** your live site!

## Option 2: Run Locally (On your PC)

If you want to run it on your own computer for development:

1.  **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2.  **Download Code**:
    *   Download your repo as a ZIP or `git clone` it.
3.  **Open Terminal** (in the folder):
4.  Run these commands:
    ```bash
    npm install
    npm run dev
    ```
5.  Open `http://localhost:3000` in your web browser.
