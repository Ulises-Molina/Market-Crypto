import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const Hero = () => {
    return (
        <main className="relative flex items-center justify-center min-w-[440px] h-screen ">
            <div id='hero'
                className="absolute inset-0 z-0 min-w-[440px]"
            >
                <div className="absolute inset-0 min-w-[440px] bg-black/50" />
            </div>
            <div className="relative z-10 flex flex-col justify-center px-4 m-5 text-center">
                <motion.h1
                    className="mb-6 text-xl font-bold tracking-tight text-white lg:text-4xl md:text-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 25,
                        mass: 1,
                    }}
                >
                        Las criptomonedas son el futuro
                    
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto mb-8 text-gray-200 text-md lg:text-xl md:text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    Explora el mundo de las criptomonedas con datos en tiempo real,
                    análisis detallados y herramientas avanzadas
                </motion.p>

                <motion.a
                    href="#mercado"
                    className="flex flex-row self-center justify-center p-2 bg-white rounded w-52 hover:bg-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                >
                    <p>Comenzar ahora</p>
                    <ArrowRight className="w-4 h-4 mt-1 ml-2" />
                </motion.a>
            </div>
        </main>
    );
};
