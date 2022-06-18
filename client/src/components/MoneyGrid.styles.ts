import styled from 'styled-components';

export const Grid = styled.div`

  > li {
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 300px;
    height:20px;
    color:#FFF;
    background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
    border-radius: 10px;
    border: 2px solid #FFFFFF;
    padding: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    font-family: 'DM Sans', sans-serif;
    text-align: center;
    font-size:20px;
    margin-bottom:5px;
    list-style-type: none;
  }
  .active {
    background-image: url("https://img.freepik.com/free-vector/green-crumpled-paper-texture-sheet-background_1017-37527.jpg?w=2000&t=st=1655536173~exp=1655536773~hmac=4556f1db4dfb69a8e8ae4d3a51744365fa8e83d38d89ea2b26900d187e44d344");
    // background-color:#35E9BC;
  }
`