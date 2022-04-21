import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function InstrumentCards({
  instrument: {
    instrument_imageUrl,
    instrument_name,
    instrument_description,
    id,
  },
}) {
  //let history = useNavigate();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/instruments/${id}`);
  // };

  return (
    <Cards>
      <h1>{instrument_name}</h1>
      <img src={instrument_imageUrl} alt={instrument_name} />
      <p>{instrument_description}</p>
      <StyledLink to={`/users/${id}`}>Find a User</StyledLink>
    </Cards>
  );
}

export default InstrumentCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    background-color: grey;
    


    img{
      float: left;
      width:  280px;
      height: 280px;
      object-fit: cover;
      padding-bottom: 1em;
      

    }
    

`;
const StyledLink = styled(Link)`
max-width: 100%;
padding: 11px 13px;
color: rgb(253, 249, 243);
font-weight: 600;
text-transform: uppercase;
background: #f03d4e;
border: none;
border-radius: 3px;
outline: 0;
cursor: pointer;
margin-top: 0.6rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-out;
:hover {
  background: rgb(200, 50, 70);
`;
