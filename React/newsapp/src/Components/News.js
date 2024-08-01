import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = { language: "en", pageSize: 12, category: "general" };

  static propTypes = {
    language: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = { articles: [], page: 1 };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?language=${this.props.language}&category=${this.props.category}&apiKey=738b8730fa5740a89fbd2f31bd61ef51&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=${
      this.props.language
    }&category=${
      this.props.category
    }&apiKey=738b8730fa5740a89fbd2f31bd61ef51&page=${
      this.state.page - 1
    }&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=${
      this.props.language
    }&category=${
      this.props.category
    }&apiKey=738b8730fa5740a89fbd2f31bd61ef51&page=${
      this.state.page + 1
    }&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    if (!this.state.articles) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <div className="container my-3">
          <h2>Headlines</h2>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-2" key={element.url}>
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
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              className="btn btn-secondary"
            >
              &larr;Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
              }
              onClick={this.handleNextClick}
              className="btn btn-secondary"
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
