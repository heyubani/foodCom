import React, { Component } from "react";
import axios from "axios";
import { FormatText } from "./util";
import { Ratings } from "./ratings";

class FoodList extends Component {
  state = {
    meals: [],
  };

  componentDidMount() {
    axios
      .get("https://asm-dev-api.herokuapp.com/api/v1/food")
      .then((res) =>
        this.setState({
          meals: res.data.data.meals,
        })
      )
      .catch((err) => console.log(err));
    }
    
  render() {
    const { meals } = this.state;
    return (
      <>
      <div className="card">
        {meals.map((item) => {
          return (
            <div className="card-body">
              <img src={item.strMealThumb} alt={item.title} />
              <div className="discription-body">
                <div className="title_price">
                  <h4>{item.title}</h4>
                  <h4>{item.price}</h4>
                </div>
                <div className="text-body">
                  <p className="par">{item.strMeal}</p>
                  <text className="text">
                    {FormatText(item.description, 150)}
                  </text>
                </div>
                <div className="btn_div">
                  <Ratings className="star" ratings={item.ratings} />
                  <h1 className="btn">
                    <i class="fa fa-plus"></i>
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <button href="$" className="btn_">learn more</button>
      </>
    );
  }
}

export default FoodList;
