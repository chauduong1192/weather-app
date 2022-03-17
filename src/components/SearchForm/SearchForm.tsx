import React, { useState } from "react";
import "./SearchForm.scss";

type SearchFormProps = {
  fetchLocationByCity?: any
}

const SearchForm: React.FC<SearchFormProps> = ({ fetchLocationByCity }) => {
  const [location, setLocation] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) return;
    await fetchLocationByCity(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="btn btn-secondary"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
