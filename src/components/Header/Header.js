import styled from "vue-styled-components";

export const UpperHeader = styled.h1`
  font-size: 1.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--blue);
  width: 100vw;
  height: 10vh;
  margin-bottom: 0px;
`;
export const LowerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  font-size: 1.7rem;
  background-color: var(--dark-blue);
  padding: 10px 0px 10px 30px;
  div {
    cursor: pointer;
    font-weight: bold;
  }
  .active {
    color: #fff;
  }
`;
