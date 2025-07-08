# AI Interview Platform

An intelligent interview practice platform powered by AI that helps users prepare for job interviews through realistic voice conversations, personalized feedback, and performance analytics.

## 🚀 Features

### Core Functionality
- **AI-Powered Voice Interviews**: Conduct realistic interviews using Vapi AI's voice technology
- **Real-time Transcription**: Live speech-to-text conversion during interviews
- **Personalized Feedback**: AI-generated feedback on communication, technical knowledge, problem-solving, cultural fit, and confidence
- **Interview History**: Track and review past interview sessions
- **User Authentication**: Secure login/signup with Firebase Authentication
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components

### Technical Features
- **Voice AI Integration**: Powered by Vapi AI for natural voice conversations
- **Real-time Communication**: WebSocket-based voice streaming
- **Performance Analytics**: Detailed scoring across multiple interview categories
- **Database Integration**: Firebase Firestore for data persistence
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Voice AI**: Vapi AI SDK
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React hooks and context
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before running this project, you'll need:

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Firebase project with Authentication and Firestore enabled
- Vapi AI account and API credentials

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin (for server-side operations)
FIREBASE_ADMIN_PROJECT_ID=your_firebase_project_id
FIREBASE_ADMIN_PRIVATE_KEY=your_firebase_admin_private_key
FIREBASE_ADMIN_CLIENT_EMAIL=your_firebase_admin_client_email

# Vapi AI Configuration
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
VAPI_PRIVATE_KEY=your_vapi_private_key

# Google AI (for feedback generation)
GOOGLE_AI_API_KEY=your_google_ai_api_key
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interview-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   - Copy the example environment variables above
   - Create a `.env.local` file in the root directory
   - Fill in your actual API keys and configuration

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
interview-platform/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, forms, etc.)
│   ├── Agent.tsx         # Voice AI interview component
│   ├── AuthForm.tsx      # Authentication forms
│   └── InterviewCard.tsx # Interview display component
├── lib/                  # Utility libraries
│   ├── actions/          # Server actions
│   ├── utils.ts          # Helper functions
│   └── vapi.sdk.ts       # Vapi AI SDK configuration
├── firebase/             # Firebase configuration
├── constants/            # Application constants
└── types/               # TypeScript type definitions
```

## 🎯 Key Components

### Agent Component
The core interview interface that handles:
- Voice AI integration with Vapi
- Real-time transcription
- Call state management
- Interview flow control

### Authentication
- Firebase Authentication integration
- Protected routes
- User session management

### Interview Flow
1. User signs up/logs in
2. Navigate to interview section
3. Start AI-powered voice interview
4. Receive real-time feedback
5. View detailed performance analytics

## 🔒 Security Features

- Firebase Authentication for user management
- Protected API routes
- Environment variable protection
- Type-safe API calls with Zod validation

## 🎨 UI/UX Features

- Modern, responsive design
- Dark/light theme support
- Smooth animations and transitions
- Accessible components with Radix UI
- Mobile-friendly interface

## 📊 Performance Analytics

The platform provides detailed feedback across five key areas:
- **Communication Skills**: Clarity, articulation, and professional communication
- **Technical Knowledge**: Domain expertise and technical proficiency
- **Problem Solving**: Analytical thinking and solution approach
- **Cultural Fit**: Alignment with company values and team dynamics
- **Confidence and Clarity**: Self-assurance and presentation skills

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Roadmap

- [ ] Multi-language support
- [ ] Interview question customization
- [ ] Advanced analytics dashboard
- [ ] Integration with job boards
- [ ] Mock interview scheduling
- [ ] Video interview support
- [ ] Team collaboration features

---

Built with ❤️ using Next.js, React, and Vapi AI
