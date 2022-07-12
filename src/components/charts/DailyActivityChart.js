import React from "react";

// prop types
import PropTypes from "prop-types";

// recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// styled
import styled from "styled-components";

// api
import {
  getDefaultDailyActivity,
  useSportSeeAPI,
} from "../../services/hooks/useSportSeeAPI";


export default function DailyActivityChart({ userId }) {
  const { data, isLoading, error } = useSportSeeAPI("daily-activity", userId);

  let dailyActivity = data;

  if (error || isLoading) {
    dailyActivity = getDefaultDailyActivity();
  }

  return (
    <StyledDailyActivityChart>
      <DailyActivityChartHeader>
        <DailyActivityChartHeaderTitle>
          Activité quotidienne
        </DailyActivityChartHeaderTitle>
        <DailyActivityChartHeaderLegends>
          <DailyActivityChartHeaderLegendsInfo>
            <DailyActivityChartHeaderLegendsInfoBullet
              style={{ background: "#282D30" }}
            />
            Poids (kg)
          </DailyActivityChartHeaderLegendsInfo>
          <DailyActivityChartHeaderLegendsInfo>
            <DailyActivityChartHeaderLegendsInfoBullet
              style={{ background: "#E60000" }}
            />
            Calories brûlées (kCal)
          </DailyActivityChartHeaderLegendsInfo>
        </DailyActivityChartHeaderLegends>
      </DailyActivityChartHeader>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dailyActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#dedede"
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke="#9b9eac"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke="#9b9eac"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill="#2b2d30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill="#ff0101"
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledDailyActivityChart>
  );
}

DailyActivityChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine background="#2b2d30">
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine background="#ff0101">
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
};

const StyledDailyActivityChart = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  padding: 20px;
  height: 300px;
  width: 835px;
`;
const DailyActivityChartHeader = styled.div`
  display: flex;
  align-items: center;
`;
const DailyActivityChartHeaderTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.938rem;
  color: #20253a;
`;
const DailyActivityChartHeaderLegends = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  gap: 30px;
`;
const DailyActivityChartHeaderLegendsInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: #74798c;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const DailyActivityChartHeaderLegendsInfoBullet = styled.div`
  border-radius: 100px;
  height: 8px;
  width: 8px;
`;

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TooltipLine = styled.div`
  padding: 0.75rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${(props) => props.background};
`;
