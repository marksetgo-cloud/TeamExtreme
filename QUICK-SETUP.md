# TeamExtreme Website - Quick Setup Guide

## ⚡ 5-Minute Setup

### Step 1: Get Your Files
- Download all files to a folder on your computer
- Keep the folder structure intact

### Step 2: Add Your Photos
```
images/
├── hero-mountain.jpg        # Homepage hero image
├── team-photo.jpg          # Group photo for about section  
├── member-1.jpg            # Individual member photos
├── member-2.jpg            # (add as many as you have members)
└── verbier-2023/
    ├── photo-1.jpg         # Trip photos
    ├── photo-2.jpg
    └── ...
```

### Step 3: Update Member Names
Open `members.html` and replace all `[Member Name]` with actual names.

### Step 4: Set Trip Date
Open `script.js`, line 7:
```javascript
const tripDate = new Date('2026-01-15T00:00:00').getTime();
```
Change to your actual trip date.

### Step 5: Publish (Choose One)

**Option A: Netlify (Easiest)**
1. Go to netlify.com
2. Sign up (free)
3. Drag your folder onto the page
4. Done! You get a live URL instantly

**Option B: GitHub Pages (Best for Updates)**
1. Create GitHub account
2. Create new repository
3. Upload files
4. Settings → Pages → Enable
5. Your site is live!

**Option C: Simple Hosting**
- Upload to any web host (Bluehost, GoDaddy, etc.)
- Works anywhere that hosts HTML files

## 🎨 Quick Customization

### Change Main Color
`styles.css` line 12:
```css
--navy: #1a293f;  /* Change this hex code */
```

### Update Tagline
`index.html` line 40:
```html
<span class="title-line">Your New Tagline Here</span>
```

### Add More Years
1. Copy `verbier-2023.html`
2. Rename to new year
3. Update dates and content
4. Add photos to new folder

## 📱 Testing

### Before Publishing:
- [ ] Open `index.html` in your browser
- [ ] Click through all navigation links
- [ ] Test on your phone (responsive)
- [ ] Check all images load
- [ ] Verify countdown shows correct date

### After Publishing:
- [ ] Share link with one member first
- [ ] Get feedback
- [ ] Make adjustments
- [ ] Official launch!

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Make sure images are in the `images/` folder

**Navigation not working?**
- Verify all HTML files are in the same folder
- Check filenames in the `<a href="">` tags

**Countdown not working?**
- Check the date format in `script.js`
- Open browser console (F12) to see errors

**Site looks broken?**
- Make sure `styles.css` is in the same folder as HTML files
- Clear browser cache (Ctrl+Shift+R)

## 📧 Need Help?

If you get stuck:
1. Read the full README.md
2. Check file names and paths
3. Google the specific error message
4. Most issues are simple file path problems!

---

**Pro Tip:** Start simple! Get the basic site published first, then add photos and customization gradually. You can always update later!
