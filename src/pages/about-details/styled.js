import styled from 'styled-components'

export const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: inline-block;
  padding-top: 3rem;

  .description{
    text-align: justify;
    margin: 0 3rem 2rem 3rem;
  }

  img{
    float: right;
    shape-outside: url('urlCms + about[0].foto');
    margin: 0 3rem 2rem 3rem;
    height: 600px;
    width: 800px;
  }
  
  
`
