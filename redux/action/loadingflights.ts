import {IActionObject} from './interfaceType'

export enum actionsForFlight {
  LOAD_FLIGHTS = "LOAD_FLIGHTS",
  GET_FLIGHTS = "GET_FLIGHTS"
}

export const getFlights = (data:Array<Object>):IActionObject => ({
  type: actionsForFlight.GET_FLIGHTS,
  payload: data
});

export const loadFlights = (selectedDate:Date|string) => {
  return {
    type: actionsForFlight.LOAD_FLIGHTS,
    selectedDate
  };
};
