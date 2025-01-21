import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className={`fixed top-4 left-1/2 z-50 px-6 py-2 rounded-full transition-all duration-300 border border-white/10 ${isScrolled
                    ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/20'
                    : 'bg-white/5 backdrop-blur-md'
                }`}
        >
            <ul className="flex items-center gap-2 md:gap-12">
                <li>
                    <button
                        className="relative p-2 overflow-hidden transition-all duration-300 rounded-lg text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent before:absolute before:inset-0 before:bg-white/0 hover:before:bg-white/5 before:transition-colors"
                        onClick={() => scrollToSection("mercado")}
                    >
                        Mercado
                    </button>
                </li>
                <li>
                    <button
                        className="relative p-2 overflow-hidden transition-all duration-300 rounded-lg text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent before:absolute before:inset-0 before:bg-white/0 hover:before:bg-white/5 before:transition-colors"
                        onClick={() => scrollToSection("nosotros")}
                    >
                        Nosotros
                    </button>
                </li>
                <li>
                    <button
                        className="relative p-2 overflow-hidden transition-all duration-300 rounded-lg text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent before:absolute before:inset-0 before:bg-white/0 hover:before:bg-white/5 before:transition-colors"
                        onClick={() => scrollToSection("noticias")}
                    >
                        Noticias
                    </button>
                </li>
            </ul>
        </motion.div>
    )
}