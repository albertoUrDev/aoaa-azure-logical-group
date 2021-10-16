import * as React from "react";
import {
  DefaultButton,
  Modal,
  ChoiceGroup,
  DialogFooter,
  PrimaryButton,
  TextField,
  mergeStyleSets,
  Stack,
  getNextResizeGroupStateProvider,
} from "@fluentui/react";
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
} from "@fluentui/react/lib/DetailsList";
import { useBoolean } from "@fluentui/react-hooks";

function getGroups1() {
  console.log('getGroups');

  const response = new XMLHttpRequest();

  const requestBody = JSON.stringify({"db":"hackathonproject","csl":"getBudgetGroups\r\n| limit 10","properties":{"Options":{"servertimeout":"00:04:00","queryconsistency":"strongconsistency","query_language":"csl","request_readonly":false,"request_readonly_hardline":false}}});

  response.open("POST", 'https://cognitodev.westus2.kusto.windows.net/v2/rest/query');
  response.setRequestHeader('Authorization', 'Bearer');
  response.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  response.setRequestHeader('Accept', 'application/json');

  response.send(requestBody);

  response.onload = () => {
    console.log('getGroups1.Kusto response:' + response.response);
  }
}

function addGroup(token) {
  console.log('addGroup');

  const url = 'https://cognitodev.westus2.kusto.windows.net/v1/rest/mgmt';
  const body = {"db":"hackathonproject","csl":".set-or-append Group <| print Id = new_guid(), Name = \"Budget Group 1015\", Owner = \"o1\", Budget = 1000.0, BudgetThresold = 100, Timestamp = now()","properties":{"Options":{"query_language":"csl","servertimeout":"00:04:00","queryconsistency":"strongconsistency","request_readonly":false,"request_readonly_hardline":false}}};

  fetch(
    url,
    {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"   
      },
      body: JSON.stringify(body),
      method: "POST"
    }
  )
  .then(data => data.json())
  .then((json) => {
    console.log('addGroup:\r\n' + JSON.stringify(json));
  });
}

function addAlert(token) {
  console.log('addAlert');

  const url = 'https://cognitodev.westus2.kusto.windows.net/v1/rest/mgmt';
  const body = {"db":"hackathonproject","csl":".set-or-append Alert <|\n    print Id = new_guid(), Type = \"OverBudget\", GroupId = new_guid(), GeneratedOn = now()","properties":{"Options":{"query_language":"csl","servertimeout":"00:04:00","queryconsistency":"strongconsistency","request_readonly":false,"request_readonly_hardline":false}}};

  fetch(
    url,
    {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"   
      },
      body: JSON.stringify(body),
      method: "POST"
    }
  )
  .then(data => data.json()
  .then((json) => {
    console.log('addAlert:\r\n' + JSON.stringify(json));
  }))
}

function getGroups2(token) {
  console.log('getGroups2');

  const url = 'https://cognitodev.westus2.kusto.windows.net/v2/rest/query';
  const getGroupsRequestBody = {"db":"hackathonproject","csl":"getBudgetGroups\r\n","properties":{"Options":{"servertimeout":"00:04:00","queryconsistency":"strongconsistency","query_language":"csl","request_readonly":false,"request_readonly_hardline":false}}};

  fetch(
    url,
    {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"   
      },
      body: JSON.stringify(getGroupsRequestBody),
      method: "POST"
    }
  )
  .then(data => data.json())
  .then((json) => {
    console.log('getGroups2:\r\n' + JSON.stringify(json));
  });
}

