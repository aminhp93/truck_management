import React from "react";
import data from "./data";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columnDefs = [
      {
        headerName: "truck_plate",
        field: "truck_plate",
        width: 120,
        cellRenderer: function(params) {
          return params.data.truck_plate || "";
        }
      },
      {
        headerName: "cargo_type",
        field: "cargo_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.cargo_type || "";
        }
      },
      {
        headerName: "driver",
        field: "driver",
        width: 120,
        cellRenderer: function(params) {
          return params.data.driver || "";
        }
      },
      {
        headerName: "truck_type",
        field: "truck_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.truck_type || "";
        }
      },
      {
        headerName: "price",
        field: "price",
        width: 120,
        cellRenderer: function(params) {
          return params.data.price || "";
        }
      },
      {
        headerName: "dimenson",
        field: "dimenson",
        width: 120,
        cellRenderer: function(params) {
          return params.data.dimenson || "";
        }
      },
      {
        headerName: "parking_address",
        field: "parking_address",
        width: 120,
        cellRenderer: function(params) {
          return params.data.parking_address || "";
        }
      },
      {
        headerName: "production_year",
        field: "production_year",
        width: 120,
        cellRenderer: function(params) {
          return params.data.production_year || "";
        }
      },
      {
        headerName: "status",
        field: "status",
        width: 120,
        cellRenderer: function(params) {
          return params.data.status || "";
        }
      },
      {
        headerName: "description",
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

  render() {
    return (
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
    );
  }

  componentDidMount() {}
}

export default App;
