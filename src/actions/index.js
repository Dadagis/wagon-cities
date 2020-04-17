// TODO: add and export your own actions
import cities from '../cities';

function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}

export { setCities };
export { selectCity };
