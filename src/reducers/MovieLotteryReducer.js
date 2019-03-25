export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_RANDOM_MOVIE":
      console.log("in reducer", action.payload, state);
      return action.payload;
    default:
      return state;
  }
};
