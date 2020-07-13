import React from "react";
import {Counterdown} from "../components";

const Counter = () => {
    return <Counterdown count={0} reset={10} tick={1000}/>
}

export default Counter