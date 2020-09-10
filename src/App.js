import React from "react";
import "./css/index.css";
import List from "./list-connect.js";
import data from "./data";

export default class App extends React.Component {
  state = {
    openName:"家人"//存储当前哪一项展开，如果没有展开项openName为空
  }
  setOpenName = (openName)=>{
    this.setState({
      openName
    })

  }
  render() {
    console.log("啦啦啦啦"+this.state.openName)
    return (
      <div className="friend-list">
        {data.map((item,index) => {
          return <List key={index} data={item} openName={this.state.openName} setOpenName={this.setOpenName}/>;
        })}
      </div>
    );
  }
}
