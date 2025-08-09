# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. Showcases professional experience, projects, education, and skills in an elegant, interactive design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Automatic theme switching with system preference detection
- **Interactive Animations**: Smooth transitions and hover effects
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Optimized meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework for production
- **React 19.1.1** - UI library
- **TypeScript** - Type safety and better DX
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible UI components

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Geist** - Font optimization

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup
1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   │   ├── hero.tsx      # Hero section
│   │   ├── projects.tsx  # Projects showcase
│   │   ├── experience.tsx # Work experience
│   │   ├── education.tsx # Education details
│   │   ├── skills.tsx    # Technical skills
│   │   ├── leadership.tsx # Leadership experience
│   │   └── achievements.tsx # Achievements
│   ├── ui/              # Reusable UI components
│   └── theme-provider.tsx # Theme provider
├── public/              # Static assets
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── styles/             # Additional styles
```

## 🎨 Customization

### Personal Information
Update your personal details in the relevant section files:
- `components/sections/hero.tsx` - Hero section content
- `components/sections/experience.tsx` - Work experience
- `components/sections/projects.tsx` - Project details
- `components/sections/education.tsx` - Education details

### Styling
- Global styles: `app/globals.css`
- Theme configuration: `tailwind.config.js`
- Component styles: Individual component files

### Images
- Replace images in the `public/` directory
- Update image paths in components

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with automatic updates

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Use AWS console
- **Docker**: Build and deploy container

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- **Image Optimization**: Automatic Next.js image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Automatic font optimization
- **Static Generation**: Pre-rendered pages for faster loading

## 📊 Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support, create an issue in the repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Radix UI for accessible components
- Framer Motion for smooth animations
