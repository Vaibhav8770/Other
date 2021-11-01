let DataDiv = document.getElementById("dataDiv");
let fastagDiv = document.getElementById("fastagDiv");

var VehicleNumber;

const loadVehicles = () => {
  axios
    .get("https://api.fleetx.io/api/v1/analytics/live?access_token=3659ddf6-a389-4a1e-a6a9-ed925192f97a")
    .then((response) => {
      console.log(response.data.vehicles);
      AllVehicles(response.data.vehicles);
    })
    .catch((err) => {
      console.log(err);
    });
};

const AllVehicles = (ARRAY) => {
  let template = `
    <table id="table">
      <tr class="tableRow">
        <td class="tableHead"> Sr.No.</td>
        <td class="tableHead"> Vehicle Number</td>
        <td class="tableHead"> Vehicle Make</td>
        <td class="tableHead"> Vehicle Model</td>
        <td class="tableHead"> Vehicle Type</td>
      </tr>
    `;
  ARRAY.map((currElem, index) => {
    const {
      vehicleNumber,
      vehicleMake,
      vehicleModel,
      vehicleTypeValue,
    } = currElem;
    template += `
        <tr class="tableRow">
          <td class="tableData"> ${index+1}</td>
          <td class="tableData"> <button  onClick="getFastag(this)" class="fastagButton">${vehicleNumber}</button></td>
          <td class="tableData"> ${vehicleMake}</td>
          <td class="tableData"> ${vehicleModel}</td>
          <td class="tableData"> ${vehicleTypeValue}</td>
      </tr>
        `;
    DataDiv.innerHTML = template;
  });
};

const getFastag = (number) => {
  VehicleNumber = number.innerHTML;
  console.log(VehicleNumber);

  axios
    .post(
      "https://fastagapi.icicibank.com/ISRCUSTAPI/Customer/GetCustomerAndVehicleBalanceDetails",
      {
        CustomerId: 16343139,
        VehicleNumbers: [VehicleNumber],
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
      console.log(response.data.VehicleDetails[0]);
      // AllVehicles(response.data.vehicles);
      FastagDetails(response.data.VehicleDetails[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

const FastagDetails = (OBJ) => {
  let template = ``;
  const {
    VehicleNumber,
    VehicleAvailableBalance,
    IsLowBalance,
    VehicleAccountNumber,
    VehicleStatus,
  } = OBJ;
  template += `
  <div>
      <p class="fastagdetails">
        Vehicle Number:&nbsp ${VehicleNumber}
      </p>
      <p class="fastagdetails">
        Vehicle Account Number:&nbsp ${VehicleAccountNumber}
      </p>
      <p class="fastagdetails">
        Vehicle Available Balance:&nbsp ${VehicleAvailableBalance}
      </p>
      <p class="fastagdetails">
        Low Balance:&nbsp ${IsLowBalance == false ? "No" : "Yes"}
      </p>
      <p class="fastagdetails">
        Vehicle Status:&nbsp ${VehicleStatus}
      </p>
      <button onClick="getTransaction()">Get Transactions</button>
  </div>
  `;
  fastagDiv.innerHTML = template;
};

const getTransaction = ()=>{
  localStorage.setItem("vehicleNumber", VehicleNumber);
  window.location.href="transaction.html"
}



window.addEventListener("DOMContentLoaded", () => loadVehicles());

