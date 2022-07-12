import PropTypes from "prop-types";
import React from "react";

// styled
import styled from "styled-components";

// recharts
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

// api
import { useSportSeeAPI } from "../../services/hooks/useSportSeeAPI";

export default function ScoreChart({ userId }) {
  const { data, isLoading, error } = useSportSeeAPI("today-score", userId);

  let todayScore = data;

  if (error || isLoading) {
    todayScore = 0;
  }

  const pieData = [
    { name: "completed", value: todayScore, fillColor: "#ff0101" },
    { name: "uncompleted", value: 1 - todayScore, fillColor: "transparent" },
  ];

  return (
    <StyledScoreChart>
      <ScoreChartTitle>Score</ScoreChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.fillColor} radius="50%" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ScoreChartKPI>
        <ScoreChartKPIValue>{`${todayScore * 100}%`}</ScoreChartKPIValue>
        <ScoreChartNewLine />
        de votre
        <ScoreChartNewLine />
        objectif
      </ScoreChartKPI>
    </StyledScoreChart>
  );
}

ScoreChart.propTypes = {
    userId: PropTypes.string.isRequired
}

const StyledScoreChart = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
background: #fbfbfb;
border-radius: 5px;
height: 263px;
`;
const ScoreChartTitle = styled.h2`
font-family: "Roboto", sans-serif;
font-weight: 500;
font-size: 1rem;
color: #20253A;
position: absolute;
top: 20px;
left: 20px;
margin: 0;
`;
const ScoreChartNewLine = styled.br``;
const ScoreChartKPI = styled.div`
position: absolute;
text-align: center;
`;
const ScoreChartKPIValue = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 1.625rem;
color: #282D30;
text-align: center;
`;