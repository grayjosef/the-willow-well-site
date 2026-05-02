# DNS and Deployment Plan

## Goal

Use Cloudflare for DNS control and Cloudflare Pages for hosting the MVP site.

## Important

Do not transfer the domain registrar yet unless necessary.

Changing nameservers to Cloudflare is enough for DNS control.

## Before Changing Anything

Collect:

- Domain registrar login
- Current DNS screenshots
- Existing A records
- Existing CNAME records
- Existing MX records
- Existing TXT records
- Existing SPF/DKIM/DMARC records
- Current website host information
- Current email provider information

## Do Not Break Email

Before changing nameservers, make sure all email-related records are copied into Cloudflare.

Email records usually include:

- MX
- TXT
- SPF
- DKIM
- DMARC

## Recommended Deployment Path

1. Create Cloudflare account
2. Add domain to Cloudflare
3. Let Cloudflare scan DNS records
4. Compare scanned records with registrar/host screenshots
5. Manually add anything missing
6. Change nameservers at current registrar to Cloudflare nameservers
7. Deploy site to Cloudflare Pages
8. Add custom domain to Cloudflare Pages
9. Verify SSL
10. Test website and email

## Production Tests

Confirm:

- Website loads
- www works
- root domain works
- email still works
- contact links work
- form works
- booking link works

## Preferred Canonical Domain

https://www.thewillowwellco.com

Redirect root domain to www if possible.

## Temporary Dev Site

Use the Cloudflare Pages generated URL first.

Only connect production domain after:

- Lee approves the visual direction
- DNS records are confirmed
- Email records are safe
