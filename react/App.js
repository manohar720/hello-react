/*/ core concept
const heading = React.createElement(
  //create elements inside react
  //const element = createElement(type, props{ }, ...children)
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from React" // in REACT create element have
  //three parameters tagName,object or Null, and child(optional)
);
//console.log(heading);return object
const root = ReactDOM.createRoot(document.getElementById("root")); //extract root div from document and put into React Dom
root.render(heading); //render method convert heading object to tag and put into DOM
*/
/**
     <div id ="parent">
        <div id = "child1">
           <h1> I'm H1 Tag </h1>
           <h2> I'm H2 Tag </h2>
        </div>
        <div id = "child2">
            <h3> I'm H3 Tag </h3>
            <h4> I'm H4 Tag </h4>
        </div>
      </div>
**/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      React.createElement("h1", {}, "I'm H1 Tag"),
      React.createElement("h1", {}, "I'm H1 Tag")
    ),
  ],
  [
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h3", {}, "I'm H3 Tag"),
      React.createElement("h4", {}, "I'm H4 Tag")
    ),
  ]
);

const root1 = ReactDOM.createRoot(document.getElementById("root1")); //extract root1  tag from document and put into React Dom
root1.render(parent);
