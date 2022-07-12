import PropTypes from "prop-types";
import React from "react";

// styled
import styled from "styled-components";

// icons
import calorieIcon from "../assets/icons/energy.svg";
import proteinIcon from "../assets/icons/chicken.svg";
import carboHydrateIcon from "../assets/icons/apple.svg";
import lipidIcon from "../assets/icons/cheeseburger.svg";

// formatter
import { format } from "../utils/Formatter";

const ICON_BY_TYPE = {
  Calories: {
    icon: calorieIcon,
    bgColor: "rgba(255, 0, 0, 0.1)"
  },
  Glucides: {
    icon: carboHydrateIcon,
    bgColor: "rgba(253, 204, 12, 0.1)"
  },
  Protéines: {
    icon: proteinIcon,
    bgColor: "rgba(74, 184, 255, 0.1)"
  },
  Lipides: {
    icon: lipidIcon,
    bgColor: "rgba(253, 81, 129, 0.1)"
  }
}

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g"
}

export default function InfoCard({type, value}) {
  return (
    <StyledInfoCard>
      <InfoCardIcon style={{ background: ICON_BY_TYPE[type].bgColor }}>
        <InfoCardIconImage src={ICON_BY_TYPE[type].icon} alt={type} />
      </InfoCardIcon>
      <InfoCardInfos>
        <InfoCardInfosValue>{`${format(value)}${UNIT_BY_TYPE[type]}`}</InfoCardInfosValue>
        <InfoCardInfosTitle>{type}</InfoCardInfosTitle>
      </InfoCardInfos>
    </StyledInfoCard>
  );
}

InfoCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

const StyledInfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
  width: 260px;
  border-radius: 5px;
`;
const InfoCardIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const InfoCardIconImage = styled.img`
  width: 20px;
  height: 20px;
`;
const InfoCardInfos = styled.div`
  margin: 0 0 0 30px;
  width: 100px;
`;
const InfoCardInfosValue = styled.h2`
  color: #282d30;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
`;
const InfoCardInfosTitle = styled.div`
  color: #74798c;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  margin: 5px 0 0 0;
`;
