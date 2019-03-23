import React from "react";

class CreateNewTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      truckPlate: ""
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
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
    if (!this.state.truckPlate) {
      this.setState(
        {
          errorMessage: "not validate truck plate"
        },
        () => this.hiddenError()
      );
    }
  }

  handleSubmit() {
    if (!this.checkValidate()) return;
    this.props.close();
  }

  render() {
    return (
      <div id="createNewTruck">
        <div className="errorMessage">{this.state.errorMessage}</div>
        <div onClick={() => this.props.close()}>Close</div>
        <div>
          <div className="row">
            <div>Truck plate</div>
            <div>
              <input
                placeholder="Truck plate"
                value={this.state.truck_plate}
                onChange={e => {
                  this.setState({
                    truckPlate: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Cargo type</div>
            <div>
              <input
                placeholder="Cargo type"
                value={this.state.cargo_type}
                onChange={e => {
                  this.setState({
                    truckPlate: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Driver</div>
            <div>
              <input
                placeholder="Driver"
                value={this.state.driver}
                onChange={e => {
                  this.setState({
                    driver: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Truck type</div>
            <div>
              <input
                placeholder="Truck type"
                value={this.state.truck_type}
                onChange={e => {
                  this.setState({
                    truckType: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Price</div>
            <div>
              <input
                placeholder="Price"
                value={this.state.price}
                onChange={e => {
                  this.setState({
                    price: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Dimenson (L-W-H)</div>
            <div>
              <input
                placeholder="Dimenson (L-W-H)"
                value={this.state.dimenson}
                onChange={e => {
                  this.setState({
                    dimenson: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Parking address</div>
            <div>
              <input
                placeholder="Parking address"
                value={this.state.parking_address}
                onChange={e => {
                  this.setState({
                    parkingAddress: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Production year</div>
            <div>
              <input
                placeholder="Production year"
                value={this.state.production_year}
                onChange={e => {
                  this.setState({
                    productionYear: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Status</div>
            <div>
              <input
                placeholder="Status"
                value={this.state.status}
                onChange={e => {
                  this.setState({
                    status: e.target.value
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div>Description</div>
            <div>
              <input
                placeholder="Description"
                value={this.state.description}
                onChange={e => {
                  this.setState({
                    description: e.target.value
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div onClick={() => this.handleSubmit()}>Submit</div>
      </div>
    );
  }
}

export default CreateNewTruck;
