var Vehicle_Number = localStorage.getItem("vehicleNumber");
let TransactionTable = document.getElementById("TransactionTable");

// Get Today's date
let td = new Date();
let todayDate = `${td.getFullYear()}-${String(td.getMonth() + 1).padStart(
  2,
  "0"
)}-${String(td.getDate()).padStart(2, "0")}`;

// Get Date 7 days ago from today
let df = new Date(td.getTime() - 7 * 24 * 60 * 60 * 1000);
let dateFrom = `${df.getFullYear()}-${String(df.getMonth() + 1).padStart(
  2,
  "0"
)}-${String(df.getDate()).padStart(2, "0")}`;
// console.log(dateFrom);



const getDates = () => {
  //   console.log(Vehicle_Number);
  let D1 = document.getElementById("sdate").value;
  let D2 = document.getElementById("todate").value;

  //   Get start date from Input
  let Date1 = new Date(D1);
  let SDate = `${Date1.getFullYear()}-${String(Date1.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(Date1.getDate()).padStart(2, "0")}`;
  //   console.log(SDate);

  //   Get end date from Input
  let Date2 = new Date(D2);
  let EDate = `${Date2.getFullYear()}-${String(Date2.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(Date2.getDate()).padStart(2, "0")}`;
  //   console.log(EDate);

  GetTransactions(SDate, EDate);
};


// API Call...
const GetTransactions = (StartDate, EndDate) => {
  axios
    .post(
      "https://fastagapi.icicibank.com/ISRCUSTAPI/Customer/GetTransactionDetails",
      {
        CustomerId: 16343139,
        VehicleNumbers: `${Vehicle_Number}`,
        StartTransactionDate: `${StartDate}T01:02:03`,
        EndTransactionDate: `${EndDate}T01:02:03`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          APIClient_ID: 16343139,
          API_KEY:
            "AE889F809C88E78292D87C188230ECF8BAABC737C2BB26C576CC1B097C874F1F99B3FA",
        },
      }
    )
    .then((response) => {
      if (response.status == 204) {
        // console.log("No Transactions to display");
        NodataToDisplay();
      } else {
        console.log(response.data);
        showTransaction(response.data.TransactionDetails);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};



const NodataToDisplay = () => {
  let template = `
    <h1 class="NoDataHeading">There are no transactions in last 7 Days for <i>${Vehicle_Number}</i></h1>
    `;
  TransactionTable.innerHTML = template;
};


// Render Data if transactions are available
const showTransaction = (ARRAY) => {
  let Template = `
<table id="transactiontable">
<tr class="tableRow">
    <td class="tHead"> Sr.No.</td>
    <td class="tHead"> Vehicle Number</td>
    <td class="tHead"> Plaza Code</td>
    <td class="tHead"> Plaza Name</td>
    <td class="tHead"> Transaction Amount</td>
    <td class="tHead"> Transaction Date & Time</td>
    <td class="tHead"> Processed Date & Time</td>
    <td class="tHead"> Transaction Status</td>
</tr>
`;
  ARRAY.map((currElem, index) => {
    const {
      PlazaCode,
      PlazaName,
      ProcessingDateTime,
      TransactionAmount,
      TransactionDateTime,
      TransactionStatus,
      VehicleNumber,
    } = currElem;

    Template += `
    <tr class="tableRow">
        <td class="tBody"> ${index + 1}</td>
        <td class="tBody"> ${VehicleNumber}</td>
        <td class="tBody"> ${PlazaCode}</td>
        <td class="tBody"> ${PlazaName}</td>
        <td class="tBody"> ${TransactionAmount}</td>
        <td class="tBody"> ${TransactionDateTime}</td>
        <td class="tBody"> ${ProcessingDateTime}</td>
        <td class="tBody"> ${TransactionStatus}</td>
    </tr>
    `;
    console.log(VehicleNumber);
    console.log(Vehicle_Number);

    if (VehicleNumber === Vehicle_Number) {
      TransactionTable.innerHTML = Template;
    }
    //   NodataToDisplay();
    // }
  });
};

window.addEventListener("DOMContentLoaded", () =>
  GetTransactions(dateFrom, todayDate)
);
