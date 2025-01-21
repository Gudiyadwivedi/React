const React ={
    createElement: function(tag,styles,children){
       const element= document.createElement(tag);

       if(typeof children ==='object'){
           for(let val of children)
            element.append(val);
        }
        else
        element.innerText=children;
        for(let key in styles){
        element.style[key]=styles[key];
        }
        return element;

    }
}
const ReactDOM = {
    render:function(element,main){
        main.append(element);
    }
}
const style_first =React.createElement('h1',{fontsize:"30px",backgroundColor:"yellowgreen",color:"white"},"Hello everyone!");
const style_second = React.createElement('h2',{fontsize:"30px",backgroundColor:"blue",color:"white"},"how's going on!");

const li1=React.createElement('li',{},"HTML");
const li2=React.createElement('li',{},"CSS");
const li3=React.createElement('li',{},"JavaScript");
 
const Ul = React.createElement('ul',{fontsize:"15px",backgroundColor:"blue",color:"white"},[li1,li2,li3]);

ReactDOM.render(style_first,document.getElementById('main'));
ReactDOM.render(style_second,document.getElementById('main'));
ReactDOM.render(Ul,document.getElementById('main'));






