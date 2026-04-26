# Adnane Touzouz - Computer Vision Portfolio

A professional portfolio website showcasing computer vision projects and expertise in deep learning and AI technologies.

## Features

- **Modern Design**: Dark theme with gradient accents optimized for showcasing technical work
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Project Showcase**: Dedicated section for featuring computer vision projects
- **Experience Timeline**: Display professional background and achievements
- **Skills Section**: Organized presentation of technical skills and expertise
- **Contact Integration**: Easy ways to connect and discuss opportunities

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Navigation & Header**: Edit the name in `app/page.tsx` (line 21)
2. **Hero Section**: Update the headline and description
3. **LinkedIn URL**: Already set to your profile
4. **Email**: Update the contact email in the Contact section

### Add Your Projects

Edit the `projects` array in `app/page.tsx` to showcase your own projects:

```tsx
{
  title: 'Your Project Title',
  description: 'Brief description of your project',
  tags: ['Technology1', 'Technology2', 'Technology3'],
}
```

### Update Experience

Customize the `experience` array with your actual work experience:

```tsx
{
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Start - End',
  description: 'Brief description of your role',
}
```

### Update Skills

Edit the `skills` array to reflect your technical expertise:

```tsx
{
  category: 'Category Name',
  items: ['Skill1', 'Skill2', 'Skill3'],
}
```

## Deployment

The portfolio is ready to deploy on Vercel with zero configuration:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global Tailwind styles
├── public/              # Static assets
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Tips for Your Portfolio

1. **Add Project Links**: Consider adding GitHub links or live demos for your projects
2. **Include Metrics**: Add quantifiable results (e.g., "Improved accuracy by 15%")
3. **Add Images**: Include project screenshots or demos in the projects section
4. **Keep Updated**: Regularly update with new projects and achievements
5. **Optimize for SEO**: The metadata is already configured for search engines

## License

© 2024 Adnane Touzouz. All rights reserved.
