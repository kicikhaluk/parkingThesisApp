import Garages from '../../models/Garages';
export const SET_GARAGES = 'SET_GARAGES';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // any async code you want
      const response = await fetch('https://parking-f6b18.firebaseio.com/Garages.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      // console.log(resData);
      const loadedGarages = [];

      for (const key in resData) {
        const parkingAreas = resData[key];
        loadedGarages.push(new Garages(
          key,
          key,
          parkingAreas
        ));
      }

      dispatch({
        type: SET_GARAGES,
        parkingAreas: loadedGarages
      });
    } catch (err) {
      throw err;
    }
  };
};

