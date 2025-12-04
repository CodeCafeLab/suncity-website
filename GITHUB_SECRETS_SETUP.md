# GitHub Secrets Setup for CI/CD

To enable automated deployment via GitHub Actions, you need to add the following secrets to your GitHub repository.

## Steps to Add Secrets

1. Go to your repository: https://github.com/CodeCafeLab/suncity-website
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each secret below

## Required Secrets

### 1. SSH_HOST
- **Name**: `SSH_HOST`
- **Value**: `72.60.218.240`

### 2. SSH_USER
- **Name**: `SSH_USER`
- **Value**: `root`

### 3. SSH_PRIVATE_KEY
- **Name**: `SSH_PRIVATE_KEY`
- **Value**: (Copy the entire private key from the server)

To get the private key, run on the server:
```bash
cat ~/.ssh/id_rsa
```

Copy the entire output including:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

## How It Works

Once secrets are added:
1. Every push to the `main` branch triggers the workflow
2. GitHub Actions builds the application
3. The workflow SSH into your server
4. Pulls latest changes, builds, and restarts PM2
5. Your site is automatically updated!

## Manual Trigger

You can also manually trigger the workflow:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to Production** workflow
3. Click **Run workflow**

## Testing

After adding secrets, make a small change and push to test:
```bash
cd /var/www/suncity-website
echo "# Test" >> README.md
git add README.md
git commit -m "Test CI/CD"
git push origin main
```

Then check the **Actions** tab to see the deployment progress.

