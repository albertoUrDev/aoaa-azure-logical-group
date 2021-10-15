import * as React from "react";
import {
  DefaultButton,
  Dialog,
  ChoiceGroup,
  DialogFooter,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import { DetailsList, DetailsListLayoutMode, Selection, IColumn, CheckboxVisibility } from '@fluentui/react/lib/DetailsList';
import { useBoolean } from "@fluentui/react-hooks";

function App() {
  const [hideFirstDialog, { toggle: toggleHideFirstDialog }] = useBoolean(true);
  const [hideSecondDialog, { toggle: toggleHideSecondDialog }] =
    useBoolean(true);
  const [hideThirdDialog, { toggle: toggleHideThirdDialog }] = useBoolean(true);
  const options = [
    { key: "OptimumGroup", text: "Optimum Group" },
    { key: "SomeGroup", text: "SomeGroup" },
    { key: "AnotherGroup", text: "AnotherGroup" },
  ];
  const options2 = [
    { key: "Resource1", text: "Resource1" },
    { key: "Resource2", text: "Resource2" },
    { key: "Resource3", text: "Resource3" },
  ];
  const alertList = [
      { key: "Alert1", alertName:"Alert1", description: "Budget group 1 has gone over its $300 budget", delete:"X" },
      { key: "Alert2", alertName:"Alert2", description: "Budget group 2 has gone over its $5000 budget", delete:"X" },
  ]
  const modelProps = {
    isBlocking: true,
  };
  const dialogContentProps = {
    title: "Budget Groups",
  };
  const dialog2ContentProps = {
    title: "Create Budget Groups",
  };
  const dialog3ContentProps = {
    title: "Alerts",
  };
  const alertColumns = [
      { key: 'alertName', name: 'Alert Name', fieldName: 'alertName', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'description', name: 'Description', fieldName: 'description', minWidth: 150, maxWidth: 300, isResizable: true },
      { key: 'delete', name: 'Delete', fieldName: 'delete', minWidth: 50, maxWidth: 100, isResizable: true },
  ]
  return (
    <>
      <div className="modal-tab-size">
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideFirstDialog}
          text="Budget Groups"
        />
        <Dialog
          hidden={hideFirstDialog}
          onDismiss={toggleHideFirstDialog}
          dialogContentProps={dialogContentProps}
          modalProps={modelProps}
        >
          <ChoiceGroup defaultSelectedKey="B" options={options} />
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                toggleHideFirstDialog();
                toggleHideSecondDialog();
              }}
              text="AddNewGroup"
            />
            <DefaultButton onClick={toggleHideFirstDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
        <Dialog
          hidden={hideSecondDialog}
          onDismiss={toggleHideSecondDialog}
          dialogContentProps={dialog2ContentProps}
          modalProps={modelProps}
        >
          <TextField label="Name" />
          <TextField label="Budget" />
          <TextField label="Owner" />
          <ChoiceGroup defaultSelectedKey="B" options={options2} />
          <DialogFooter>
            <PrimaryButton
              onClick={toggleHideSecondDialog}
              text="Create Budget Group"
            />
            <DefaultButton onClick={toggleHideSecondDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
      <div className="modal-tab-size">
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideThirdDialog}
          text="Alerts"
        />
        <Dialog
          hidden={hideThirdDialog}
          onDismiss={toggleHideThirdDialog}
          dialogContentProps={dialog3ContentProps}
          modalProps={modelProps}
        >
          <DetailsList
            items={alertList}
            columns={alertColumns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixed}
            selectionMode="none"
            checkboxVisibility={CheckboxVisibility.hidden}
            onItemInvoked={(item) => alert('Alert details: '+ item.description)}
          />
          <DialogFooter>
            <DefaultButton onClick={toggleHideThirdDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default App;
