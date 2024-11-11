import { Youtube, Book, Scroll, PenTool, Brain, Lightbulb } from 'lucide-react'

function App() {
  return (
    <div className="relative w-32 h-32 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#A259FF] to-[#2B9FFF]" />
      <Scroll className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <svg className="absolute top-1/3 -right-6 w-20 h-20" viewBox="0 0 24 24" fill="none">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <svg className="absolute top-3 left-1/3 w-14 h-14" viewBox="0 0 24 24" fill="none">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <svg className="absolute -bottom-4 left-2 w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M10 4L12 2M10 2L12 4M8 3H14M11 0V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

export default App
