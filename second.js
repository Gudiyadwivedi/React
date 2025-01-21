const element=React.createElement("h1",{id:"first",className:"learning",style:{backgroundColor:"yellowgreen",fontsize:"20px",color:"white"}},"Hello everyone!");
const element2=React.createElement("h2",{id:"second",className:"learning",style:{backgroundColor:"yellowgreen",fontsize:"20px",color:"white"}},"How's going on!");
const div1=React.createElement('div',{},[element,element2]);

const Reactmain=ReactDOM.createRoot(document.getElementById('main'));
// Reactmain.render(element);
// main.render(element2);
Reactmain.render(div1);

