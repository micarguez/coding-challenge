import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDarkMode, MdDeleteForever } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HeaderView() {
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      return 'My notes dashboard';
    case '/trash':
      return 'Deleted notes';
    default:
      return 'I do not know how you got here';
  }
}

function Header({ handleToggleDarkMode }) {
  const history = useHistory();
  const { totalNotes } = useSelector((state) => state.trash);

  return (
    <div className="header">
      <h1 id="page-title">{HeaderView()}</h1>
      <MdOutlineDarkMode title="Enable or disable dark mode" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="moon" />
      <MdDeleteForever title="Go to the trash screen" onClick={() => history.push('/trash')} className="delete-icon" size="2em" color="red" />
      <p id="trash-count">{totalNotes}</p>
    </div>
  );
}

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;