import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../shared/actions/news";
import NewsList from "./NewsList";

class News extends Component {


  componentWillMount() {
    
      this.props.dispatch(fetchNews());
    
  }

  render() {
    console.log('this.props.news');
    console.log(this.props.news);
    console.log('this.props.news');
    const { news } = this.props;
    return(
      <div>
        hello
         {/* <NewsList news={news} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state')
  console.log(state)
  console.log('state')
  return {
    news: state.news
  };
};


export default connect(mapStateToProps)(News);
