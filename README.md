# TiniBuds — Apps for Education

Landing page for TiniBuds, a business that builds apps for education.  
Deployed on **GitHub Pages** with custom domain **tinibuds.store**.

## Deploy on GitHub Pages

1. **Create a GitHub repo** and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tinibuds.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) → folder: **/ (root)**
   - Save. The `CNAME` file in the repo sets the custom domain.

3. **Use custom domain tinibuds.store**
   - In **Settings → Pages**, under "Custom domain", enter: `tinibuds.store`
   - At your domain registrar, add DNS records:
     - **A:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - Or **CNAME:** `YOUR_USERNAME.github.io` (if using a subdomain like `www.tinibuds.store`)
   - For apex `tinibuds.store`, use the four A records above; GitHub will use the repo’s `CNAME` file once the domain is set in Settings.

After DNS propagates, the site will be live at **https://tinibuds.store**.

## Local preview

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python3 -m http.server 8000

# or npx
npx serve .
```

Then visit `http://localhost:8000`.
