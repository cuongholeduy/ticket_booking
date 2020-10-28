import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import SeatItems from "../SeatItems/seatItems";
import styles from "./styles";
import { connect } from "react-redux";

class SeatList extends Component {
  renderSeat = () => {
    return this.props.seatList.map((seat, index) => {
      return (
        <Grid item sm={3} key={index}>
          <SeatItems seat={seat} />
        </Grid>
      );
    });
  };
  render() {
    return (
      <Box mt={4} py={4}>
        <Typography align="center" variant="h4" component="h3">
          Danh sách ghế
        </Typography>
        <Box mt={3} textAlign="center">
          <Button
            className={this.props.classes.btnDriver}
            variant="contained"
            disabled
          >
            Tài xế
          </Button>
        </Box>

        <Box my={4} textAlign="center">
          <Container maxWidth="xs">
            <Grid container spacing={2}>
              {this.renderSeat()}
            </Grid>
          </Container>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seats.seatList,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SeatList));
