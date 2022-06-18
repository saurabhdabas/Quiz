import styled from 'styled-components';

export const QuestionCardWrapper = styled.div`
display:flex;
height:725px;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
export const QuestionWrapper = styled.div`

  width: 900px;
  height:50px;
  color:#FFF;
  // background-color: #6949FD;
  background-image: url("https://img.freepik.com/free-photo/crumpled-blue-paper-textured-background_53876-101379.jpg?size=626&ext=jpg&ga=GA1.2.698873982.1653386653");
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
  display: grid;
  width: 950px;
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
    height:110px;
    margin:0;
    // background-color: #6949FD;
    background-image: url("https://img.freepik.com/free-photo/crumpled-blue-paper-textured-background_53876-101379.jpg?size=626&ext=jpg&ga=GA1.2.698873982.1653386653");
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size:20px;
    font-family: 'DM Sans', sans-serif;
    color: #FFF;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);

    &:hover {
      // background-color: #FAB02B; 
      background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
    }
  }
  .correct {
    // background-color:#35E9BC;
    background-image: url("https://img.freepik.com/free-vector/green-crumpled-paper-texture-sheet-background_1017-37527.jpg?w=2000&t=st=1655536173~exp=1655536773~hmac=4556f1db4dfb69a8e8ae4d3a51744365fa8e83d38d89ea2b26900d187e44d344");
  }
  .wrong {
    // background-color:#DC3545;
    background-image: url("https://img.freepik.com/free-photo/red-glued-paper-background_1409-1784.jpg?w=2000&t=st=1655536320~exp=1655536920~hmac=bdb4b84011b78eae88deab5c405e132ed726ef838540b5057dc70a87120d23a2");
  }
  
 
`