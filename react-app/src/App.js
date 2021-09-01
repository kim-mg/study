import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

// 컴포넌트는 반드시 하나의 최상위 태그로 시작해야 한다.
// 반드시 하나의 최상위 태그만 써야한다.
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welocme', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'},
      ]
    }
  }
  render() {
    console.log('App reader');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          {/* 이벤트를 적용시키는 방법 */}
            <h1><a href="/" onClick={function(e){
              console.log(e);
              // 상위 태그를 사용하지 못하도록 하는 코드
              e.preventDefault();
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
