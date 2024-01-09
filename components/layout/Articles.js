import React, { useEffect, useState } from "react";
import ArticleCard from "../elements/ArticleCard"

export default function Articles() {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dev.to/api/articles?username=lucassul');
                if (!response.ok) {
                    throw new Error('Error! Bad Request!');
                }
                const data = await response.json();
                setMyData(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };

        fetchData();
    }, []);

    const articleCard = myData ? (
        myData.map((article) => (
            <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                date={
                    new Intl.DateTimeFormat(
                        'en-US', { month: 'short', year: 'numeric' })
                        .format(new Date(article.published_timestamp.slice(0, 10)))
                        .toUpperCase()
                }
                url={article.url}
                image={article.cover_image}
            />
        ))
    ) : (
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )

    return (
        <div class="container mt-5" id="articles">
            <h2 class="text-shorter fw-bold">Skills</h2>
            <h3 class="fs-4" style={{ color: "#555" }}>My latest articles</h3>
            <div class="row">
                {articleCard}
            </div>
        </div>
    );
}
