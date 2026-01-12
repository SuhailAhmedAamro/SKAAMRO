# Quick Reference Card

## Essential Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
vercel
```

## File Locations

| What to Update | File Location |
|----------------|---------------|
| Personal Info | `lib/cv-data.ts` |
| Colors | `tailwind.config.ts` |
| Navigation | `components/Navbar.tsx` |
| Footer Links | `components/Footer.tsx` |
| Projects | `app/projects/page.tsx` |
| Skills | `app/skills/page.tsx` |
| PDF Template | `components/CVDocument.tsx` |

## Important URLs

| Page | Local URL | Description |
|------|-----------|-------------|
| Home | http://localhost:3000 | Landing page |
| About | http://localhost:3000/about | Education & achievements |
| Skills | http://localhost:3000/skills | Skills showcase |
| Projects | http://localhost:3000/projects | Project gallery |
| Contact | http://localhost:3000/contact | Contact form |
| CV PDF | http://localhost:3000/api/download-cv | Download CV |

## Common Tasks

### Update Personal Information
1. Open `lib/cv-data.ts`
2. Edit the `cvData` object
3. Save and refresh browser

### Change Colors
1. Open `tailwind.config.ts`
2. Modify `primary` colors
3. Restart dev server

### Add New Project
1. Open `app/projects/page.tsx`
2. Add object to `projects` array
3. Save and check browser

### Add Navigation Link
1. Open `components/Navbar.tsx`
2. Add to `navLinks` array
3. Create corresponding page

## Project Structure (Simplified)

```
portfolio-website/
├── app/                    # Pages & API routes
│   ├── page.tsx           # Home
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   └── api/download-cv/   # PDF API
├── components/             # Reusable components
├── lib/                    # Data & utilities
│   └── cv-data.ts         # YOUR INFO HERE
└── public/                 # Static files
```

## Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Won't start | `npm install` then `npm run dev` |
| Build error | `rm -rf .next node_modules` then `npm install` |
| PDF broken | Check `@react-pdf/renderer` is installed |
| Styles missing | Restart dev server |

## Deployment Steps (30 seconds)

1. `npm run build` (check for errors)
2. `vercel login`
3. `vercel`
4. Done! 🎉

## Key Features Checklist

- ✅ 5 Complete pages (Home, About, Skills, Projects, Contact)
- ✅ Dark/Light mode toggle
- ✅ PDF CV download
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Professional design
- ✅ Interactive skills bars
- ✅ Project showcase
- ✅ Contact form

## Your Information

**Name**: Suhail Ahmed Aamro
**Email**: suhailahmedamro786@gmail.com
**Phone**: +92 309 3305243
**Current Portfolio**: https://my-portfilo-41201.vercel.app/

## Next Steps

1. ✅ Navigate to `portfolio-website` folder
2. ✅ Run `npm install`
3. ✅ Update `lib/cv-data.ts` with your latest info
4. ✅ Run `npm run dev` to preview
5. ✅ Test PDF download
6. ✅ Deploy with `vercel`
7. ✅ Share your new portfolio! 🚀

---

**Need detailed help?** Read `README.md` or `SETUP_GUIDE.md`
