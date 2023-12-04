import styled from 'styled-components'

const PartnerComponents = styled.section`
  h2 {
    color: black;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    padding-top: 20px;
    margin-bottom: 10px;
  }

  .description-partners {
    color: black;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .swiper-slide {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .profile {
    padding: 10px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile > div {
    display: flex;
    justify-content: center;
  }

  .img-profile {
    object-fit: cover;
    object-position: center;
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  h3 {
    color: black;
    text-align: center;
    margin-bottom: 3px;
  }

  .profile p {
    margin: 1px;
    padding: 2%;
    color: black;
    text-align: center;
    box-sizing: border-box;
  }

  .profile > .description-profile {
    max-width: 100%;
    word-wrap: break-word;
  }

  .icons-social-media {
    display: flex;
    justify-content: center;
    border-radius: none;
    margin-top: 5%;

    a {
      color: black;
      display: flex;
      justify-content: center;
      height: 20px;
      width: 20px;
      margin-left: 10px;
    }
  }

  .styled-button {
    display: flex;
    justify-content: center;
    padding: 25px 0 ;

      .button-partners{
        background: #516B84;
        border-radius: 3px;
        border: none;
        font-size: 14px;
        width: 200px;
        height: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        
        

        a{
          text-decoration: none;
          color: white;
          display: flex;
        justify-content: center;
      }
    }
  }
  @media (max-width: 1440px){
    .description-partners {
      padding-left: 10px;
    }
  }

  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: block !important;
      color: white;
    }
  }
`
export default PartnerComponents