function App() {
  const token = 'Bearer';

  getGroups2(token);
  addGroup(token);
  addAlert(token);

  const [hideFirstDialog, { toggle: toggleHideFirstDialog }] = useBoolean(true);
  const [hideSecondDialog, { toggle: toggleHideSecondDialog }] =
    useBoolean(true);
  const [hideThirdDialog, { toggle: toggleHideThirdDialog }] = useBoolean(true);
  const page1Content = [
    {
      Name: "Optimus Group",
      Budget: 300,
      resources: [
        { Name: "Test Storage Account", type: "storage account" },
        { Name: "Test Azure Function", type: "azure function" },
      ],
    },
    {
      Name: "Some Group",
      Budget: 300,
      resources: [{ Name: "Test Storage Account", type: "storage account" }],
    },
    {
      Name: "Another Group",
      Budget: 300,
      resources: [
        { Name: "Test Storage Account", type: "storage account" },
        { Name: "Test Azure Function", type: "azure function" },
        { Name: "Test App Service", type: "app service" },
      ],
    },
  ];
  const columns = [
    {
      key: "Group Name",
      name: "GroupName",
      fieldName: "GroupName",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: "Budget",
      name: "Budget",
      fieldName: "Budget",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: "Description",
      name: "Description",
      fieldName: "Description",
      minWidth: 100,
      maxWidth: 200,
    },
  ];
  const items = [
    {
      key: "Test Storage Account",
      GroupName: "Test Storage Account",
      Description: "storage account",
    },
    {
      key: "Test Azure Function",
      GroupName: "Test Azure Function",
      Description: "azure function",
    },
    {
      key: "Test Storage Account",
      GroupName: "Test Storage Account",
      Description: "storage account",
    },
    {
      key: "Test Storage Account",
      GroupName: "Test Storage Account",
      Description: "storage account",
    },
    {
      key: "Test Azure Function",
      GroupName: "Test Azure Function",
      Description: "azure function",
    },
    {
      key: "Test App Service",
      GroupName: "Test App Service",
      Description: "app service",
    },
  ];
  // This is based on the definition of items
  const groups = [
    {
      key: "Optimus Group",
      name: "Optimus Group - 500",
      startIndex: 0,
      count: 2,
      level: 0,
    },
    {
      key: "Some Group",
      name: "Some Group - 100",
      startIndex: 2,
      count: 1,
      level: 0,
    },
    {
      key: "Another Group",
      name: "Another Group - 1010",
      startIndex: 3,
      count: 3,
      level: 0,
    },
  ];
  const ModalStyle = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
      width: "800px",
      height: "800px",
    },
  });
  const options2 = [
    { key: "Resource1", text: "Resource 1" },
    { key: "Resource2", text: "Resource 2" },
    { key: "Resource3", text: "Resource 3" },
  ];
  const alertList = [
    {
      key: "Alert1",
      alertName: "Alert1",
      description: "Budget group 1 has gone over its $300 budget",
      delete: "X",
    },
    {
      key: "Alert2",
      alertName: "Alert2",
      description: "Budget group 2 has gone over its $5000 budget",
      delete: "X",
    },
  ];
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
    {
      key: "alertName",
      name: "Alert Name",
      fieldName: "alertName",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "description",
      name: "Description",
      fieldName: "description",
      minWidth: 150,
      maxWidth: 300,
      isResizable: true,
    },
    {
      key: "delete",
      name: "Delete",
      fieldName: "delete",
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
    },
  ];
  return (
    <>
      <div className="modal-tab-size">
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideFirstDialog}
          text="Budget Groups"
        />
        <Modal
          isOpen={!hideFirstDialog}
          onDismiss={toggleHideFirstDialog}
          isBlocking={false}
          containerClassName={ModalStyle.container}
        >
          <Stack
            horizontalAlign="center"
            verticalAlign="center"
            styles={{ root: { height: "100px" } }}
          >
            <h1>Budget Groups</h1>
          </Stack>
          <Stack horizontalAlign="center">
            <DetailsList
              items={items}
              groups={groups}
              columns={columns}
              compact={true}
            />
          </Stack>
          <Stack verticalAlign="end" horizontalAlign="end">
            <DialogFooter>
              <PrimaryButton
                onClick={() => {
                  toggleHideFirstDialog();
                  toggleHideSecondDialog();
                }}
                text="Add New Group"
              />
              <DefaultButton onClick={toggleHideFirstDialog} text="Cancel" />
            </DialogFooter>
          </Stack>
        </Modal>
        <Modal
          isOpen={!hideSecondDialog}
          onDismiss={toggleHideSecondDialog}
          isBlocking={false}
          containerClassName={ModalStyle.container}
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
        </Modal>
      </div>
      <div className="modal-tab-size">
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideThirdDialog}
          text="Alerts"
        />
        <Modal
          isOpen={!hideThirdDialog}
          onDismiss={dialog3ContentProps}
          isBlocking={false}
          containerClassName={ModalStyle.container}
        >
          <DetailsList
            items={alertList}
            columns={alertColumns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixed}
            selectionMode="none"
            checkboxVisibility={CheckboxVisibility.hidden}
            onItemInvoked={(item) =>
              alert("Alert details: " + item.description)
            }
          />
          <DialogFooter>
            <DefaultButton onClick={toggleHideThirdDialog} text="Cancel" />
          </DialogFooter>
        </Modal>
      </div>
    </>
  );
}

export default App;
