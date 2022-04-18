import UserBandCard from "./UserBandCard";
import styled from "styled-components";

function UserBandContainer({ bandList }) {
  const userBandCard = bandList.map((band) => {
    <UserBandCard key={band.id} band={band} />;
  });

  return <CardContainer>{userBandCard}</CardContainer>;
}

export default UserBandContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
