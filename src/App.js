import * as React from "react";
import { Dropdown, Toggle } from "@fluentui/react";

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
    <>
      <Dropdown
        placeholder="Select a logical group"
        label="Select a logical group"
        options={options}
        styles={dropdownStyles}
      />
      <Toggle
        label="My Toggle example"
        defaultChecked
        onText="Active"
        offText="Disabled"
        onChange={_onChange}
        role="checkbox"
      />
    </>
  );
}

export default App;
