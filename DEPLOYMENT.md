# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying the Workflow Visualizer to GitHub Pages.

## Prerequisites

- Git repository pushed to GitHub
- GitHub CLI (`gh`) installed and authenticated
- Repository with the workflow visualizer files

## Quick Start

### Step 1: Enable GitHub Pages

Run this command to enable GitHub Pages for your repository:

```bash
gh repo edit --enable-pages --pages-branch gh-pages
```

Alternatively, you can enable it manually:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source

### Step 2: Commit and Push

The GitHub Actions workflow is already configured. Simply push your changes:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 3: Monitor Deployment

Watch the deployment progress:

```bash
# View workflow runs
gh run list --workflow=deploy-pages.yml

# Watch the latest run
gh run watch

# View detailed logs
gh run view --log
```

### Step 4: Access Your Site

Once deployed, your site will be available at:
```
https://[your-username].github.io/[repo-name]/
```

To get the exact URL:
```bash
gh repo view --web
# Then navigate to Settings → Pages to see the published URL
```

## GitHub CLI Commands Reference

### Repository Management

```bash
# View repository settings
gh repo view

# Edit repository settings
gh repo edit --help

# Enable GitHub Pages with GitHub Actions
gh repo edit --enable-pages --pages-branch gh-pages
```

### Workflow Management

```bash
# List all workflows
gh workflow list

# View workflow details
gh workflow view deploy-pages.yml

# Manually trigger a workflow
gh workflow run deploy-pages.yml

# List recent workflow runs
gh run list --workflow=deploy-pages.yml --limit 5

# Watch a workflow run in real-time
gh run watch

# View logs of a specific run
gh run view [run-id] --log

# Re-run a failed workflow
gh run rerun [run-id]
```

### Checking Deployment Status

```bash
# Check latest deployment
gh run list --workflow=deploy-pages.yml --limit 1

# View deployment URL
gh api repos/:owner/:repo/pages | jq -r '.html_url'
```

## Troubleshooting

### Workflow Fails

1. Check the workflow logs:
   ```bash
   gh run view --log
   ```

2. Verify GitHub Pages is enabled:
   ```bash
   gh api repos/:owner/:repo/pages
   ```

3. Ensure the workflow has proper permissions (already configured in the workflow file)

### Page Not Loading

1. Check if the deployment succeeded:
   ```bash
   gh run list --workflow=deploy-pages.yml
   ```

2. Verify the files are in the correct location (`workflow_visualizer/` folder)

3. Clear your browser cache and try again

### 404 Error

1. Ensure `index.html` exists in the `workflow_visualizer/` folder
2. Check that all referenced files (JS, CSS) are also in the folder
3. Verify the `.nojekyll` file is present to prevent Jekyll processing

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Install gh-pages tool (if using npm)
npm install -g gh-pages

# Deploy the workflow_visualizer folder
gh-pages -d workflow_visualizer
```

## Workflow Configuration

The deployment workflow (`.github/workflows/deploy-pages.yml`) is configured to:

- **Trigger**: On push to `main` or `master` branch, or manually via workflow_dispatch
- **Deploy**: The `workflow_visualizer` folder contents
- **Permissions**: Automatically configured for GitHub Pages deployment
- **Concurrency**: Prevents multiple simultaneous deployments

## File Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml          # GitHub Actions workflow
├── workflow_visualizer/
│   ├── index.html                    # Main page
│   ├── app.js                        # Application logic
│   ├── data.js                       # Workflow data
│   ├── motion.js                     # Animation library
│   ├── gsap.min.js                   # GSAP library
│   ├── Flip.min.js                   # GSAP Flip plugin
│   └── .nojekyll                     # Prevents Jekyll processing
└── README.md
```

## Next Steps

After successful deployment:

1. Update the README.md with your actual GitHub Pages URL
2. Test all functionality on the live site
3. Set up custom domain (optional)
4. Configure branch protection rules for production

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub CLI Documentation](https://cli.github.com/manual/)
