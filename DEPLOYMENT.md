# Deployment Instructions

This guide will walk you through deploying your portfolio website to GitHub Pages and connecting your Namecheap domain (itikelabhaskar.com).

## Current Status

✅ **Code pushed to GitHub** - Your code is at: https://github.com/itikelabhaskar/website  
✅ **Local development working** - Website displays correctly locally  
✅ **Build configuration ready** - Deployment script configured for GitHub Pages  

**Next Steps:**
1. Redeploy to GitHub Pages with the latest changes (Step 7)
2. Verify the deployment (Step 8)
3. Configure custom domain (Steps 9-12)

## Prerequisites

- Node.js and npm installed on your computer
- A GitHub account
- Your Namecheap domain (itikelabhaskar.com) ready to configure

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all the required dependencies including React, Vite, and gh-pages.

## Step 2: Test Your Website Locally

Before deploying, test your website locally:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` to see your website. Press `Ctrl+C` to stop the server when done.

## Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `website` or `portfolio`)
5. **Important**: Make it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 4: Base Path Configuration

**✅ Already Configured**: The base path is set to `/` for local development in `vite.config.js`.  
The `npm run deploy` command automatically uses `/website/` for GitHub Pages deployment, so you don't need to manually change anything.

**How it works:**
- Local development (`npm run dev`): Uses base path `/`
- GitHub Pages deployment (`npm run deploy`): Automatically uses `/website/`

## Step 5: Push Code to GitHub

In your terminal, run these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values):

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

For example, if your username is `itikelabhaskar` and repo is `website`:
```bash
git remote add origin https://github.com/itikelabhaskar/website.git
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/itikelabhaskar/website
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

**Note**: If the gh-pages branch doesn't exist yet, we'll create it in the next step.

## Step 7: Deploy to GitHub Pages

**⚠️ Important**: Since you've made changes (fixed React import, added inline styles), you need to redeploy:

Run the deployment command to build and deploy your website:

```bash
npm run deploy
```

This will:
- Build your website with the correct base path (`/website/`)
- Create or update the `gh-pages` branch
- Push the built files to GitHub Pages

Wait for the deployment to complete (it may take 1-2 minutes).

**Note**: The `deploy` script automatically uses the correct base path for GitHub Pages (`/website/`), so you don't need to manually change `vite.config.js`. The base path in `vite.config.js` is set to `/` for local development, which is correct.

## Step 8: Verify GitHub Pages Deployment

1. Go back to your repository **Settings** > **Pages**
2. You should see a message: "Your site is live at https://itikelabhaskar.github.io/website/"
3. Click the link to verify your website is working
4. You should see your "Coming Soon" page with:
   - Animated gradient background
   - Logo circle with "IB"
   - "Itikela Bhaskar" title
   - "Coming Soon" text

**Note**: It may take a few minutes for the site to be accessible. If you see a 404, wait 5-10 minutes and try again.

## Step 9: Configure Custom Domain on GitHub

**Important**: Only do this step AFTER your GitHub Pages site is working at `https://itikelabhaskar.github.io/website/`

1. In your repository, go to **Settings** > **Pages**
2. Under **Custom domain**, enter: `itikelabhaskar.com`
3. Check the box **Enforce HTTPS** (this will be available after DNS is configured)
4. Click **Save**
5. GitHub will automatically create a `CNAME` file in your `gh-pages` branch (this is normal and expected)

## Step 10: Configure DNS on Namecheap

1. Log in to your [Namecheap account](https://www.namecheap.com)
2. Go to **Domain List** and click **Manage** next to `itikelabhaskar.com`
3. Go to the **Advanced DNS** tab
4. Add/Update the following DNS records:

### Option A: Using A Records (Recommended)

Delete any existing A records and add these four A records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |

### Option B: Using CNAME (Alternative)

If you prefer CNAME, add this record:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | @ | YOUR_USERNAME.github.io | Automatic |

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

5. If you want `www.itikelabhaskar.com` to work, add:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | Automatic |

6. Click the **Save** button (green checkmark)

## Step 11: Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate. Typically it takes 15-30 minutes.

You can check if DNS has propagated by:
- Using [whatsmydns.net](https://www.whatsmydns.net) - search for `itikelabhaskar.com`
- Running `nslookup itikelabhaskar.com` in your terminal

## Step 12: Verify Custom Domain

1. After DNS propagation, visit `http://itikelabhaskar.com` in your browser
2. You should see your portfolio website
3. GitHub will automatically enable HTTPS (SSL certificate) within 24 hours
4. Once HTTPS is active, your site will automatically redirect to `https://itikelabhaskar.com`

## Step 13: Future Updates

Whenever you make changes to your website:

1. Make your changes to the code
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`
4. Your changes will be live in a few minutes

## Troubleshooting

### Website shows 404
- Wait 5-10 minutes after deployment
- Check that the base path in `vite.config.js` matches your repository name
- Verify GitHub Pages is enabled in repository settings

### Custom domain not working
- Wait for DNS propagation (can take up to 48 hours)
- Verify DNS records are correct in Namecheap
- Check that the custom domain is set in GitHub Pages settings
- Make sure the CNAME file exists in your repository (GitHub creates this automatically)

### HTTPS not working
- GitHub automatically provisions SSL certificates, but it can take up to 24 hours
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings (appears after SSL is provisioned)

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 16 or higher: `node --version`

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Namecheap DNS Setup: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-dynamically-update-hosts-ip-with-an-ip-address/

