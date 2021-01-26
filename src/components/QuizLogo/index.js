import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className, logo }) {
  return (<img src={logo} alt="horror quiz logo" className={className} />);
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  width:200px;
  background-color:${({ theme }) => theme.colors.mainBg};
  padding: 20px;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

export default QuizLogo;