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

      <dl className={show ? "friend-group expanded" : "friend-group"}>
        <dt
          onClick={() => {
            console.log("0", show);
            this.setState({
              show: !show,
            });
          }}
        >
          {name}
        </dt>
        {children.map((item, index) => {
          return <dd key={index}>{item.name}</dd>;
        })}
      </dl>
    );
  }
}
