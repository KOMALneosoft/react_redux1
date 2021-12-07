import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar1 from "./navbar";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar1 />
    </div>
  );
}
/* const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};
const mapDispatchTopProps = (dispatch) => {
  return {
    cart: function () {
      dispatch({ type: "CART", payload: 1 });
    },
  };
}; */
//export default connect(mapStateToProps, mapDispatchTopProps)(App);
export default App;
