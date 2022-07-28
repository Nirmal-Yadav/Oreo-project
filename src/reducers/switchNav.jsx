const initialState = {
  headerWidth: "80vw",
  sideNavWidth: "20vw",
  displaySideNav: "",
};

const switchNav = (state = initialState, action) => {
  switch (action.type) {
    case "open":
      return {
        headerWidth: "80vw",
        sideNavWidth: "20vw",
        dispalySideNav: " ",
      };
    case "close":
      return {
        headerWidth: "100vw",
        sideNavWidth: "0vw",
        displaySideNav: "none",
      };
    default:
      return state;
  }
};
export default switchNav;
