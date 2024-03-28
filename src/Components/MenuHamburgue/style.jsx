import styled from "styled-components";

const StyleMenuHamburgue = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    width: 30px;
    flex-direction: column;
    gap: 6px;
    margin-right: 1rem;
    transition: 0.2s;
    cursor: pointer;

    .line {
      background-color: #ec8849;
      width: 100%;
      height: 2px;
    }
  }
`;

export { StyleMenuHamburgue };
