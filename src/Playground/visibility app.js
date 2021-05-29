let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}; 
//visibility app
const render = () => {
    const template = (
     <div>
        <h1>Visibility toogle</h1>
     <button onClick={toggle}>
     {visibility ? 'Hide details' : 'show details'}
     </button>
     {/* If visibility is true &&*/}
     {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
     </div>
);
ReactDOM.render(template, document.getElementById("app"));
};

render();

