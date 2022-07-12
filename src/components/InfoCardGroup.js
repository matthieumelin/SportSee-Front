import PropTypes from "prop-types";
import React from "react";

// styled
import styled from "styled-components";

// api
import {
  getDefaultKeyData,
  useSportSeeAPI,
} from "../services/hooks/useSportSeeAPI";

// components
import InfoCard from "./InfoCard";

export default function InfoCardGroup({ userId }) {
  const { data, isLoading, error } = useSportSeeAPI("key-data", userId);

  let keyData = data;

  if (error || isLoading) {
    keyData = getDefaultKeyData();
  }


  return (
  <StyledInfoCardGroup>
    <InfoCard type="Calories" value={keyData.calorieCount} />
    <InfoCard type="Protéines" value={keyData.proteinCount} />
    <InfoCard type="Glucides" value={keyData.carbohydrateCount} />
    <InfoCard type="Lipides" value={keyData.lipidCount} />  
  </StyledInfoCardGroup>
  );
}

InfoCardGroup.propTypes = {
  userId: PropTypes.string.isRequired,
};

const StyledInfoCardGroup = styled.div`
  display: grid;
  gap: 40px;
`;
