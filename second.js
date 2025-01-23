import React from "react";
import ReactDom from "react-dom/client";
 const person="  Gudiya";
 const age=21;
 const obj={
     city:"lucknow",
    state:"UP",

}
 const styler ={
     backgroundColor:"coral",
     color:"white",
    fontSize:"30px",

 }
 const newElement=(
 <>
 <h1 id="first" className="start">I'm {person} and my age is {age}</h1>
 <h2 style={styler}>I am from {obj.city} {obj.state}..</h2>
 </>
 );
//function component

function greet(){
    return<h1>have a nice day!</h1>
};
const meet=()=>{
    return<h2>how's everything</h2>
}

const Reactmain=ReactDom.createRoot(document.getElementById('main'));
Reactmain.render(<> {greet()}  {meet()}</>);
















