import { Shield, Timer, ChartColumn, Globe } from "lucide-react"
import { motion } from "framer-motion"

export const Features = () => {
    
    

    return (
        <section
            id="nosotros"
            className="xl:h-[60vh] bg-neutral-950 flex flex-col items-center justify-evenly"
        >
            <motion.h3
                className="mt-10 text-3xl font-bold text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1 , y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                ¿Por qué elegirnos?
            </motion.h3>

            <motion.div
                className="grid gap-10 px-4 my-20 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity:  1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
                <motion.div
                    className="flex flex-col gap-5 px-6 py-5 text-white border rounded bg-black/50 border-white/20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y:  0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
                >
                    <Shield className="w-12 h-12" />
                    <p className="text-2xl font-bold">Seguridad Garantizada</p>
                    <p>Protección de datos y los más altos estándares de seguridad</p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-5 px-6 py-5 text-white border rounded bg-black/50 border-white/20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                >
                    <Timer className="w-12 h-12" />
                    <p className="text-2xl font-bold">Actualizaciones en Tiempo Real</p>
                    <p>Datos y precios actualizados al instante desde múltiples exchanges</p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-5 px-6 py-5 text-white border rounded bg-black/50 border-white/20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
                >
                    <ChartColumn className="w-12 h-12" />
                    <p className="text-2xl font-bold">Análisis Avanzado</p>
                    <p>
                        Herramientas de análisis técnico y fundamental para tomar mejores
                        decisiones
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-5 px-6 py-5 text-white border rounded bg-black/50 border-white/20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                    <Globe className="w-12 h-12" />
                    <p className="text-2xl font-bold">Cobertura Global</p>
                    <p>Acceso a mercados y criptomonedas de todo el mundo</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
