import React from "react";
export default class List extends React.Component {
  state = {
    show: false,
  };
  render() {
    let { show } = this.state;
    let { data } = this.props;
    let { name, children } = data;
    console.log(data);
    return (
      // <dl className="friend-group expanded">

      <dl className="friend-group expanded">
        <dt>
          {name}
        </dt>
        {children.map((item, index) => {
          return <dd key={index}>{item.name}</dd>;
        })}
      </dl>
    );
  }
}
