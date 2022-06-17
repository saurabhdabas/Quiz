import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 900px;
  height:50px;
  color:#FFF;
  background-color: #6949FD;
  // background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
  border-radius: 10px;
  border: 2px solid #FFFFFF;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  font-size:20px;
`

export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;

  margin-top:50px;
  display: grid;
  width: 900px;
  justify-items: center;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);


  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 450px;
    height:60px;
    margin: 5px 0;
    background-color: #6949FD;
    // background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size:20px;
    font-family: 'DM Sans', sans-serif;
    color: #FFF;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`