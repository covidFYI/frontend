import React, { Component } from "react";
import PropTypes from "prop-types";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
    focus: false,
  };

  onFocus = (e) => {
      this.props.focusHandler ? this.props.focusHandler(true) : null
  }

  onBlur = (e) => {
      this.props.focusHandler ? this.props.focusHandler(false) : null
  }

  onChange = (e) => {

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });

    this.props.getSelectedState(e.currentTarget.innerText)
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13 || e.keyCode === 9) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
      this.props.getSelectedState(filteredOptions[activeOption])
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>Enter a Valid State</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search-bar">
          <img className="searchLens" src="/assets/searchLens.svg" alt="" />
          <input
            type="text"
            spellCheck="false"
            placeholder="Example: Delhi"
            className="search-input"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            onFocus={onFocus}
            // onBlur={onBlur}
          />
          <img className="submit-arrow" src="/assets/arrow.svg" />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
