import React from 'react';
import BurgerIngredient from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.module.css'
const burger = props => {
    let transformIngridients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformIngridients.length === 0){
        transformIngridients = <h3>Please add your topins </h3>;
    }

    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformIngridients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;