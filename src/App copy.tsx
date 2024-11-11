import { Youtube, Book, Scroll, PenTool, Brain, Lightbulb } from 'lucide-react'

function App() {
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Original Scroll - Warm Sunset */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9671] to-[#FFC75F]" />
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

      {/* Original Brain - Teal Energy */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06D6A0] to-[#1B9AAA]" />
        <Brain className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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

      {/* New Variation 1: Scroll - Modern Gradient (Image Inspired) */}
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

      {/* New Variation 2: Scroll - YouTube Red */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] via-[#FF4444] to-[#FF8888]" />
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

      {/* New Variation 3: Scroll - YouTube Dark */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#282828] via-[#404040] to-[#FF0000]" />
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

      {/* New Variation 4: Brain - Modern Gradient (Image Inspired) */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C37] via-[#E559FF] to-[#3B9FFF]" />
        <Brain className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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

      {/* New Variation 5: Brain - YouTube Creator */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] via-[#FF3366] to-[#2B9FFF]" />
        <Brain className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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

      {/* New Variation 6: Brain - YouTube Gaming */}
      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6441A5] via-[#2B9FFF] to-[#00FF94]" />
        <Brain className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
    </div>
  )
}

export default App
