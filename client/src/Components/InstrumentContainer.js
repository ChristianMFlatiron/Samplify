import InstrumentCards from "./InstrumentCards";
import styled from "styled-components";


function InstrumentContainer({ instrumentList }) {
  const instrumentCards = instrumentList.map((instrument) => <InstrumentCards key={instrument.id} instrument={instrument} />);

  return <CardContainer>{instrumentCards}</CardContainer>;
}

export default InstrumentContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;