import UserCards from "./UserCards";
import styled from "styled-components";


function UserContainer({ userList }) {
  const userCards = userList.map((user) => <UserCards key={user.id} user={user} />);

  return <CardContainer>{userCards}</CardContainer>;
}

export default UserContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;