import * as React from "react";
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
  const [hideSecondDialog, { toggle: toggleHideSecondDialog }] =
    useBoolean(true);
  const [hideThirdDialog, { toggle: toggleHideThirdDialog }] = useBoolean(true);
  const [name, setName] = React.useState();
  const [owner, setOwner] = React.useState();
  const [budget, setBudget] = React.useState();
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
    {
      key: "Another Group",
      name: "Another Group - 1010",
      startIndex: 3,
      count: 3,
      level: 0,
    },
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
  const items = [
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
      key: "budgetforecastpremium-prod",
      text: "budgetforecastpremium-prod",
    },
    {
      key: "budgetalertdetection-prod-law",
      text: "budgetalertdetection-prod-law",
    },
    {
      key: "azsk20200604225038",
      text: "azsk20200604225038",
    },
    {
      key: "cognitoprod",
      text: "cognitoprod",
    },
    {
      key: "azskcseaoaasa",
      text: "azskcseaoaasa",
    },
    {
      key: "gsm625068112xt",
      text: "gsm625068112xt",
    },
    {
      key: "synccorefunction20200609",
      text: "synccorefunction20200609",
    },
    {
      key: "TESTFACTORY20210503235301",
      text: "TESTFACTORY20210503235301",
    },
    {
      key: "hackathoncostusage",
      text: "hackathoncostusage",
    },
    {
      key: "desperado-dev",
      text: "desperado-dev",
    },
    {
      key: "budgetforecastpremium-dev",
      text: "budgetforecastpremium-dev",
    },
    {
      key: "azproactivestorage",
      text: "azproactivestorage",
    },
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
    // items.push({
    //   key: "Test test",
    //   GroupName: "Test test",
    //   Description: "Test test",
    // });
    group.push({
      key: name,
      name: name + " - " + budget,
      startIndex: 6,
      count: 1,
      level: 0,
    });
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
                console.log(option);
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
