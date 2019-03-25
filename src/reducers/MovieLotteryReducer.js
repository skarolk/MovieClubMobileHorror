export default (state = [], action) => {
  switch (action.type) {
    case "GET_RANDOM_MOVIE":
      return action.payload;
    default:
      return state;
  }
};
