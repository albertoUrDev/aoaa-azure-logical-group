import * as React from "react";
import { useState } from 'react';
import {
  DefaultButton,
  Modal,
  DialogFooter,
  PrimaryButton,
  TextField,
  mergeStyleSets,
  Stack,
  DetailsRow,
  IconButton,
  getTheme,
  FontWeights,
  Dropdown,
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  DetailsHeader,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";

function App() {

  const [hideFirstDialog, { toggle: toggleHideFirstDialog }] = useBoolean(true);
  const [hideSecondDialog, { toggle: toggleHideSecondDialog }] = useBoolean(true);
  const [hideThirdDialog, { toggle: toggleHideThirdDialog }] = useBoolean(true);
  const [name, setName] = React.useState();
  const [owner, setOwner] = React.useState();
    const [budget, setBudget] = React.useState();


  const [alertListState, setAlerts] = useState([
    {
      key: "Alert1",
      alertName: "Optimus Group",
      description: "Optimus Group has gone over its $500 budget",
    },
    {
      key: "Alert2",
      alertName: "Some Group",
      description: "Some Group 2 has gone over its $100 budget",
    },
  ]);
  
function removeAlert(item){
  let result = [];
              for(let i = 0; i < alertListState.length; ++i){
                console.log(alertListState[i]);
                if(alertListState[i].key !== item.key){
                  result.push(alertListState[i]);
                }
                setAlerts(result);
              }
}

  const defaultGroup = [
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
    /*{
      key: "Another Group",
      name: "Another Group - 1010",
      startIndex: 3,
      count: 3,
      level: 0,
    },*/
  ];
  const [group, setGroup] = React.useState(defaultGroup);
    const columns = [
    {
      key: "Group Name",
      name: "GroupName",
      fieldName: "GroupName",
      minWidth: 200,
      maxWidth: 200,
    },
    {
      key: "Description",
      name: "Type",
      fieldName: "Description",
      minWidth: 300,
      maxWidth: 300,
    },
    {
      key: "Subscription",
      name: "Subscription/ResourceGroup",
      fieldName: "Subscription",
      minWidth: 300,
      maxWidth: 300,
    },
    ];
    

    const tempColumns = [];
    const [newColumns, setTempColumns] = React.useState(tempColumns);

    const defaultItems = [
    {
      key: "budgetforecastpremium-prod",
      GroupName: "budgetforecastpremium-prod",
      Description: "sites",
      Subscription:
        "MSFT-AOABudgetForecastingNAlert-02/prod-budgetnforecasting_v2",
    },
    {
      key: "budgetalertdetection-prod-law",
      GroupName: "budgetalertdetection-prod-law",
      Description: "workspaces",
      Subscription:
        "MSFT-AOABudgetForecastingNAlert-02/prod-budgetnforecasting_v2",
    },
    {
      key: "azsk20200604225038",
      GroupName: "azsk20200604225038",
      Description: "storageAccounts",
      Subscription: "MSFT-AOABudgetForecastingNAlert-02/AzSKRG",
    },
    {
      key: "cognitoprod",
      GroupName: "cognitoprod",
      Description: "Clusters",
      Subscription: "MSFT-AOAAnalytics-Prod/cognitoprod",
    },
    {
      key: "azskcseaoaasa",
      GroupName: "azskcseaoaasa",
      Description: "storageAccounts",
      Subscription: "MSFT-AOAAnalytics-Prod/azsk-cse-aoaa-rg",
    },
    {
      key: "gsm625068112xt",
      GroupName: "gsm625068112xt",
      Description: "storageAccounts",
      Subscription: "MSFT-AOAAnalytics-Prod/GenevaWarmPathManageRG",
    },
    ];
    const [items, setItems] = React.useState(defaultItems);
  // This is based on the definition of items

  const ModalStyle = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
    },
  });
    const options2 = [
            {
                "key": "MSFT-AOABudgetForecastingNAlert-02/prod-budgetnforecasting_v2/sites/budgetforecastpremium-prod",
                "text": "budgetforecastpremium-prod"
            },
            {
                "key": "MSFT-AOABudgetForecastingNAlert-02/prod-budgetnforecasting_v2/workspaces/budgetalertdetection-prod-law",
                "text": "budgetalertdetection-prod-law"
            },
            {
                "key": "MSFT-AOABudgetForecastingNAlert-02/AzSKRG/storageAccounts/azsk20200604225038",
                "text": "azsk20200604225038"
            },
            {
                "key": "MSFT-AOAAnalytics-Prod/cognitoprod/Clusters/cognitoprod",
                "text": "cognitoprod"
            },
            {
                "key": "MSFT-AOAAnalytics-Prod/azsk-cse-aoaa-rg/storageAccounts/azskcseaoaasa",
                "text": "azskcseaoaasa"
            },
            {
                "key": "MSFT-AOAAnalytics-Prod/GenevaWarmPathManageRG/storageAccounts/gsm625068112xt",
                "text": "gsm625068112xt"
            },
            {
                "key": "MSFT-AOAAnalytics-PPE/npr-binli/storageAccounts/synccorefunction20200609",
                "text": "synccorefunction20200609"
            },
            {
                "key": "MSFT-AOAAnalytics-PPE/OPTIMUSDEV/FACTORIES/TESTFACTORY20210503235301",
                "text": "TESTFACTORY20210503235301"
            },
            {
                "key": "MSFT-AOAAnalytics-PPE/CognitoDev/Clusters/hackathoncostusage",
                "text": "hackathoncostusage"
            },
            {
                "key": "MSFT-AOABudgetForecastingNAlert-01/npr-budgetforecastalerting/sites/desperado-dev",
                "text": "desperado-dev"
            },
            {
                "key": "MSFT-AOABudgetForecastingNAlert-01/npr-budgetforecastalerting/sites/budgetforecastpremium-dev",
                "text": "budgetforecastpremium-dev"
            },
            {
                "key": "MSFT-AOABudgetForecastingNAlert-01/NPR-az-Proactive-reporting/storageAccounts/azproactivestorage",
                "text": "azproactivestorage"
            }
        
    ];

  const alertList = alertListState;
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
      minWidth: 350,
      maxWidth: 500,
      isResizable: true,
    },
    {
      key: "delete",
      name: "Delete",
      fieldName: "delete",
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
      onRender: (item) => (
        <DefaultButton onClick={ ()=>removeAlert(item)} text="X" />
      )
    },
  ];




 function componentDidMount(){
  setAlerts(alertList);
}

  const theme = getTheme();
  const contentStyles = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
      width: "900px",
    },
    header: [
      theme.fonts.xxLarge,
      {
        flex: "1 1 auto",
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: "flex",
        alignItems: "center",
        fontWeight: FontWeights.semibold,
        padding: "12px 12px 14px 24px",
      },
    ],
    body: {
      flex: "4 4 auto",
      padding: "0 24px 24px 24px",
      overflowY: "hidden",
      selectors: {
        p: { margin: "14px 0" },
        "p:first-child": { marginTop: 0 },
        "p:last-child": { marginBottom: 0 },
      },
    },
  });
  const iconButtonStyles = {
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: "auto",
      marginTop: "4px",
      marginRight: "2px",
    },
    rootHovered: {
      color: theme.palette.neutralDark,
    },
  };

    function addBudgetGroup() {
        for (var i = 0; i < newColumns.length; i++) {
            console.log(newColumns[i]["key"].split("/"));
            //Do something
            const splitted = newColumns[i]["key"].split("/")
            const subscription = splitted[0] + "/" + splitted[1]
            const type = splitted[2]

            items.push(
                {
                    key: newColumns[i]["text"],
                    GroupName: newColumns[i]["text"],
                    Description: type,
                    Subscription:
                    subscription,
                },
            )
        }
    // items.push({
    //   key: "Test test",
    //   GroupName: "Test test",
    //   Description: "Test test",
    // });
    group.push({
      key: name,
      name: name + " - " + budget,
      startIndex: 6,
        count: newColumns.length,
      level: 0,
    });
        setItems(items);
    setGroup(group);
}



  return (
    <>
      <div>
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideFirstDialog}
          text="Budget Groups"
          styles={{ root: { width: "135px" } }}
        />
        <Modal
          isOpen={!hideFirstDialog}
          onDismiss={toggleHideFirstDialog}
          isBlocking={false}
          containerClassName={ModalStyle.container}
        >
          <div className={contentStyles.header}>
            <h1>Budget Groups</h1>
            <IconButton
              styles={iconButtonStyles}
              iconProps={{ iconName: "Cancel" }}
              onClick={toggleHideFirstDialog}
            />
          </div>
          <div className={contentStyles.body}>
            <DetailsList
              items={items}
              groups={group}
              columns={columns}
              compact={true}
              onRenderDetailsHeader={(props) => (
                <DetailsHeader
                  {...props}
                  styles={{ root: { fontWeight: FontWeights.semibold } }}
                />
              )}
              onRenderRow={(props) => <DetailsRow {...props} />}
            />
          </div>
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
          <div className={contentStyles.header}>
            <h1>Create New Budget Groups</h1>
            <IconButton
              styles={iconButtonStyles}
              iconProps={{ iconName: "Cancel" }}
              onClick={toggleHideFirstDialog}
            />
          </div>
          <div className={contentStyles.body}>
            <TextField
              label="Name"
              required
              onChange={(_, newValue) => {
                setName(newValue);
              }}
            />
            <TextField
              label="Budget"
              required
              onChange={(_, newValue) => {
                setBudget(newValue);
              }}
            />
            <TextField
              label="Owner"
              required
              onChange={(_, newValue) => {
                setOwner(newValue);
              }}
            />
            <Dropdown
              placeholder="Select resource(s)"
              label="Select resource(s)"
              multiSelect
              required
              options={options2}
              styles={{ root: { width: 300 } }}
              onChange={(event, option) => {
                  newColumns.push(option);
                  setTempColumns(newColumns);
              }}
            />
            <DialogFooter>
              <PrimaryButton
                onClick={() => {
                  addBudgetGroup();
                  toggleHideSecondDialog();
                }}
                text="Create a new budget group"
              />
              <DefaultButton onClick={toggleHideSecondDialog} text="Cancel" />
            </DialogFooter>
          </div>
        </Modal>
      </div>
      <div>
        <DefaultButton
          secondaryText="Opens the Sample Dialog"
          onClick={toggleHideThirdDialog}
          text="Alerts"
          styles={{ root: { width: "135px" } }}
        />
        <Modal
          isOpen={!hideThirdDialog}
          onDismiss={dialog3ContentProps}
          isBlocking={false}
          containerClassName={ModalStyle.container}
        >

          <div className={contentStyles.header}>
            <h1>Alerts</h1>
            <IconButton
              styles={iconButtonStyles}
              iconProps={{ iconName: "Cancel" }}
              onClick={toggleHideFirstDialog}
            />
          </div>
          <div className={contentStyles.body}>
            <DetailsList
              items={alertListState}
              columns={alertColumns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.fixed}
              selectionMode="none"
              checkboxVisibility={CheckboxVisibility.hidden}
              onItemInvoked={(item) =>
                alert("Alert details: " + item.description)
              }
            />
          </div>
          <DialogFooter>
            <DefaultButton onClick={toggleHideThirdDialog} text="Cancel" />
          </DialogFooter>
        </Modal>
      </div>
    </>
  );
}

export default App;
