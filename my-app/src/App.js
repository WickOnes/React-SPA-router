import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Publication from "./components/Publication";
import Photo from "./components/Photo";
import {Contacts} from "./components/Contacts";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Router>
        <Header/>
          <Route path="/" exact component={Main} />
          <Route path="/React-SPA-router" component={Start} />
          <Route path="/Publication" exact component={Publication} />
          <Route path="/Photo" exact component={Photo} />
          <Route path="/Contacts" exact component={Contacts} />
          <Route path="/Contacts/:id" exact component={Contact} />
        </Router>
      </div>
    </div>
  );
}

export default App;
