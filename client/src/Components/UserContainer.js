import UserCards from "./UserCards";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function UserContainer({ userList, instrumentList }) {
  let { instrument_filter } = useParams();
  let cards;

  if (instrument_filter) {
    cards = userList.filter((user) => user.instrument_id == instrument_filter);
  } else {
    cards = userList;
  }

  const userCards = cards.map((user) => (
    <UserCards key={user.id} user={user} instrumentList={instrumentList} />
  ));
  console.log(instrument_filter + "this is the filter");

  return <CardContainer>{userCards}</CardContainer>;
}

export default UserContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
