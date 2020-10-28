import { createAction } from "./createAction";
import { CHOOSE_SEAT, UNCHOOSE_SEAT } from "./type";

export const chooseSeat = (data) => {
  return (dispatch) => {
    dispatch(createAction(CHOOSE_SEAT, data));
  };
};

export const unChooseSeat = (data) => {
  return (dispatch) => {
    dispatch(createAction(UNCHOOSE_SEAT, data));
  };
};
