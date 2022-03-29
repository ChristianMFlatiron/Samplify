import DisciplineCards from "./DisciplineCards";
import styled from "styled-components";


function DisciplineContainer({ disciplineList }) {
  const disciplineCards = disciplineList.map((discipline) => <DisciplineCards key={discipline.id} discipline={discipline} />);

  return <CardContainer>{disciplineCards}</CardContainer>;
}

export default DisciplineContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;