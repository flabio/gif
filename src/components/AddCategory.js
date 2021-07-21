import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [inputvalue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue?.trim().length > 2) {
      setCategories((cats) => [ inputvalue,...cats]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputvalue}</h2>
      <input type="text" value={inputvalue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
