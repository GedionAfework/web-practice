import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class Second extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=738b8730fa5740a89fbd2f31bd61ef51";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    if (!this.state.articles) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="bg-dark">
        <div className="container my-3">
          <h2>Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
