import styled from 'styled-components'

const Workshops = styled.div`
main {
  height: 300vh;

  p {
    padding-left: 140px;
    padding-top: 40px;
    color: #54636E;
  }

.img-oficina{

  display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 0px;
  justify-content: center;
  width: 80%;
  height: 300px;
  padding-left: 140px;
  padding-top: 60px;

}

.search-box {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-input {
    display: flex;
    justify-content: center;
    border-color: black;
    width: 780px;
    height: 40px;
    font-size: 16px;
    border-radius: 26px;
    padding-left: 20px;
   
  }
}
    
  }
  `

export default Workshops
