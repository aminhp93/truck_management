import React from "react";
import { Button, TextField, Input } from "@material-ui/core";
import Select from "react-select";

const cargoTypeOptions = [
  { value: "Computer", label: "Computer" },
  { value: "Electronic", label: "Electronic" },
  { value: "Vegetable", label: "Vegetable" },
  { value: "Kid toys", label: "Kid toys" },
  { value: "Cargo Type 5", label: "Cargo Type 5" },
  { value: "Cargo Type 6", label: "Cargo Type 6" },
  { value: "Cargo Type 7", label: "Cargo Type 7" },
  { value: "Cargo Type 8", label: "Cargo Type 8" },
  { value: "Cargo Type 9", label: "Cargo Type 9" },
  { value: "Cargo Type 10", label: "Cargo Type 10" },
  { value: "Cargo Type 11", label: "Cargo Type 11" },
  { value: "Cargo Type 12", label: "Cargo Type 12" }
];

const statusOptions = [
  { value: "In-use", label: "In-use" },
  { value: "New", label: "New" },
  { value: "Stopped", label: "Stopped" }
];

const driverOptions = [
  { value: "Nguyen Van A", label: "Nguyen Van A" },
  { value: "Nguyen Van B", label: "Nguyen Van B" },
  { value: "Nguyen Van C", label: "Nguyen Van C" }
];

class CreateNewTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      dataObj: {},
      textCounterDescription: 0,
      textCounterParkingAddress: 0
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
    if (
      !this.state.dataObj.truck_plate ||
      !/^[0-9]{2}[A-Z]{1}-[0-9]{5}$/.test(this.state.dataObj.truck_plate)
    ) {
      this.setState(
        {
          errorMessage: "Not validate truck plate"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.cargo_type) {
      this.setState(
        {
          errorMessage: "Not validate cargo type"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.driver) {
      this.setState(
        {
          errorMessage: "Not validate driver"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.truck_type) {
      this.setState(
        {
          errorMessage: "Not validate truck type"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.price) {
      this.setState(
        {
          errorMessage: "Not validate price"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.dimenson) {
      this.setState(
        {
          errorMessage: "Not validate dimenson"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.parking_address) {
      this.setState(
        {
          errorMessage: "Not validate parking address"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.status) {
      this.setState(
        {
          errorMessage: "Not validate status"
        },
        () => this.hiddenError()
      );
      return false;
    }
    if (!this.state.dataObj.description) {
      this.setState(
        {
          errorMessage: "Not validate description"
        },
        () => this.hiddenError()
      );
      return false;
    }
    return true;
  }

  handleSubmit() {
    if (!this.checkValidate()) return;
    this.props.callBack(this.state.dataObj);
    this.setState(
      {
        successMessage: "Your truck has been added successfully"
      },
      () => {
        setTimeout(() => {
          this.props.close();
        }, 2000);
      }
    );
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    return (
      <div id="createNewTruck">
        <div
          className={`message ${this.state.successMessage ? "success" : ""} ${
            this.state.errorMessage ? "error" : ""
          }`}
        >
          {this.state.errorMessage || this.state.successMessage}
        </div>
        <div className="title">ADD A NEW TRUCK</div>
        <div>
          <div className="row">
            <div>Truck plate</div>
            <div>
              <Input
                placeholder="30A-50493"
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
              <Select
                isMulti={true}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null
                }}
                styles={{
                  control: () => ({
                    // none of react-select's styles are passed to <Control />
                    width: 310,
                    height: 30
                  })
                }}
                placeholder="Computer, Electronic"
                value={this.state.dataObj.cargo_type}
                onChange={value => {
                  const dataObj = this.state.dataObj;
                  dataObj.cargo_type = value;
                  this.setState({
                    dataObj
                  });
                }}
                options={cargoTypeOptions}
              />
            </div>
          </div>
          <div className="row">
            <div>Driver</div>
            <div>
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null
                }}
                styles={{
                  control: () => ({
                    // none of react-select's styles are passed to <Control />
                    width: 310,
                    height: 30
                  })
                }}
                placeholder="Nguyen Van A"
                value={this.state.dataObj.driver}
                onChange={value => {
                  const dataObj = this.state.dataObj;
                  dataObj.driver = value;
                  this.setState({
                    dataObj
                  });
                }}
                options={driverOptions}
              />
            </div>
          </div>
          <div className="row">
            <div>Truck type</div>
            <div>
              <Input
                placeholder="5 ton"
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
                placeholder="1000000000"
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
                placeholder="10-2-1.5"
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
          <div className="row parkingAddress">
            <div>Parking address</div>
            <div>
              <TextField
                multiline={true}
                placeholder="No. 128, Hoàn Kiếm street, Hà Nội"
                value={this.state.parking_address}
                onChange={e => {
                  if (e.target.value.length > 200) return;
                  const dataObj = this.state.dataObj;
                  dataObj.parking_address = e.target.value;
                  this.setState({
                    dataObj,
                    textCounterParkingAddress: e.target.value.length
                  });
                }}
              />
              <div className="textCounter">
                {this.state.textCounterParkingAddress}/200
              </div>
            </div>
          </div>
          <div className="row">
            <div>Production year</div>
            <div>
              <Input
                placeholder="2010"
                value={this.state.dataObj.production_year}
                onChange={e => {
                  const dataObj = this.state.dataObj;
                  dataObj.production_year = e.target.value;
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
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null
                }}
                styles={{
                  control: () => ({
                    // none of react-select's styles are passed to <Control />
                    width: 310,
                    height: 30
                  })
                }}
                placeholder="in-use"
                value={this.state.dataObj.status}
                onChange={value => {
                  const dataObj = this.state.dataObj;
                  dataObj.status = value;
                  this.setState({
                    dataObj
                  });
                }}
                options={statusOptions}
              />
            </div>
          </div>
          <div className="row description">
            <div>Description</div>
            <div>
              <TextField
                multiline={true}
                placeholder="Description"
                value={this.state.dataObj.description}
                onChange={e => {
                  if (e.target.value.length > 200) return;
                  const dataObj = this.state.dataObj;
                  dataObj.description = e.target.value;
                  this.setState({
                    dataObj,
                    textCounterDescription: e.target.value.length
                  });
                }}
              />
              <div className="textCounter">
                {this.state.textCounterDescription}/200
              </div>
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
