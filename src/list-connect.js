import React from "react";
export default class List extends React.Component {
  state = {
    show: false,
  };
  render() {
    let { show } = this.state;
    let { data,openName ,setOpenName} = this.props;
    let { name, children } = data;
    return (
      <dl className={`friend-group  ${name === openName?"expanded":""}`}>
        <dt onClick={()=>{
            setOpenName(name===openName?"":name);
        }}>
          {name}
        </dt>
        {children.map((item, index) => {
          return <dd key={index}>{item.name}</dd>;
        })}
      </dl>
    );
  }
}
