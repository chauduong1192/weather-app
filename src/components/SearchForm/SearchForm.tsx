import React, { useRef, useEffect } from "react";
import NotFound from "../NotFound";
import Suggestion from "../Suggestion";
import "./SearchForm.scss";
import { LocationResponse as LocationProps } from "../../api/weather/type";
import { ReactComponent as RemoveIcon } from "../../assets/images/close.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

type SearchFormProps = {
  isError: boolean;
  errorMessage?: string;
  isFetchingCity: boolean;
  isFetched: boolean;
  isFetchingWoe: boolean;
  locationSuggestions: LocationProps[];
  fetchLocationByCity?: any;
  fetchLocationByWoeId?: any;
  setEmptyLocation?: any;
  resetInitState?: any;
};

const SearchForm: React.FC<SearchFormProps> = ({
  isError,
  isFetchingCity,
  isFetched,
  isFetchingWoe,
  errorMessage,
  locationSuggestions,
  fetchLocationByCity,
  fetchLocationByWoeId,
  setEmptyLocation,
  resetInitState,
}) => {
  const inputEl: any = useRef(null);
  let typingTimer;
  const doneTypingInterval = 500;

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    };
  }, [typingTimer]);

  const onSearchLocation = async () => {
    const currentValue = inputEl?.current?.value;
    if (currentValue.trim() === "") return;
    await fetchLocationByCity(currentValue);
  };

  const handleCitySelected = async ({ title, woeid }) => {
    inputEl.current.value = title;
    setEmptyLocation();
    fetchLocationByWoeId(woeid);
  };

  const doneTyping = () => {
    onSearchLocation();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearchLocation();
      return;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") return;

    if (!inputEl?.current?.value) {
      clearTimeout(typingTimer);
      resetInitState();
      return;
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  };

  const handleKeyDown = () => {
    clearTimeout(typingTimer);
  };

  const handleButtonClick = () => {
    if (inputEl?.current?.value === "") {
      return;
    }
    if (!isFetched) {
      onSearchLocation();
      return;
    }
    inputEl.current.value = "";
    resetInitState();
  };

  return (
    <div className="search-form">
      <div className="input-group">
        <input
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyPress}
          ref={inputEl}
          type="text"
          className="form-control"
          placeholder="Search weather for a city"
          aria-label="Search input"
          autoFocus
          disabled={isFetchingCity || isFetchingWoe}
        />
        <button
          type="button"
          className="btn btn-link"
          aria-label="Search button"
          onClick={handleButtonClick}
        >
          {!isFetchingCity && (isFetched ? <RemoveIcon /> : <SearchIcon />)}
          {(isFetchingCity || isFetchingWoe) && (
            <div className="icon-container">
              <i className="loader"></i>
            </div>
          )}
        </button>
        {locationSuggestions.length > 0 && (
          <Suggestion
            keyword={inputEl.current.value}
            locations={locationSuggestions}
            handleCitySelected={handleCitySelected}
          />
        )}
      </div>
      {isError && errorMessage && <NotFound message={errorMessage} />}
    </div>
  );
};

export default SearchForm;
