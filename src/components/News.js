import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import moment from 'moment/moment';
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize: 8,
    category:"general"
  }
  // static PropTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  // }

    capitalize=(word)=>{
      const lower=word.toLowerCase();
      return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }

  constructor(props){
    super(props);
    console.log("constructor new ");
    this.state={
        articles:[],
        loading:true,
        page:1,
      totalResults:0}
        document.title=`${this.capitalize(this.props.category)}-NewsPiggy-Get Daily News Free!!`;
  }

  async componentDidMount(){
    this.props.setProgress(10);
    let articleUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    this.props.setProgress(30);
    let data= await fetch(articleUrl);
    this.props.setProgress(50);
    let parsedata= await data.json();
    this.props.setProgress(70);
    console.log(parsedata);
    this.setState({
      articles:parsedata.articles,
      totalResults:parsedata.totalResults,
      loading:false})
      this.props.setProgress(100);
  }

  handelPrevious=async ()=>{
    console.log("previous",this.state.page)
    let articleUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(articleUrl);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({
      page:this.state.page-1,
      articles:parsedata.articles,
      loading:false});
  }

  handelNext=async ()=>{
    if (this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    console.log("next",this.state.page)
    let articleUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(articleUrl);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({
      page:this.state.page+1,
      articles:parsedata.articles,
      loading:false});
  }}
  fetchMoreData =async ()=>{
    this.setState({page:this.state.page+1});
    let articleUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data= await fetch(articleUrl);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({
      articles:this.state.articles.concat(parsedata.articles),
      totalResults:parsedata.totalResults
      })
  }

  

  render() {
    return (
      <div className='container my-3' style={{}}>
        <h2 style={{textAlign:"center",marginTop:"70px"}}>
          <hr style={{border:"0.5px solid grey"}}/>
          <b>NewsPiggy-Get Daily News Free</b>
          <hr style={{border:"0.5px solid grey"}}/>
        </h2>

        <div className="container d-flex justify-content-between">
        <div>
          <b style={{fontFamily:"monospace",fontSize:"16px"}}>{moment().format("dddd, Do MMMM")}</b>
        <br/>
        <span style={{fontFamily:"monospace",fontSize:"15px"}}>{moment().format('LT')}</span>
        </div>
        <div>
          <i class="fa fa-dot-circle-o" style={{"fontSize":"16px","color":"red"}}></i>&nbsp;{this.capitalize(this.props.category)}
        </div>
        </div>
        
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row my-3">
            { this.state.articles.map((element)=>{
              return <div className="col-sm-4 my-2" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):"Click on Read More to view details"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} sourse={element.source.name}/>
            </div>
            })}
          </div>
          </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">

          <button disabled={this.state.page<=1} type="button" class="btn btn-outline-dark" onClick={this.handelPrevious}>
            &larr; Previous
          </button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-outline-dark" onClick={this.handelNext}>
            Next &rarr;
          </button> 

          </div> */}

      </div>
    )
  }
}

export default News
