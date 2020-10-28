import {
  Box,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import BookedSeat from "../../Components/BookedSeat/bookedSeat";
import SeatList from "../../Components/SeatList/seatList";
import style from "./styles";

class Home extends Component {
  render() {
    return (
      <Box py={3} className={this.props.classes.wrapper}>
        <Typography align="center" variant="h2" component="h3">
          Đặt vé xe bus
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SeatList />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BookedSeat />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(style)(Home);
