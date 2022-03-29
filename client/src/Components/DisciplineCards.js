import styled from "styled-components";
//import { useNavigate } from "react-router-dom";


function DisciplineCards({ discipline: { discipline_imageUrl, discipline_name, discipline_description, id } }) {

  // let history = useNavigate();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/disciplines/${id}`);
  // };
  
  return (
    <Cards >
      <img src={discipline_imageUrl} alt={discipline_name} />
      <h1>{discipline_name}</h1>
      <p>{discipline_description}</p>
    </Cards>
  );
}


export default DisciplineCards;


const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    


    img{
      float: left;
      width:  300px;
      height: 300px;
      object-fit: cover;
      padding-bottom: 1em;
    }
    

`;