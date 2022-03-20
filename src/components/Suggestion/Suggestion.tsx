import React from "react";
import Highlighter from "react-highlight-words";
import "./Suggestion.scss";
import { LocationResponse as LocationProps } from "../../api/weather/type";

type SuggestionProps = {
  locations: LocationProps[];
  keyword: string;
  handleCitySelected: (selected) => void;
};

const Suggestion: React.FC<SuggestionProps> = ({
  locations,
  keyword,
  handleCitySelected,
}) => {
  const handleClickOption = (optionSelected) => {
    handleCitySelected(optionSelected);
  };

  return (
    <div className="search-suggestion">
      <ul className="options" tabIndex={0}>
        {locations.map(({ title, woeid }, idx) => (
          <li
            key={idx}
            className="option-tree"
            onClick={() => handleClickOption({ title, woeid })}
          >
            <div className="name">
              <Highlighter searchWords={[keyword]} textToHighlight={title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
