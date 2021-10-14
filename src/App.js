import * as React from "react";
import { Dropdown, Toggle} from "@fluentui/react";
import { Nav, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BudgetsPage from './components/BudgetsPage';
import AlertsPage from './components/AlertsPage'; 

function App() {
  let displayNames = [];
  let options = [];
  const url =
    "https://management.azure.com/subscriptions?api-version=2020-01-01";
  const dropdownStyles = {
    dropdown: { width: 300 },
  };
  function _onChange(ev, checked) {
    console.log("toggle is " + (checked ? "checked" : "not checked"));
  }
  //update token everytime
  const token = "123";
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await response.json();
        json.value.map((o) => displayNames.push(o.id));
        displayNames.forEach((name) => options.push({ key: name, text: name }));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div class="wrapper">
    <Navbar />
    <Router>
      <Switch>
        <Route path='/BudgetsPage' exact component={BudgetsPage}/>
        <Route path='/AlertsPage' exact component={AlertsPage}/>
      </Switch>
    </Router>
    </div>

  );
}


export default App;
