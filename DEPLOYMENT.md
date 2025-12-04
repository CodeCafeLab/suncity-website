# Deployment Setup

## SSH Key Setup for Git Push

To enable git push from the server, you need to add the SSH public key to GitHub:

1. Copy the public key (displayed above):
   ```
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCruiE+ip6tVTPI3k5e3YeHGQePaaMpY5z/0q2t0xd7KNjk4E/ECC4UZpDkYVqyXmDaax6jlv8Wbt+yp+rPbADvq9Uo5PTDw8EI98o+q4jcdVZXlHeTgyXEMLQfhAREYPxwq7qIcDe2SQU3impO41DlQrUicuJOBt1xU1Yneb5Mbn8YeonQ4KLt2+JdP69YgwRrrKn1RCjjk5QnnUTnDA9Jrj9TOZEzNAInb3zoXHQn1CCIadFIrLmxJzPSTyNc022dQsQD+PUw7sbC8BCSooLoHVeLx7VYqW92bI+jZFHhiftitlHcLyVaA1S9bywA1wIMhexCQCLhSTK5V6/Fd+p3t0HZ0+WvkJUXtqb+KUxAeVHiPxwRaOimFyLDV7YkT/WckCkFLywii1QgiGB9gn73y+O72qehAWlu8JSNZH7kqn/KRnwrvOAZntu2EqOULroL5er+PquP2fY2KZrHq6OxLlydV1qhSesgeRlNa6FHSA+UDW4051I7u6QrlYN6T+CqItRkS7su+LzaxR/L1WXUZKOmijzXq0ho0Yjf31sXziD0Fyz1DNSwtN2EkS/XW7xy6100flfUICtQqRa3VzyBeBzkF5tCOc9LFra6jhrOOb6scAE1MTVJLsXSL9eX9s6t8I4CKduf1KrOxWu+l7R5RanWbuwUYYwWXpD/5AIU8Q== deploy@suncity
   ```

2. Go to GitHub → Settings → SSH and GPG keys → New SSH key
3. Paste the key and save

Alternatively, use a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use it for HTTPS authentication

## CI/CD Setup (GitHub Actions)

The CI/CD workflow is configured in `.github/workflows/deploy.yml`.

### Required GitHub Secrets:
- `SSH_HOST`: `72.60.218.240`
- `SSH_USER`: `root`
- `SSH_PRIVATE_KEY`: The private SSH key from the server (`/root/.ssh/id_rsa`)

To add secrets:
1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Add the three secrets listed above

## Manual Deployment

If CI/CD is not set up, you can deploy manually:

```bash
cd /var/www/suncity-website
git pull origin main
npm ci --production
npm run build
pm2 restart suncity-website
```

## Current Setup

- **Domain**: suncity.suncitysolar.in
- **Port**: 3001
- **PM2 Process**: suncity-website
- **Nginx Config**: /etc/nginx/sites-available/suncity.suncitysolar.in

