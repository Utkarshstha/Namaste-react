const heading= React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {},"hlo i am h1")));
    const root= ReactDOM.createRoot(document.getElementById("head1"));
    root.render(heading);