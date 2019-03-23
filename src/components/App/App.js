import React from "react";
import data from "./data";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Paginate from "../Paginate";
import SearchBox from "../SearchBox";
import CreateNewTruck from "../CreateNewTruck";
import showModal from "../Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columnDefs = [
      {
        headerName: "Truck plate",
        field: "truck_plate",
        width: 120,
        cellRenderer: function(params) {
          return params.data.truck_plate || "";
        }
      },
      {
        headerName: "Cargo type",
        field: "cargo_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.cargo_type || "";
        }
      },
      {
        headerName: "Driver",
        field: "driver",
        width: 120,
        cellRenderer: function(params) {
          return params.data.driver || "";
        }
      },
      {
        headerName: "Truck type",
        field: "truck_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.truck_type || "";
        }
      },
      {
        headerName: "Price",
        field: "price",
        width: 120,
        cellRenderer: function(params) {
          return params.data.price || "";
        }
      },
      {
        headerName: "Dimenson (L-W-H)",
        field: "dimenson",
        width: 120,
        cellRenderer: function(params) {
          return params.data.dimenson || "";
        }
      },
      {
        headerName: "Parking address",
        field: "parking_address",
        width: 120,
        cellRenderer: function(params) {
          return params.data.parking_address || "";
        }
      },
      {
        headerName: "Production year",
        field: "production_year",
        width: 120,
        cellRenderer: function(params) {
          return params.data.production_year || "";
        }
      },
      {
        headerName: "Status",
        field: "status",
        width: 120,
        cellRenderer: function(params) {
          return params.data.status || "";
        }
      },
      {
        headerName: "Description",
        field: "description",
        width: 120,
        cellRenderer: function(params) {
          return params.data.description || "";
        }
      }
    ];
    this.defaultColDef = {};
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  handleOnClick() {
    showModal({
      component: CreateNewTruck
    });
  }

  dataReceiveFromSearchBox(data) {
    this.gridApi.setQuickFilter(data);
  }

  render() {
    return (
      <div>
        <SearchBox
          dataReceiveFromSearchBox={this.dataReceiveFromSearchBox.bind(this)}
        />
        <div onClick={this.handleOnClick.bind(this)}>Add truck</div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          <AgGridReact
            onGridReady={this.onGridReady.bind(this)}
            columnDefs={this.columnDefs}
            rowData={data.data}
            //   defaultColDef={this.defaultColDef}
          />
        </div>
        <Paginate />
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
