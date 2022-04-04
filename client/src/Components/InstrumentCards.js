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
      <Link to={`/instrumentusers/${id}`}>Find a User</Link>
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
