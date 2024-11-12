import { Scroll } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Chrome, Github, Mail } from "lucide-react"
import { useState, useEffect } from 'react'
import { 
  Play, 
  SkipForward, 
  Volume2, 
  Settings, 
  Maximize, 
  RotateCcw,
} from 'lucide-react'
import {
  Card,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Link({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}



 function LandingPage() {
  const [currentTakeaway, setCurrentTakeaway] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const takeaways = [
    { id: 1, time: 12.5, text: "Focus on solving real problems that you've personally experienced. Your own frustrations are often the best source of startup ideas." },
    { id: 2, time: 25, text: "Start by building something a small group of users love, rather than something many users just like. Intense love from a small group is more valuable than mild interest from many." },
    { id: 3, time: 37.5, text: "Launch fast and iterate based on user feedback. Your first version should be embarrassingly simple. If you're not embarrassed by your first release, you launched too late." },
    { id: 4, time: 50, text: "Growth follows product-market fit. Don't focus on growth tactics until you have clear evidence that users love your product and keep coming back." },
    { id: 5, time: 62.5, text: "Talk to your users constantly. The most successful founders spend up to 50% of their time talking to users, especially in the early days." },
    { id: 6, time: 75, text: "Choose your co-founders carefully. Founder disputes are one of the top reasons startups fail. Look for complementary skills and aligned values." },
    { id: 7, time: 87.5, text: "Focus on metrics that matter: revenue, active users, and retention. Vanity metrics like total signups can be misleading." }
    ]

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress(p => {
          const newProgress = p + 0.5
          const newTakeaway = takeaways.findIndex(t => (t.time) > newProgress) + 1
          if (newTakeaway !== currentTakeaway && newTakeaway > 0) {
            setCurrentTakeaway(newTakeaway)
          }
          if (newProgress >= 100) {
            setProgress(0)
            setCurrentTakeaway(1)
            return 0
          }
          return newProgress
        })
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isPlaying, currentTakeaway])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/android-chrome-192x192.png" 
            alt="Takeaways Logo" 
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-xl font-bold">Takeaways</span>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Logo 
              size={128} 
              id="downloadableLogo" 
              className="mx-auto mb-6 md:mb-8 w-20 md:w-32 h-20 md:h-32" 
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
              Takeaways: Smart Notes for YouTube
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
              Get real-time key takeaways and interactive quizzes while watching podcasts or educational videos. Get more from youtube videos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF] text-white hover:opacity-90 transition-opacity"
              >
                <Chrome className="mr-2 h-5 w-5" /> Add to Chrome
              </Button>
              <Link 
                href="https://github.com/aladynjr/youtube-takeaways"
                className="flex items-center font-semibold text-sm text-black underline hover:text-gray-700 transition-all"
              >
                <Github className="mr-2 h-5 w-5" /> Visit GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How it <span className="bg-gradient-to-r from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF] bg-clip-text text-transparent">works</span></h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Key insights appear as you watch, with timeline markers showing exactly when each takeaway occurs.
            </p>
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-sm">
              <div className="flex gap-4 flex-col lg:flex-row">
                {/* YouTube Player */}
                <div className="flex-1 opacity-80">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
                    {/* Animated Background with White Gradient Overlay */}
                    <div className="absolute inset-0">
                      {/* Base gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                      
                      {/* White gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
                      
                      {/* Simple Play Button Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-50">
                        <div className="w-16 h-16 rounded-full bg-gray-300/20 flex items-center justify-center">
                          <div className="h-8 w-8 flex items-center justify-center gap-1">
                            <div className="w-2 h-8 bg-gray-300 rounded-sm"></div>
                            <div className="w-2 h-8 bg-gray-300 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle Animated Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent animate-shimmer opacity-30" />
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 to-transparent">
                      <div className="relative h-1 bg-gray-300 rounded-full mb-4">
                        <div 
                          className="absolute left-0 top-0 h-full bg-red-500 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-4">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="hover:bg-gray-200/50"
                            onClick={() => setIsPlaying(!isPlaying)}
                          >
                            {isPlaying ? (
                              <div className="flex items-center justify-center gap-0.5">
                                <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                                <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                              </div>
                            ) : (
                              <Play className="h-5 w-5" />
                            )}
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200/50">
                            <SkipForward className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200/50">
                            <Volume2 className="h-5 w-5" />
                          </Button>
                          <span className="text-sm">
                            {Math.floor(progress * 45.5 / 100)}:{String(Math.floor((progress * 45.5 % 1) * 60)).padStart(2, '0')} / 45:30
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200/50">
                            <Settings className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200/50">
                            <Maximize className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mt-4 text-gray-400">Startup School Podcast: Essential Lessons for First-Time Founders</h2>
                </div>

                {/* Takeaways Panel */}
                <div className="w-full lg:w-80 space-y-3">
                  <div className="rounded-xl p-[4px] bg-gradient-to-r from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF]">
                    <div className="bg-white p-4 rounded-lg space-y-3">
                      {/* Progress Bar Card */}
                      <Card className="p-4 bg-white shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Takeaways</h3>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-xs bg-black text-white  h-6 px-2">
                              <Play className="h-2 w-2 mr-1 fill-current" /> Play Quiz
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="relative h-1 bg-gray-100 rounded-full">
                          <div 
                            className="absolute left-0 top-0 h-full bg-gray-200 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                          {takeaways.map((takeaway) => (
                            <div
                              key={takeaway.id}
                              className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full transition-all duration-300
                                ${takeaway.id === currentTakeaway ? 'bg-red-500 scale-125' : 'bg-blue-200 scale-100'}`}
                              style={{ left: `calc(${takeaway.time}% - 6px)` }}
                            />
                          ))}
                        </div>
                      </Card>

                      {/* Current Takeaway Card */}
                      <Card className="p-4 bg-white shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-2 w-2 bg-red-500 rounded-full" />
                          <span className="font-medium">Key Takeaway #{currentTakeaway}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {takeaways.find(t => t.id === currentTakeaway)?.text}
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">Features & FAQ</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { 
                    q: "What are the key features?", 
                    a: "YouTube Takeaways offers three main features:\n\n" +
                       "1. Real-time Takeaways: Key points appear automatically as you watch, synchronized with the video timeline.\n\n" +
                       "2. Interactive Timeline: Visual markers show important moments, making it easy to revisit key concepts.\n\n" +
                       "3. AI-Generated Quizzes: Test your understanding with automatically generated questions based on the video content."
                  },
                  { 
                    q: "How does YouTube Takeaways work?", 
                    a: "The extension uses video captions and Gemini AI to analyze content in real-time. It processes the captions locally, identifies key points, and generates relevant quiz questions. All data is cached for faster loading on repeat views." 
                  },
                  { 
                    q: "Is it free to use?", 
                    a: "The extension is free and open-source. You'll need a free Google AI (Gemini) API key from Google AI Studio to use it. The free tier includes thousands of requests per month." 
                  },
                  { 
                    q: "Can I use it on any YouTube video?", 
                    a: "The extension works best with educational content, lectures, and interviews that have captions enabled. It analyzes the video content to ensure it's suitable for generating takeaways." 
                  },
                  { 
                    q: "How can I contribute to the project?", 
                    a: "Visit our GitHub repository to contribute code, report issues, or suggest new features. The project is open-source and welcomes community contributions." 
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12 md:py-32 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Reach out to the developer directly.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            onClick={() => window.open('https://x.com/aladdinnjr', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" /> Contact Developer
          </Button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/android-chrome-192x192.png" 
                alt="Takeaways Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-sm">© 2024 Takeaways</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/privacy-policy.html" className="text-sm hover:text-[#A259FF] transition-colors">Privacy</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Logo = ({ size = 32, id, className }: { size?: number, id?: string, className?: string }) => (
  <div 
    id={id} 
    className={`relative rounded-xl overflow-hidden ${className || ''}`} 
    style={{ width: size, height: size }}
  >
    {/* Make gradient div fill the entire space */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF]" />
    
    {/* Center the Scroll icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Scroll 
        className="text-white" 
        style={{ width: size/2, height: size/2 }} 
      />
    </div>
    
    {/* Decorative elements */}
    <div className="absolute inset-0">
      <svg className="absolute top-1/3 -right-6 w-[62.5%] h-[62.5%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <svg className="absolute top-3 left-1/3 w-[43.75%] h-[43.75%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <svg className="absolute -bottom-4 left-2 w-[37.5%] h-[37.5%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
)

function App() {
  return (
    <LandingPage />
  )
}

export default App
