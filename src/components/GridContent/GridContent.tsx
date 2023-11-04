import "./GridContent.scss";

export default function GridContent() {
  return (
    <div className="grid-content">
      <img className="grid-content__image" alt="web3" />
      <div className="grid-content__bottom">
        <h1 className="grid-content__title">The Bright Future of Web 3.0?</h1>
        <div className="grid-content__description-container">
          <p className="grid-content__description">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But
            is it really fulfilling its promise?
          </p>
          <button className="grid-content__button">read more</button>
        </div>
      </div>
    </div>
  );
}
