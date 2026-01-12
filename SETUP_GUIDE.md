# Quick Setup Guide

Follow these steps to get your portfolio website up and running:

## Step 1: Install Dependencies

Open your terminal in the `portfolio-website` folder and run:

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and the PDF generator.

## Step 2: Customize Your Information

### Update Personal Details

Open `lib/cv-data.ts` and update with your information:
- Name, email, phone numbers, address
- Education history
- Skills (frontend, backend, office tools, etc.)
- Projects
- Achievements
- Languages

### Update Colors (Optional)

If you want to change the blue color scheme:
1. Open `tailwind.config.ts`
2. Modify the `primary` color values
3. Choose from: red, green, purple, orange, etc.

## Step 3: Test Locally

Run the development server:

```bash
npm run dev
```

Open your browser and go to: http://localhost:3000

Test all pages:
- ✅ Home page loads
- ✅ About page shows your education
- ✅ Skills page displays correctly
- ✅ Projects page shows your work
- ✅ Contact form works
- ✅ Dark/light mode toggle works
- ✅ "Download CV" button generates PDF

## Step 4: Build for Production

Before deploying, build the project to check for errors:

```bash
npm run build
```

If successful, you'll see: "Compiled successfully"

## Step 5: Deploy to Vercel

### Method A: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts (press Enter to accept defaults)

5. Your site is live! 🎉

### Method B: Using GitHub + Vercel Dashboard

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

3. Go to https://vercel.com
4. Click "New Project"
5. Import your GitHub repository
6. Click "Deploy"
7. Done! 🎉

## Step 6: Verify Deployment

Visit your deployed URL and check:
- [ ] All pages load correctly
- [ ] Dark mode works
- [ ] PDF download works
- [ ] Forms are functional
- [ ] Mobile responsive
- [ ] No console errors

## Common Issues & Solutions

### Issue: "Module not found" errors

**Solution**: Delete node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: PDF download not working

**Solution**:
1. Check if `@react-pdf/renderer` is installed
2. Verify the API route exists: `app/api/download-cv/route.ts`
3. Check browser console for errors

### Issue: Styles not appearing

**Solution**:
1. Make sure Tailwind is configured in `tailwind.config.ts`
2. Check `globals.css` imports Tailwind directives
3. Restart dev server

### Issue: Dark mode not persisting

**Solution**:
1. Clear browser cache
2. Check `ThemeProvider` in `layout.tsx`
3. Ensure `next-themes` is installed

## Customization Tips

### Add Your Photo
1. Add your photo to `public/profile.jpg`
2. Use it in components with `<Image src="/profile.jpg" />`

### Change Font
1. Open `app/layout.tsx`
2. Import different font from `next/font/google`
3. Replace `Inter` with your choice

### Add Social Links
1. Open `components/Footer.tsx`
2. Add links to GitHub, LinkedIn, Twitter, etc.

### Modify Projects
1. Open `app/projects/page.tsx`
2. Update the `projects` array with your work

## Next Steps

After deployment:
1. ✅ Share your portfolio URL
2. ✅ Add it to your resume
3. ✅ Update LinkedIn profile
4. ✅ Share on social media
5. ✅ Keep updating with new projects

## Need Help?

- Read the full README.md
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs
- Email: suhailahmedamro786@gmail.com

---

**Congratulations! Your portfolio is ready to impress!** 🚀
