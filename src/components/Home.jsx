import React from "react";
import "./Home.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Home = (props) => {
    console.log("home", props.data)
    return (
        <>
            <div className="add_to_cart">
                <span className="cart_count">{props.data.length}</span>
                <ShoppingCartIcon />

            </div>
            <h1>Home Page</h1>
            <div className="cart_wrapper item">
                <div className="img_wrapper item">
                    <img src="https://source.unsplash.com/300x300/?smart,phone" alt="cartimg" />
                </div>
                <div className="text_wrapper item">
                    <span>
                        I-Phone &nbsp;

                    </span>
                    <span>
                        Price: $400.00
                    </span>

                </div>
                <div className="btn_wrapper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ price: 1000 })
                        }>Add to Cart</button>

                </div>
            </div>
        </>
    );
};

export default Home;