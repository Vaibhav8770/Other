var AllDetails;
var VehicleDetails;
var RunningVehicles = [];
var IdleVehicles = [];
var ParkedVehicles = [];
var DisconnectedVehicles = [];

let upper = document.getElementById("upperDiv");
let Root = document.getElementById("root");
let Map = document.getElementById("map");
var map;
var markers = [];


const GetLocation = () => {
  for (let i = 0; i < VehicleDetails.length; i++) {
    if (VehicleDetails[i].currentStatus === "PARKED") {
      return ParkedVehicles[i].latitude, ParkedVehicles[i].longitude;
    } else if (VehicleDetails[i].currentStatus === "IDLE") {
      return IdleVehicles[i].latitude, IdleVehicles[i].longitude;
    } else if (VehicleDetails[i].currentStatus === "RUNNING") {
      return RunningVehicles[i].latitude, RunningVehicles[i].longitude;
    } else {
      return VehicleDetails[i].latitude, VehicleDetails[i].longitude;
    }
  }
};


const TotalVehicleData = () => {
  console.log(VehicleDetails);
  GetVehicles(VehicleDetails);
};

const ParkedVehicleData = () => {
  for (let i = 0; i < VehicleDetails.length; i++) {
    if (VehicleDetails[i].currentStatus === "PARKED") {
      ParkedVehicles.push(VehicleDetails[i]);
    }
  }
  console.log(ParkedVehicles);
  GetVehicles(ParkedVehicles);
};
const IdleVehicleData = () => {
  for (let i = 0; i < VehicleDetails.length; i++) {
    if (VehicleDetails[i].currentStatus === "IDLE") {
      IdleVehicles.push(VehicleDetails[i]);
    }
  }
  console.log(IdleVehicles);
  GetVehicles(IdleVehicles);
};
const RunningVehicleData = () => {
  for (let i = 0; i < VehicleDetails.length; i++) {
    if (VehicleDetails[i].currentStatus === "RUNNING") {
      RunningVehicles.push(VehicleDetails[i]);
    }
  }
  console.log(RunningVehicles);
  GetVehicles(RunningVehicles);
};
const DisconnectedVehicleData = () => {
  for (let i = 0; i < VehicleDetails.length; i++) {
    if (VehicleDetails[i].currentStatus === "RUNNING") {
      DisconnectedVehicle.push(VehicleDetails[i]);
    }
  }
  console.log(DisconnectedVehicle);
  GetVehicles(DisconnectedVehicle);
};

const addMarkerInfo = (ARRAY) => {
  for (let i = 0; i < ARRAY.length; i++) {
    const CONTENT = `
        ${ForUndefinedData(ARRAY[i].vehicleName)} &nbsp|&nbsp
        ${ForUndefinedData(ARRAY[i].vehicleNumber)}
        <br>
        ${
          ARRAY[i].currentStatus == "PARKED"
            ? `
            Status &nbsp:&nbsp <span class="parked">Parked</span>`
            : `${
                ARRAY[i].currentStatus == "IDLE"
                  ? `
                  Status &nbsp:&nbsp 
                  <span class="idle">Idle</span>
                    &nbsp|&nbsp
                    Distance &nbsp:&nbsp
                    <span class="idle">${ForUndefinedData(
                      ARRAY[i].distance
                    )}&nbsp Km</span>
                    &nbsp&nbsp
                    Speed &nbsp:&nbsp <span class="idle">${ForUndefinedData(
                      ARRAY[i].speed
                    )} Km/Hr</span>`
                  : `
                 Status &nbsp:&nbsp 
                 <span class="running">Running</span>
                    &nbsp|&nbsp
                    Distance &nbsp:&nbsp
                    <span class="running">${ForUndefinedData(
                      ARRAY[i].distance
                    )}&nbsp Km</span>
                    &nbsp&nbsp
                    &nbsp Speed &nbsp:&nbsp
                    <span class="running">${ForUndefinedData(
                      ARRAY[i].speed
                    )}Km/Hr</span>`
              }`
        }
        <br>
        Address &nbsp:&nbsp ${ForUndefinedData(ARRAY[i].address)}
    `;
    const infowindow = new google.maps.InfoWindow({
      content: CONTENT,
    });

    const selectIcon = () => {
      if (ARRAY[i].currentStatus === "PARKED") {
        return "./blue.png";
      }
      if (ARRAY[i].currentStatus === "IDLE") {
        return "./yellow.png";
      }
      if (ARRAY[i].currentStatus === "RUNNING") {
        return "./green.png";
      }
    };

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(ARRAY[i].latitude, ARRAY[i].longitude),
      icon: selectIcon(),
      map: map,
    });
    markers.push(marker);

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: "./m",
  });
};

