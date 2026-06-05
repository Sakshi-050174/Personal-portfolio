import { Mail } from 'lucide-react'

const LinkedinIcon = (props:object) =>{
    return (
        <svg 
        role="img" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        width="24" 
        height="24" 
        {...props}
        >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.367 4.267 5.445v6.303zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.454C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0z"/>
        </svg>
    );
}

export default function Contact() {
   
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-cyan-400">
          Contact Me
        </h2>

        <p className="mt-6 text-slate-400">
          Interested in collaborating or hiring?
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Mail />
            <span>sakshi.gupta050174@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
           <a href="https://www.linkedin.com/in/sakshi-gupta-874990361" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cyan-400 hover:underline">
             <LinkedinIcon />
            <span>LinkedIn Profile</span>
           </a>
          </div>
        </div>
      </div>
    </section>
  )
}