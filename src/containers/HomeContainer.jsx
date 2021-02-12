// import React from "react";
import {connect} from "react-redux";
import {addToCart} from "../service/actions/action";
import Home from "../components/Home";

const mapStateToProps = state =>({
    data:state.cardItems

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)




// export default Home;