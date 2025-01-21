import NewsArticle from "../types/NewsType";

export const NewsCard: React.FC<NewsArticle> = ({ title, description, url, publishedAt }) => {

    const apiDateString: string = publishedAt;
    const apiDate: Date = new Date(apiDateString);
    const formattedDate: string = apiDate.toLocaleDateString('es-ES');




    return (
        <div className="flex flex-col gap-3 px-6 py-5 text-white border rounded bg-neutral-950 border-white/20">
            <p className="text-2xl font-bold line-clamp-1">{title}</p>
            <p className="text-sm">{formattedDate}</p>
            <p className="line-clamp-3">{description}</p>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Leer más
            </a>
        </div>
    );
}
