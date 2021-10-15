import * as React from "react";
import {
  DefaultButton,
  Dialog,
  ChoiceGroup,
  DialogFooter,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
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

    const KustoClient = require("azure-kusto-data").Client;
    const KustoConnectionStringBuilder = require("azure-kusto-data").KustoConnectionStringBuilder;
    const ClientRequestProperties = require("azure-kusto-data").ClientRequestProperties;
    const { v4: uuidv4 } = require('uuid');

    const clusterConectionString = "https://cognitoprod.westus2.kusto.windows.net";
    const database = "Common";
    const table = "Common_Cloudfit_Reco_Daily_Comparison";

    const kcs = KustoConnectionStringBuilder.withAadDeviceAuthentication(clusterConectionString);
    const kustoClient = new KustoClient(kcs);

    async function startfunction() {
        // function body
        // kusto connection
        const ClientRequestProperties = require("azure-kusto-data").ClientRequestProperties;
        const Client = require("azure-kusto-data").Client;

        const client = new Client("https://cognitoprod.westus2.kusto.windows.net", "d5b95c14-4d44-42d7-a8e7-78be85ddeb1f", "PPvZz8591RuVHre5X9q~g43H~c-~~CTRbF", "72f988bf-86f1-41af-91ab-2d7cd011db47");
        const query = `
Common_Cloudfit_Reco_Daily_Comparison | take 1
`;
        const clientRequestProps = new ClientRequestProperties();
        clientRequestProps.setOption("servertimeout", 1000 * 60);
        clientRequestProps.setParameter("amount", 100);
        const results = await client.executeQuery("Common", query, clientRequestProps);
    }

  return (
    <>
        <div>
            <DefaultButton
                secondaryText="Opens the Sample Dialog2"
                  onClick={startfunction}
                text="Budget Groups2.5"
            />
        </div>
      <div>
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
      <div>
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
          <ChoiceGroup defaultSelectedKey="B" options={options} />
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                toggleHideThirdDialog();
              }}
              text="Save"
            />
            <DefaultButton onClick={toggleHideThirdDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default App;
