import "./TopArticles.scss";
import articles from "../../data/top-articles.json";
import TopArticle from "../TopArticle/TopArticle";

export default function TopArticles() {
  return (
    <div className="articles">
      {articles.map((article) => (
        <TopArticle
          key={article.number}
          image={article.image}
          number={article.number}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
}
