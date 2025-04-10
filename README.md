# Pikaframes AI Website

This is a simple website for Pikaframes AI, designed to showcase the capabilities of the Pikaframes technology.

## Deployment Instructions

### Option 1: Using a standard web hosting service

1. Sign up for a web hosting service (like Bluehost, HostGator, SiteGround, etc.)
2. Set up your domain (pikaframes.art) with your hosting provider
3. Use the hosting provider's file manager or FTP to upload all the files in this folder to your web server
4. Your website should now be live at your domain!

### Option 2: Using GitHub Pages with custom domain

1. Create a GitHub account if you don't have one
2. Create a new repository named `pikaframes.github.io`
3. Upload all files from this folder to that repository
4. In your repository's Settings > Pages section, set up GitHub Pages
5. Configure your custom domain (pikaframes.art) in the same section
6. Follow GitHub's instructions to set up DNS records with your domain registrar
7. Your website should be live at your domain once DNS propagation is complete

## How to Replace Videos and Images

### Replacing Videos

1. Prepare your video in MP4 format (recommended dimensions: 1280x720 or 1920x1080)
2. Name your videos according to their purpose:
   - Main intro video: `intro.mp4`
   - Example videos: `example1.mp4`, `example2.mp4`, `example3.mp4`, `example4.mp4`
3. Upload these files to the `videos` folder, replacing any existing files with the same names
4. The website is programmed to automatically detect and display videos when they're available

### Replacing Images

1. Prepare your images in JPG or PNG format (recommended max width: 1200px)
2. Name your tutorial step images:
   - Step 1 (Website Visit): `step1.jpg`
   - Step 2 (Upload Interface): `step2.jpg`
   - Step 4 (Frame Upload): `step4.jpg`
   - Step 5 (Settings Panel): `step5.jpg`
3. For social media preview, create an image named `pikaframes-preview.jpg`
4. Upload these files to the `images` folder, replacing any existing files with the same names
5. The website is programmed to automatically detect and display images when they're available

### Updating Text Content

To update the text content of the website:

1. Open the `index.html` file in a text editor
2. Find the section you want to update
3. Replace the text between the HTML tags (like `<p>...</p>` for paragraphs or `<h2>...</h2>` for headings)
4. Save the file and upload it to your web server

## Additional Resources

- For more advanced customization, you may edit the `styles.css` file to change colors and layout
- If you need to add custom functionality, you can edit the `script.js` file

## SEO Information

The website includes:
- Meta tags for SEO in the HTML file
- A sitemap.xml file for search engines
- A robots.txt file to allow search engines to index your site

Remember to update the date in the sitemap.xml file whenever you make significant changes to the website.

---

If you need further assistance, feel free to contact a web developer to help with more complex changes. 