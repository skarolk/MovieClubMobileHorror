import { combineReducers } from "redux";
import MovieLotteryReducer from "./MovieLotteryReducer";

export default combineReducers({
  movieLottery: MovieLotteryReducer
});
