import * as React from "react";
import { Nav, INavLinkGroup } from '@fluentui/react/lib/Nav';


function Navbar(){
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        { name: 'Budget Groups', url: '../BudgetsPage', key: 'key1' },
        { name: 'Alerts', url: '../AlertsPage', key: 'key2' },
      ],
    }
  ];

  return (
      <div class="nav">
       <Nav 
        //onRenderGroupHeader={_onRenderGroupHeader}
        ariaLabel="Nav example with custom group headers"
        groups={navLinkGroups}
      />
      </div>
   );

}


export default Navbar;