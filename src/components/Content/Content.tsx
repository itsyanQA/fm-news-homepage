import GridContent from "../GridContent/GridContent";
import New from "../New/New";
import TopArticles from "../TopArticles/TopArticles";
import "./Content.scss";

export default function Content() {
  return (
    <main className="content-container">
      <div className="content-grid">
        <GridContent />
        <New />
      </div>
      <TopArticles />
    </main>
  );
}
