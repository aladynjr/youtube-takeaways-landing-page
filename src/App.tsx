import { Youtube, Book,  PenTool, Brain, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Chrome, Github, Scroll, Mail } from "lucide-react"
import { useState, useEffect } from 'react'
import { 
  Play, 
  SkipForward, 
  Volume2, 
  Settings, 
  Maximize, 
  RotateCcw,
  BookOpen,
  BrainCircuit
} from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

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
            alt="YouTube Takeaways Logo" 
            className="w-10 h-10 rounded-lg" // This matches the original 40px size with medium rounding
          />
          <span className="text-xl font-bold">YouTube Takeaways</span>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Logo size={128} id="downloadableLogo" className="mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Elevate Your YouTube Learning Experience
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Capture key insights and test your knowledge while watching educational content. Seamlessly integrated, beautifully designed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF] text-white hover:opacity-90 transition-opacity">
                <Chrome className="mr-2 h-5 w-5" /> Add to Chrome
              </Button>
              <Link href="https://github.com/yourusername/youtube-takeaways" className="text-[#A259FF] hover:underline font-medium">
                Visit GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">See It in Action</h2>
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-sm">
              <div className="flex gap-4">
                {/* YouTube Player */}
                <div className="flex-1">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Simple Play Button Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300/30 flex items-center justify-center">
                          <div className="h-8 w-8 flex items-center justify-center gap-1">
                            <div className="w-2 h-8 bg-gray-400 rounded-sm"></div>
                            <div className="w-2 h-8 bg-gray-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle Animated Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent animate-shimmer" />
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-200/80 to-transparent">
                      <div className="relative h-1 bg-gray-300 rounded-full mb-4">
                        <div 
                          className="absolute left-0 top-0 h-full bg-gray-400 rounded-full transition-all duration-300"
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
                <div className="w-80 space-y-3">
                  {/* Progress Bar Card */}
                  <Card className="p-4 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Takeaways</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-xs bg-black text-white hover:bg-black/90 h-6 px-2">
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
        </section>

        <section className="container mx-auto px-6 py-20 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 text-[#FF6B6B]" /> Smart Takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                Key points appear seamlessly as you watch, helping you retain information effortlessly.
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BrainCircuit className="mr-2 text-[#A259FF]" /> Interactive Quizzes
                </CardTitle>
              </CardHeader>
              <CardContent>
                Test your understanding with intelligently timed knowledge checks.
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scroll className="mr-2 text-[#2B9FFF]" /> Seamless Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                Designed to complement your viewing experience, not interrupt it.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { q: "How does YouTube Takeaways work?", a: "Our extension analyzes the video content in real-time, extracting key points and generating quizzes to enhance your learning experience." },
                { q: "Is it free to use?", a: "Yes, YouTube Takeaways is completely free and open-source." },
                { q: "Can I use it on any YouTube video?", a: "While it works best with educational content, you can use it on any YouTube video." },
                { q: "How can I contribute to the project?", a: "Visit our GitHub repository to contribute code, report issues, or suggest new features." }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Reach out to the developer directly.
          </p>
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            <Mail className="mr-2 h-5 w-5" /> Contact Developer
          </Button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Logo size={40} />
              <span className="text-sm">© 2024 YouTube Takeaways</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#" className="text-sm hover:text-[#A259FF] transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-sm hover:text-[#A259FF] transition-colors">Terms</Link></li>
                <li><Link href="https://github.com/yourusername/youtube-takeaways" className="text-sm hover:text-[#A259FF] transition-colors">GitHub</Link></li>
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
