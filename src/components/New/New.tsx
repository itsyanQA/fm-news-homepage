import "./New.scss";
import news from "../../data/news.json";

export default function New() {
  return (
    <div className="new">
      <h2 className="new__title">New</h2>
      {news.map((newsItem, index) => {
        return (
          <div className="new__item" key={index}>
            <h3 className="new__item__title">{newsItem.title}</h3>
            <p className="new__item__description">{newsItem.description}</p>
          </div>
        );
      })}
    </div>
  );
}
