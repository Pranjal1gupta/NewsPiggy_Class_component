import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageNo=12;
  apiKey=process.env.REACT_APP_APIKEY;
  state={
    progress:0
  }
  setProgress=(prog)=>{
    this.setState({progress:prog})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path='/'element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="home" pageSize={this.pageNo} country="in" category="general"/>}/>
        <Route exact path='/Business'element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={this.pageNo} country="in" category="business"/>}/>
        <Route path='/Entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="" pageSize={this.pageNo} country="in" category="entertainment"/>}/>
        <Route path='/General' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageNo} country="in" category="general"/>}/>
        <Route path='/Health' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={this.pageNo} country="in" category="health"/>}/>
        <Route path='/Science' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={this.pageNo} country="in" category="science"/>}/>
        <Route path='/Sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={this.pageNo} country="in" category="sports"/>}/>
        <Route path='/Technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={this.pageNo} country="in" category="technology"/>}/>
        </Routes>
      </div>
    )
  }
}
