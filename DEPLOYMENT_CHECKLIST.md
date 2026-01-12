# Deployment Checklist

Use this checklist before deploying your portfolio to ensure everything is ready.

## Pre-Deployment Checklist

### 1. Content Review
- [ ] Personal information updated in `lib/cv-data.ts`
- [ ] All education entries are correct
- [ ] Skills list is up-to-date
- [ ] Projects showcase your best work
- [ ] Achievements are listed
- [ ] Contact information is accurate
- [ ] All links work correctly

### 2. Functionality Testing
- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Dark/light mode toggle functions properly
- [ ] PDF CV downloads successfully
- [ ] PDF contains correct information
- [ ] Contact form displays correctly
- [ ] All interactive elements work (buttons, links, etc.)

### 3. Responsive Design
- [ ] Test on desktop (1920px, 1366px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on mobile (375px, 414px)
- [ ] Images scale properly
- [ ] Text is readable on all devices
- [ ] Navigation menu works on mobile

### 4. Browser Compatibility
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] No console errors in any browser

### 5. Performance
- [ ] Run `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Check bundle size is reasonable
- [ ] Images are optimized
- [ ] No unnecessary dependencies

### 6. SEO & Metadata
- [ ] Page titles are descriptive
- [ ] Meta descriptions are set
- [ ] Keywords are relevant
- [ ] robots.txt is configured
- [ ] Sitemap is generated
- [ ] Open Graph tags work

### 7. Security
- [ ] No API keys exposed in code
- [ ] Environment variables are secure
- [ ] No sensitive data in repository
- [ ] .gitignore includes necessary files

### 8. Code Quality
- [ ] No TypeScript errors (`npm run build`)
- [ ] No ESLint warnings
- [ ] Code is commented where necessary
- [ ] Unused imports removed
- [ ] Console.logs removed

### 9. Git & Version Control
- [ ] All changes committed
- [ ] Commit messages are descriptive
- [ ] Repository is pushed to GitHub
- [ ] README is complete
- [ ] LICENSE file added (if needed)

### 10. Vercel Deployment
- [ ] Vercel account created
- [ ] Project imported correctly
- [ ] Build settings configured
- [ ] Environment variables added (if any)
- [ ] Custom domain connected (optional)

## Post-Deployment Checklist

### 1. Live Site Testing
- [ ] Visit deployed URL
- [ ] Test all pages on live site
- [ ] Verify PDF download works on live site
- [ ] Check dark mode on live site
- [ ] Test contact form on live site
- [ ] Verify all images load
- [ ] Check mobile responsiveness on real device

### 2. Performance Monitoring
- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Verify loading speed is acceptable
- [ ] Test from different locations (if possible)

### 3. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags with SEO checker
- [ ] Check Open Graph preview
- [ ] Test social media sharing

### 4. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Configure tracking
- [ ] Test event tracking

### 5. Final Checks
- [ ] Share URL with friends for feedback
- [ ] Test on different devices
- [ ] Update portfolio link on resume
- [ ] Add to LinkedIn profile
- [ ] Share on social media

## Common Issues & Quick Fixes

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### PDF Not Working on Vercel
- Check if serverless function timeout is sufficient
- Verify `@react-pdf/renderer` version compatibility
- Check Vercel logs for errors

### Styles Not Loading
- Verify `tailwind.config.ts` includes all paths
- Check `globals.css` imports
- Clear browser cache

### 404 Errors
- Ensure all pages are in correct folders
- Check file naming (page.tsx not Page.tsx)
- Verify deployment includes all files

## Deployment Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
vercel

# Deploy to production on Vercel
vercel --prod
```

## Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

**Once all items are checked, you're ready to deploy!** 🚀

**Deployment Date**: _____________

**Live URL**: _____________

**Notes**: _____________
