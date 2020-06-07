import { SET_GARAGES } from "../actions/parking";

const initialState = {
  parkingAreas: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GARAGES:
      return {
        ...state,
        parkingAreas: action.parkingAreas
      }
  }
  return state;
}