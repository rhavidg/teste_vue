import styled from "vue-styled-components";

export const UserWrapper = styled.div``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px 0px 50px 50px;

  .btn-add {
    background-color: var(--grey);
    width: 300px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 30px;
    gap: 10px;
    font-size: 1.2rem;
  }

  .input-add-title {
    font-size: 1.8rem;
    background-color: var(--grey);
    width: 300px;
    border-radius: 20px;
    padding: 5px 20px 5px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
  }

  .input-add-body {
    font-size: 1.8rem;
    background-color: var(--grey);
    width: 600px;
    border-radius: 20px;
    padding: 5px 20px 5px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 15px;
  }

  .btn-save {
    font-size: 1.5rem;
    background-color: var(--grey);
    border-radius: 12px;
    padding: 10px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 500px) {
    margin: 50px 0px 50px 20px;
    .input-add-body {
      width: 300px;
      height: 180px;
      font-size: 1.5rem;
    }
    .input-add-title {
      font-size: 1.5rem;
    }

    display: flex;
    flex-direction: column;
    .column-1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .column-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .user-wrapper {
      width: 300px !important;
      button {
        font-size: 1.5rem !important;
      }
    }
  }
  .column-1 {
    margin-top: 50px;
  }
  .column-2 {
    display: flex;
    margin-top: 50px;
  }
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
`;
export const PostsWrapper = styled.div`
  .title {
    margin-top: 60px;
    color: var(--blue);
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
  }
  .icon {
    cursor: pointer;
    color: black;
    margin-left: 10px;
  }
  .content-container {
  }
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Post = styled.div`
  display: flex;
  font-size: 1.7rem;
  background-color: var(--teal);
  width: 500px;
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
  @media only screen and (max-width: 500px) {
    width: 300px;
  }
`;
