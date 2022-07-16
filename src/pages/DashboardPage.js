import React from "react";

// router
import { useParams, useNavigate } from "react-router-dom";
import Routes from "../Routes";

// api
import { useSportSeeAPI } from "../services/hooks/useSportSeeAPI";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";

// components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import InfoCardGroup from "../components/InfoCardGroup";
import ScoreChart from "../components/charts/ScoreChart";
import AverageSessionsChart from "../components/charts/AverageSessionsChart";
import ActivitiesChart from "../components/charts/ActivitiesChart";

export default function DashboardPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useSportSeeAPI("firstName", userId);

  let firstName = data;

  if (firstName === "unknown user") {
    return navigate(`${Routes.Dashboard}/12`, { replace: true });
  }

  return (
    <StyledDashboardPage>
      <Helmet>
        <title>SportSee - Profil</title>
      </Helmet>

      <Header />

      <Main>
        <PageWrapper>
          <Sidebar />
          <Dashboard>
            <DashboardTitle>
              Bonjour,{" "}
              <DashboardTitleSpan>{!isLoading && firstName}</DashboardTitleSpan>
            </DashboardTitle>
            <DashboardSubTitle>
              {isLoading || firstName === "unknown user"
                ? ""
                : "Félicitation ! Vous avez explosé vos objectifs d'hier 👏"}
            </DashboardSubTitle>
            <DashboardWrapper>
              <DashboardAnalytics>
                <DailyActivityChart userId={userId} />
                <DashboardAnalyticsWrapper>
                  <AverageSessionsChart userId={userId} />
                  <ActivitiesChart userId={userId} />
                  <ScoreChart userId={userId} />
                </DashboardAnalyticsWrapper>
              </DashboardAnalytics>
              <InfoCardGroup userId={userId} />
            </DashboardWrapper>
          </Dashboard>
        </PageWrapper>
      </Main>
    </StyledDashboardPage>
  );
}

const StyledDashboardPage = styled.div`
`;
const Main = styled.main``;
const PageWrapper = styled.div`
  display: flex;
`;
const Dashboard = styled.section`
  padding: 30px 50px;
`;
const DashboardTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
`;
const DashboardTitleSpan = styled.span`
  color: #ff0101;
`;
const DashboardSubTitle = styled.p`
  margin: 20px 0 0 0;
  font-family: "Roboto", sans-serif;
`;
const DashboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 50px 0 0 0;
`;
const DashboardAnalytics = styled.div`
`;
const DashboardAnalyticsWrapper = styled.div`
margin: 30px 0 0 0;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
`;