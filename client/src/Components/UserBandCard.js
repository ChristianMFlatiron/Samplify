import styled from "styled-components";

function UserBandCard({ band, band: { id, band_name } }) {
  return (
    <Cards>
      <h4>Band Name: {band_name}</h4>
    </Cards>
  );
}

export default UserBandCard;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    background-color: grey;
`;
