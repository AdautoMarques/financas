import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--gray4);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--gray6);

    &.green{
    background: var(--green-dark);
    color: var(--gray6);
  }
  }

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    color: var(--gray7)
  }

  

`