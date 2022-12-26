import styled from "vue-styled-components";

export const UserWrapper = styled.div``;

export const Container = styled.div`
  margin: 50px 0px 50px 50px;
  .user-wrapper {
    display: flex;
    background-color: var(--blue);
    width: 350px;
    border-radius: 20px;
    justify-content: space-between;
    padding: 5px 20px 5px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .title {
      font-weight: bold;
    }
    .icon {
      cursor: pointer;
    }
    button {
      background-color: transparent;
      border: transparent;
      font-size: 1.8rem;
      color: #fff;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 500px) {
    margin: 50px 0px 50px 20px;
  }
`;
export const UserData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;

  .item {
    display: flex;
    flex-direction: column;
    color: var(--dark-blue);
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  input {
    margin-top: 12px;
    background-color: var(--grey);
    border-radius: 10px;
    padding: 20px;
    width: 80%;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    input {
      font-size: 1.1rem;
    }
  }
`;

export const Post = styled.div`
  display: flex;
  font-size: 1.7rem;
  background-color: var(--teal);
  width: 300px;
  border-radius: 20px;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  .actions {
    display: flex;
    font-size: 1rem;
    gap: 30px;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
