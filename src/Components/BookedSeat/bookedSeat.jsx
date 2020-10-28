import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

class BookedSeat extends Component {
  renderBookingSeat = () => {
    return this.props.bookingSeatList.map((bookingSeat, index) => {
      return (
        <Typography align="center" key={index}>
          Ghế số {bookingSeat.SoGhe} ________ Giá: {bookingSeat.Gia}
        </Typography>
      );
    });
  };

  render() {
    return (
      <Box mt={4} py={4}>
        <Typography align="center" variant="h4" component="h3">
          Danh sách ghế đang đặt ({this.props.bookingSeatList.length})
        </Typography>
        <Box mt={3}>{this.renderBookingSeat()}</Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingSeatList: state.seats.bookingSeat,
  };
};

export default connect(mapStateToProps)(BookedSeat);
