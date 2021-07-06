import React, { Component } from "react";

export class Ratings extends Component {
  render() {
    return (
      <div className="star">
        {[...Array(5)].map((_, i) => {
          return (
            <span
              style={{ height:'15px', color: i + 1 <= this.props.ratings ? "orange" : "gray" }}
            >
				  <em className="fa fa-star" style={{fontSize:"15px"}}></em>
            </span>
          );
        })}
      </div>
    );
  }
}
