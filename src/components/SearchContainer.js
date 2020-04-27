import SearchBar from "./SearchBar";

const SearchContainer = (props) => (
  <>
    <h5 className="">Kindly enter your State/UT name:</h5>
    <div className="search-container">
      {/* <SearchBar getSelectedState={props.getSelectedState} focusHandler={props.focusHandler} /> */}
      <SearchBar getSelectedState={props.getSelectedState} />
      {props.currentState ? (
        <div class="location-text">
          Your Current location: {props.currentState}
        </div>
      ) : null}
    </div>
  </>
);

export default SearchContainer;
