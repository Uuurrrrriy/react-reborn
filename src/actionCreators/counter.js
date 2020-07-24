import {Decrement, Increment} from "../actionTypes/counter";

export const incrementActionCreator = () => ({type: Increment });
export const decrementActionCreator = () => ({type: Decrement });
