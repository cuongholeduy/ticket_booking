import { Box, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { chooseSeat, unChooseSeat } from "../../Redux/Action/seat";

class SeatItems extends Component {
  state = {
    isBooking: false,
  };

  handleChooseSeat = (data) => {
    this.setState(
      {
        isBooking: !this.state.isBooking,
      },
      () => {
        if (this.state.isBooking) {
          this.props.dispatch(chooseSeat(data));
        } else {
          this.props.dispatch(unChooseSeat(data));
        }
      }
    );
  };

  render() {
    const { SoGhe, TrangThai } = this.props.seat;
    return (
      <Box>
        <Button
          onClick={() => this.handleChooseSeat(this.props.seat)}
          size="large"
          variant="contained"
          color={this.state.isBooking ? "secondary" : "primary"}
          disabled={TrangThai ? true : false}
        >
          {SoGhe}
        </Button>
      </Box>
    );
  }
}

export default connect()(SeatItems);
