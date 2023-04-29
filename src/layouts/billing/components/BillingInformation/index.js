/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Stephen Hawking
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name=" agent"
            company="Good afternoon,Green Bank, Tom Baker speaking. How can I help you?"
          />
          <Bill
            name=" client"
            company="Good afternoon, my name is matilda. I just got charged. I don't know for what?"
          />
          <Bill
            name=" agent"
            company="First we need to verify your identity. Please spcify to which number the card is linked?"
          />
          <Bill
            name=" client"
            company="This is already the third time I'm calling you today. I have already talked with you. You promised to find out."
          />
          <Bill
            name=" agent"
            company="I am afraid it was another employee. I still nedd to verify your identity to be able to assist you.Please specify to which number the card is linked."
          />
          <Bill name=" client" company="Oh, you've got to be kidding me. Yes, to this number." />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
