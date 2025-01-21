interface NewsSource {
    name: string;
    url: string;
}

interface NewsArticle {
    title: string;
    description: string;
    content?: string;
    url: string;
    image?: string;
    publishedAt: string;
    source?: NewsSource;
}

export default NewsArticle