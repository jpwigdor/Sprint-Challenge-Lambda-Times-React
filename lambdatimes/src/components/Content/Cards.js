import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Cards = props => {
  return (
    <StyledCardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => {
        return <Card {...card} />;
      })}
    </StyledCardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;
