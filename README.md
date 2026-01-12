# Suhail Ahmed - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features include dark/light mode toggle, PDF CV generation, interactive skills showcase, and a professional contact form.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **PDF CV Download**: Generate and download professional CV in PDF format
- **Interactive UI**: Animated skill progress bars and smooth transitions
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **Modern Stack**: TypeScript, Tailwind CSS, and React best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: @react-pdf/renderer
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## Project Structure

```
portfolio-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with education & achievements
│   ├── api/
│   │   └── download-cv/
│   │       └── route.ts       # PDF generation API route
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── projects/
│   │   └── page.tsx          # Projects gallery
│   ├── skills/
│   │   └── page.tsx          # Skills with progress bars
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page
├── components/
│   ├── CVDocument.tsx        # PDF CV template
│   ├── Footer.tsx            # Footer component
│   ├── Navbar.tsx            # Navigation bar
│   ├── ThemeProvider.tsx     # Theme context provider
│   └── ThemeToggle.tsx       # Dark/light mode toggle
├── lib/
│   └── cv-data.ts            # CV data structure
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Update Personal Information

Edit `lib/cv-data.ts` to update your personal information, education, skills, and projects:

```typescript
export const cvData = {
  personal: {
    name: "Your Name",
    email: "your.email@example.com",
    // ... other details
  },
  // ... rest of the data
};
```

### Modify Color Scheme

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: {
    // Update these values
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
},
```

### Add New Pages

Create a new folder in the `app` directory:

```bash
app/new-page/page.tsx
```

### Update Navigation

Edit `components/Navbar.tsx` to add new navigation links:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/new-page", label: "New Page" },
  // ...
];
```

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd portfolio-website
   vercel
   ```

4. **Follow the prompts** and your site will be deployed!

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure project**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **Click "Deploy"**

7. **Your site will be live** at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Environment Variables

If you need environment variables (e.g., for email service):

1. Create `.env.local` file in the root:
   ```bash
   cp .env.example .env.local
   ```

2. Add your variables:
   ```
   EMAIL_SERVICE_API_KEY=your_key_here
   ```

3. In Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add the same variables

## PDF CV Customization

The PDF CV is generated using `@react-pdf/renderer`. To customize:

1. **Edit template**: `components/CVDocument.tsx`
2. **Update data**: `lib/cv-data.ts`
3. **Modify styles**: Update the `StyleSheet.create()` in `CVDocument.tsx`

## Performance Optimization

- **Images**: Use Next.js Image component for automatic optimization
- **Fonts**: Fonts are loaded via next/font for optimal performance
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Configure in `next.config.js`

## SEO Optimization

Each page has metadata defined:

```typescript
export const metadata = {
  title: "Your Page Title",
  description: "Your page description",
  keywords: ["keyword1", "keyword2"],
};
```

## Troubleshooting

### PDF Generation Issues

If PDF download doesn't work:
- Check browser console for errors
- Ensure `@react-pdf/renderer` is installed
- Verify API route is accessible at `/api/download-cv`

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Theme Not Persisting

- Check if `next-themes` is properly configured
- Verify `ThemeProvider` wraps the app in `layout.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Suhail Ahmed**
- Email: suhailahmedamro786@gmail.com
- Phone: +92 309 3305243
- Portfolio: https://my-portfilo-41201.vercel.app/

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- PDF generation by [@react-pdf/renderer](https://react-pdf.org/)

---

Made with ❤️ by Suhail Ahmed
