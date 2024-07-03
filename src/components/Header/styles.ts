import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray1);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  button{
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`