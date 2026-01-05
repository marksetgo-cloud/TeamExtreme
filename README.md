# TeamExtreme Website

A sophisticated, mockumentary-style website for the exclusive TeamExtreme ski club.

## 🚀 Quick Start

### Option 1: Simple File Hosting
1. Put all files in a folder
2. Open `index.html` in your web browser to preview
3. Upload the entire folder to any web host

### Option 2: GitHub Pages (Recommended - FREE!)
1. Create a GitHub account (free)
2. Create a new repository called `teamextreme-site`
3. Upload all these files
4. Go to Settings → Pages
5. Select "main" branch and save
6. Your site will be live at `https://yourusername.github.io/teamextreme-site`

### Option 3: Netlify Drop (Easiest!)
1. Go to https://app.netlify.com/drop
2. Drag the entire folder onto the page
3. Your site is instantly live!

## 📁 File Structure

```
teamextreme-site/
├── index.html              # Homepage
├── members.html            # Members page with bios
├── membership.html         # Membership information
├── verbier-2023.html      # Gallery template (duplicate for other years)
├── styles.css             # Main styles
├── members.css            # Members page styles
├── membership.css         # Membership page styles
├── gallery.css            # Gallery page styles
├── script.js              # Interactive features
└── images/                # Put all images here
    ├── hero-mountain.jpg
    ├── team-photo.jpg
    ├── member-1.jpg
    ├── verbier-2023/      # Organize by year
    ├── verbier-2024/
    └── sun-valley-2026/
```

## 🖼️ Adding Photos

### For Members Page:
1. Add photos to `images/` folder named `member-1.jpg`, `member-2.jpg`, etc.
2. Update the member names and bios in `members.html`
3. Recommended size: 600x800px (portrait orientation)

### For Gallery Pages:
1. Create a folder like `images/verbier-2023/`
2. Add your photos to that folder
3. In the gallery HTML file, copy this block for each photo:

```html
<div class="gallery-item">
    <img src="images/verbier-2023/YOUR-PHOTO.jpg" alt="Description" />
    <p class="photo-caption">Your caption here</p>
</div>
```

4. Replace `YOUR-PHOTO.jpg` with your actual filename

## ✏️ Customizing Content

### Update Member Information:
Open `members.html` and find each `member-card` section:
```html
<h3 class="member-name">[Member Name]</h3>
<p class="member-title">Their Official Title</p>
```
Replace `[Member Name]` and update the bio paragraphs.

### Update the Countdown Timer:
Open `script.js` and change this line:
```javascript
const tripDate = new Date('2026-01-15T00:00:00').getTime();
```
Change the date to match your actual trip date.

### Change Colors:
Open `styles.css` and modify the color variables at the top:
```css
:root {
    --navy: #1a293f;     /* Main brand color */
    --cloud: #EDEFF7;    /* Light background */
    /* etc. */
}
```

## 📄 Creating Additional Year Pages

To add Verbier 2024, 2025, or Sun Valley 2026:

1. **Copy the template:**
   - Duplicate `verbier-2023.html`
   - Rename it to `verbier-2024.html`

2. **Update the content:**
   - Change the title: `<title>Verbier 2024 - TeamExtreme</title>`
   - Update the header text
   - Change the dates and details
   - Update the story text
   - Point photos to the correct folder: `images/verbier-2024/`

3. **Update navigation:**
   - The navigation already includes all years
   - Just make sure the filenames match!

## 🎨 Brand Guidelines

Your website follows the TeamExtreme brand guidelines:

**Colors:**
- Primary Navy: `#1a293f`
- White: `#ffffff`
- Light backgrounds: `#EDEFF7` (Cloud)

**Typography:**
- Font: Manrope (loaded from Google Fonts)
- Clean, sophisticated, readable

**Tone:**
- Sophisticated whimsy
- Office Space-style mockumentary humor
- Self-aware but elegant

## 🛠️ Technical Details

**Built With:**
- Pure HTML, CSS, and JavaScript
- No frameworks or build tools required
- No backend or database needed
- Works on any modern web host

**Features:**
- Responsive design (works on mobile)
- Countdown timer for next trip
- Smooth scrolling
- Hover animations
- Photo galleries
- Dropdown navigation

## 📝 Editing Tips

### To Change Homepage Text:
Open `index.html` and look for the sections:
- `.hero` - Main headline
- `.about-section` - About text
- `.next-trip-section` - Upcoming trip info

### To Update Footer:
The footer appears on every page. Edit once in each HTML file, or update one and copy/paste to others.

### To Add a New Navigation Link:
In the `<nav>` section of any page, add:
```html
<li><a href="your-page.html">Your Page</a></li>
```

## 🚨 Important Notes

1. **Image Sizes:** 
   - Keep images under 2MB each
   - Optimize before uploading (use tinypng.com)
   
2. **Member Names:**
   - Replace all `[Member Name]` placeholders with real names
   
3. **Email Link:**
   - In `membership.html`, update the fake email address
   
4. **Mobile View:**
   - Test on your phone after publishing
   - The mobile menu is simplified (you can enhance it later)

## 🎯 Next Steps

1. **Gather Photos:** Collect images from past trips
2. **Write Member Bios:** Get funny stories from each member
3. **Update Dates:** Set the countdown timer
4. **Add Content:** Fill in the gallery pages
5. **Publish:** Use GitHub Pages or Netlify
6. **Share:** Send the link to your team!

## 💡 Pro Tips

- **Backup Everything:** Keep a copy of all files locally
- **Version Control:** Use GitHub to track changes
- **Test Before Sharing:** View on desktop and mobile
- **Collect Feedback:** Show members before launch
- **Have Fun:** This is meant to be enjoyable!

## 🤝 Support

If you run into issues:
1. Check that all filenames match (case-sensitive!)
2. Make sure images are in the right folders
3. Validate your HTML at validator.w3.org
4. Clear your browser cache and reload

## 📜 License

© 2025 TeamExtreme. All rights reserved.

---

**Remember:** The best-in-class mockumentary style means being self-aware, deadpan, and elegant all at once. Have fun with it!
