import React, { useState } from "react";
import NotFound from "../NotFound";
import "./SearchForm.scss";

type SearchFormProps = {
  fetchLocationByCity?: any;
  isError: boolean;
  errorMessage?: string;
  isFetching: boolean;
};

const SearchForm: React.FC<SearchFormProps> = ({
  fetchLocationByCity,
  isError,
  errorMessage,
  isFetching,
}) => {
  const [location, setLocation] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) return;
    await fetchLocationByCity(location);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search weather for a city"
          aria-label="Search"
          aria-describedby="button-search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          disabled={isFetching}
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="btn btn-secondary"
          disabled={isFetching}
        >
          SEARCH
        </button>
      </div>
      {isError && errorMessage && <NotFound message={errorMessage} />}
    </form>
  );
};

export default SearchForm;
