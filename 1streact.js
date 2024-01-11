// // 1st head
const heading= React.createElement("h1", {id:"heading" ,x:"utkarsh"}, "Hello world from Reactanother");
    const root= ReactDOM.createRoot(document.getElementById("head"));
    root.render(heading);


const heading1= React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {},"hlo i am h1")));
    const root2= ReactDOM.createRoot(document.getElementById("head2"));
    root2.render(heading1);

//    const heading2= React.createElement("div", {id:"parent"}, React.createElement("div", {id:child}, React.createElement("h1", {},"Hello i am h1") ));
// const root2= ReactDOM.createRoot(document.getElementById("head2"));
// root2.render(heading2);

