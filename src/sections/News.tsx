import { useEffect, useState } from "react"
import { NewsCard } from "../components/NewsCard"
import NewsArticle from "../types/NewsType"
import { motion } from "framer-motion"


export const News = () => {

    const [news, setNews] = useState<NewsArticle[]>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://gnews.io/api/v4/search?q=criptomonedas&token=8fd22376f395b305ff981d629fc2f7d6&max=3&lang=es');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                setError(error.message + ", intente mas tarde. Probablemente se hayan superado las consultas diarias de API");
            }
        };
        fetchNews();
    }, [])


        return (
        <motion.section
            id="noticias"
            className="xl:h-[70vh] bg-black flex flex-col items-center justify-evenly"
            initial={{ opacity: 0 }}
            whileInView={{ opacity:  1}}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <motion.h3
                className="mt-10 text-3xl font-bold text-white"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Últimas noticias
            </motion.h3>

            {error ? (
                <p className="text-lg text-red-500">{error}</p>
            ) : (
                <motion.div
                    className="grid gap-6 px-4 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    {news.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                                delay: 0.2 + index * 0.2, // Incrementar el retraso para animaciones secuenciales
                            }}
                        >
                            <NewsCard
                                title={article.title}
                                description={article.description}
                                url={article.url}
                                publishedAt={article.publishedAt}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.section>
    );  
}