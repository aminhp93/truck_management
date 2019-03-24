import React from "react";
import { Button, Input } from "@material-ui/core";

class CreateNewTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      dataObj: {}
    };
  }

  hiddenError() {
    setTimeout(() => {
      this.setState({
        errorMessage: ""
      });
    }, 4000);
  }

  checkValidate() {
    if (!this.state.dataObj.truck_plate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.cargo_type) {
      this.setState(
        {
          errorMessage: "not validate cargo type"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.driver) {
      this.setState(
        {
          errorMessage: "not validate driver"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.truck_type) {
      this.setState(
        {
          errorMessage: "not validate truck type"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.price) {
      this.setState(
        {
          errorMessage: "not validate price"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.dimenson) {
      this.setState(
        {
          errorMessage: "not validate dimenson"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.parking_address) {
      this.setState(
        {
          errorMessage: "not validate parking address"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.status) {
      this.setState(
        {
          errorMessage: "not validate status"
        },
        () => this.hiddenError()
      );
      return;
    }
    if (!this.state.dataObj.description) {
      this.setState(
        {
          errorMessage: "not validate description"
        },
        () => this.hiddenError()
      );
      return;
    }
  }

  handleSubmit() {
    // if (!this.checkValidate()) return;
    this.props.callBack({
      truck_plate: "30A-50491234",
      cargo_type: "Computer, Electronic",
      driver: "Nguyen Van A",
      truck_type: "5 ton",
      price: "1000000000",
      dimenson: "10-2-1.5",
      parking_address: "No. 128, Hoàn Kiếm street, Hà Nội",
      production_year: "2010",
      status: "in-use",
      description: ""
    });
    this.props.close();
  }

  render() {
    return (
      <div id="createNewTruck">
        <div className="errorMessage">{this.state.errorMessage}</div>
        <div className="title">ADD A NEW TRUCK</div>
        <div>
          <div className="row">
            <div>Truck plate</div>
            <div>
              <Input
                placeholder="Truck plate"
                value={this.state.dataObj.truck_plate}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.truck_plate = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Cargo type</div>
            <div>
              <Input
                placeholder="Cargo type"
                value={this.state.dataObj.cargo_type}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.cargo_type = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Driver</div>
            <div>
              <Input
                placeholder="Driver"
                value={this.state.dataObj.driver}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.driver = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Truck type</div>
            <div>
              <Input
                placeholder="Truck type"
                value={this.state.dataObj.truck_type}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.truck_type = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Price</div>
            <div>
              <Input
                placeholder="Price"
                value={this.state.price}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.price = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Dimenson (L-W-H)</div>
            <div>
              <Input
                placeholder="Dimenson (L-W-H)"
                value={this.state.dataObj.dimenson}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.dimenson = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Parking address</div>
            <div>
              <Input
                placeholder="Parking address"
                value={this.state.parking_address}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.parking_address = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Production year</div>
            <div>
              <Input
                placeholder="Production year"
                value={this.state.dataObj.parking_address}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.parking_address = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Status</div>
            <div>
              <Input
                placeholder="Status"
                value={this.state.dataObj.status}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.status = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Description</div>
            <div>
              <Input
                placeholder="Description"
                value={this.state.dataObj.description}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.description = e.target.value;
                  this.setState({
                    dataObj
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div onClick={() => this.props.close()}>
            <Button variant="contained" color="secondary">
              Close
            </Button>
          </div>
          <div onClick={() => this.handleSubmit()}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewTruck;