// Initialize GoogleMap
const initMap = () => {
  const MH = { lat: 19.175547, lng: 72.972099 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: MH,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
};

// Load Vehicle Data
const loadVehicles = () => {
  // const url = "https://api.fleetx.io/api/v1/analytics/live";
  // const Token = "3659ddf6-a389-4a1e-a6a9-ed925192f97a";
  axios
  // .get("/dashboards/gpstrackingdata")
  .get("https://api.fleetx.io/api/v1/analytics/live?access_token=3659ddf6-a389-4a1e-a6a9-ed925192f97a")
  .then((res) => {
    AllDetails = res.data;
    VehicleDetails = res.data.vehicles;
    SetDetails();
    GetVehicles(res.data.vehicles);
    })
    .catch((error) => {
      console.log(error);
    });
};

// for Undefined Data
const ForUndefinedData = (data) => {
  if (data === undefined) {
    return `No Data Assigned.`;
  } else {
    return `${data}`;
  }
};

// Rendered VehicleData on WebPage

const SetDetails = () => {
  let template = "";
  template += `
    <div class="total" id="total" onclick="TotalVehicleData()"><div class="vehicleCount">${AllDetails.totalVehicles}</div> <br> <div class="type" id="TotalVehicles">Total Vehicles </div> </div>
    <div class="running" id="running" onclick="RunningVehicleData()"><div class="vehicleCount">${AllDetails.runningVehicles}</div> <br> <div class="type" id="RunningVehicles">Running Vehicles </div> </div>
    <div class="idle" id="idle" onclick="IdleVehicleData()"><div class="vehicleCount">${AllDetails.idleVehicles}</div> <br> <div class="type" id="IdleVehicles">Idle Vehicles </div> </div>
    <div class="parked" id="parked" onclick="ParkedVehicleData()"><div class="vehicleCount">${AllDetails.parkedVehicles}</div> <br> <div class="type" id="ParkedVehicles">Parked Vehicles </div> </div>
    <div class="Discharged" id="discharged"><div class="vehicleCount">${AllDetails.nopowerVehicles}</div> <br> <div class="type" id="DischargedVehicles">Discharged Vehicles </div> </div>
    <div class="Disconnected" id="disconnected" onclick="DisconnectedVehicleData"><div class="vehicleCount">${AllDetails.unreachableVehicles}</div> <br> <div class="type" id="DisconnectedVehicles">Disconnected Vehicles </div> </div>
  `;
  upper.innerHTML = template;
};

const GetVehicles = (VehicleArray) => {
  let template = "";
  VehicleArray.forEach((currElem) => {
    const {
      speed,
      currentStatus,
      latitude,
      longitude,
      vehicleName,
      vehicleNumber,
      driverName,
      address,
      distance,
    } = currElem;

    template += `
    <div class="subRootDiv">
        <div class ="vehicleDiv">
            ${ForUndefinedData(vehicleName)} &nbsp|&nbsp
            ${ForUndefinedData(vehicleNumber)}
        </div>
        <div class ="driverDiv">
            Driver &nbsp:&nbsp
            ${driverName == "" ? "Not Assigned" : ForUndefinedData(driverName)}
        </div>
        <div>
            
            ${
              currentStatus == "PARKED"
                ? `
                <div class ="status">
                <i class="far fa-clock"></i> &nbsp|&nbsp
                Status &nbsp:&nbsp <span class="parked">Parked</span>
                </div>`
                : `${
                    currentStatus == "IDLE"
                      ? `
                      <div class ="status">
                        <i class="far fa-clock"></i> &nbsp|&nbsp
                        Status &nbsp:&nbsp 
                        <span class="idle">Idle</span>
                        &nbsp|&nbsp
                        <span class="idle">
                        Distance &nbsp:&nbsp
                        ${ForUndefinedData(distance)}&nbsp Km </span>
                        &nbsp&nbsp
                        <i class="fas fa-circle"></i>
                        &nbsp Speed &nbsp:&nbsp <span class="idle">${ForUndefinedData(
                          speed
                        )}&nbsp Km/Hr</span>
                      </div>`
                      : `
                      <div class ="status">
                        <i class="far fa-clock"></i> 
                        &nbsp|&nbsp
                        Status &nbsp:&nbsp <span class="running">Running</span>
                        &nbsp|&nbsp
                        <span class="running">
                        Distance &nbsp:&nbsp
                        ${ForUndefinedData(distance)}&nbsp Km </span>
                        &nbsp&nbsp
                        <i class="fas fa-circle"></i>
                        &nbsp Speed &nbsp:&nbsp <span class="running">${ForUndefinedData(
                          speed
                        )}&nbsp Km/Hr</span> 
                      </div>`
                  }`
            }
        </div>
        <div class ="location">
            ${ForUndefinedData(address)}
        </div>
    </div>`;

    Root.innerHTML = template;
  });
  initMap();
  addMarkerInfo(VehicleArray);
};

window.addEventListener("DOMContentLoaded", () => loadVehicles());
