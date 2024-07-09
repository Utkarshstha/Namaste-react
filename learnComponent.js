import React from "react";
import ReactDOM from "react-dom/client";

// creating rect elemnt using core react
const heading=React.createElement("h1", {id:"head"}, "hello i am h1jsx");

// creating rect elemnt using JSX
const headingjsx=<h1>hello h1 from jsx</h1>


// FUCNTIONAL COMPONENT

const Title =() =>(
    <h1>Nameste  react  .</h1>
)

const HeadingComponent= ()=>(
    
    <div id="container">
        <Title/>
       {/* {Title()}  */}
        <h2>{"Importing react element"}</h2>
        {headingjsx}
        <h1>hello i am functional component ?/</h1>
    </div>
    
)

const Root1= ReactDOM.createRoot(document.getElementById("root"));
// Root1.render(headingjsx);
Root1.render(<HeadingComponent/>)
