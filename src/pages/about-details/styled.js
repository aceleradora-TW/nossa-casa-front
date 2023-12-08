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

  h1, h2, h3, h4, h5, h6{
    padding: 5px 0 ;
    color: #54636e;
  }

  h1{
    font-size:30.4px;
    margin-bottom: 1%;
  }

  h3{
    font-size: 20px;
    margin-bottom: 1%;
  }

  .description{
    text-align: justify;
    margin: 0 3rem 4rem 3rem;
  }

  img{
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

  
  
  
`
