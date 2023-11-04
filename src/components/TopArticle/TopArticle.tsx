import "./TopArticle.scss";

type TopArticleProps = {
  image: string;
  number: string;
  title: string;
  description: string;
};

export default function TopArticle(props: TopArticleProps) {
  const { image, number, title, description } = props;

  return (
    <div className="article">
      <img className="article__image" src={require(`../../assets/images/${image}`)} alt="pc" />
      <div className="article__info-container">
        <span className="article__number">{number}</span>
        <h4 className="article__title">{title}</h4>
        <p className="article__description">{description}</p>
      </div>
    </div>
  );
}
