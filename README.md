# Modern SaaS Marketing Landing Page

A stunning, modern landing page for SaaS, a fictional AI-powered marketing platform. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

👉 [View Deployed Project on Netlify](https://your-deployment-url.com)

## 🚀 Features
---

## 📦 Tech Stack

- ⚛️ **Next.js 14+** with App Router
- ✨ **TypeScript** for type-safe development
- 🎨 **Tailwind CSS** + **Glassmorphism** UI
- 🎞 **Framer Motion** for advanced animations
- 🧩 8+ Reusable Components (Button, Card, Modal, etc.)
- ✅ **Form Validation** with custom hooks
- 📱 Fully **Responsive** & **Mobile-First**
- ⚡ Optimized performance using lazy loading, code-splitting, and Next.js `<Image>`

---

### Technical Features
- **Component-Based Architecture**: Reusable UI components
- **TypeScript**: Full type safety
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant
- **SEO Optimized**: Meta tags, structured data


## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Button component with variants
│   │   ├── Card.tsx        # Card component with glassmorphism
│   │   └── Container.tsx   # Container component
│   └── layout/             # Layout components
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section
│       ├── Features.tsx    # Features section
│       ├── Pricing.tsx     # Pricing section
│       ├── Testimonials.tsx # Testimonials carousel
│       ├── FAQ.tsx         # FAQ section
│       ├── Contact.tsx     # Contact section
│       └── Footer.tsx      # Footer component
├── styles/
│   └── globals.css         # Global styles and utilities
└── types/                  # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saas-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Purple gradient (#f093fb to #f5576c)
- **Accent**: Cyan gradient (#4facfe to #00f2fe)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Responsive**: Clamp-based responsive typography

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Glassmorphism effect with hover animations
- **Container**: Responsive container with max-widths

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast mode support
- Reduced motion support

## 🚀 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with tree shaking
- **Images**: Optimized and responsive

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/layout/`
2. Import and add to `src/app/page.tsx`
3. Follow the existing pattern for animations and styling

### Modifying Colors
Update the CSS variables in `src/styles/globals.css`:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
}
```

### Adding Animations
Use Framer Motion with the existing patterns:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email anshuman.23.2004.com or create an issue in this repository.

---

Built with ❤️
