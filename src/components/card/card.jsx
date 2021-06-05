import React, { Component } from "react";

class Card extends Component {
  displayChildren = () => {
    const { cardItems } = this.props.card;
    if (cardItems) return cardItems.map((item) => item);
  };
  render() {
    let { className, cardTitle } = { ...this.props.card };
    className = className || "";
    cardTitle = cardTitle || "";

    return (
      <React.Fragment>
        <section className={className}>
          <h1 className="card-title">{cardTitle}</h1>
          {this.displayChildren()}
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
