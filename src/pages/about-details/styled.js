import styled from 'styled-components'

export const StyledAbout = styled.div`
  display: inline-block;
  padding-top: 3rem;
  line-height: 1.5rem;
  font-size: 1rem;

  * {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 5px 0;
    color: #54636e;
  }

  h1 {
    font-size: 30.4px;
    margin-bottom: 1%;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1%;
  }

  .description {
    text-align: justify;
    margin: 0 3rem 4rem 3rem;
  }

  .photo img {
    float: right;
    shape-outside: url('urlCms + about[0].foto');
    margin: 0 3rem 2rem 3rem;
    height: auto;
    max-height: 400px;
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    object-position: center;
  }

  @media ((min-width: 768px) and (max-width: 1440px)) {
    .container {
      height: initial;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: red;

      .photo{
        margin: initial;
      }

      h1 {
        font-size: 2rem;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media ((min-width: 320px ) and (max-width: 767px)) {
    .container {
      height: initial;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: red;
    }

    h1 {
      font-size: 2rem;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3rem;
    }

    .photo{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 0;
    }
  }
`
