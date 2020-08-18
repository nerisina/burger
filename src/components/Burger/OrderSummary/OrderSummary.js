import React from "react";
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p> A delexious burger qith the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchasedCancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.purshaseContinue}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
