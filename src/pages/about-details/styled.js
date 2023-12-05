import styled from 'styled-components'

export const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: inline-block;

  ul{
    text-align: justify;
    font-size: 22px;
    margin: 0 3rem 2rem 3rem;
  }

  img{
    float: right;
    shape-outside: url('urlCms + about[0].foto');
    margin: 0 3rem 2rem 3rem;
    height: 600px;
    width: 600px;
  }
  
  
`
