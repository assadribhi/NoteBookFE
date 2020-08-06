import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const CreateButtonStyled = styled.button`
  color: red;
  background-color: white;

  &:hover {
    color: white;
    background-color: red;
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DeleteButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  background-color: white;
  border: 0px;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  p {
    vertical-align: middle;

    &.noteTitle {
      color: red;
    }

    &.notebookName {
      color: red;
    }
  }
`;

export const NoteWrapper = styled.div`
  margin: 50px;
  padding: 10px;

  img {
    margin: 10px;
    width: 300px;
  }

  text-align: center;

  p {
    &.noteTitle {
      color: red;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
body {
  color:red;
  background-color:white;

}
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  color: red;

  &.active {
    padding: 0.25em 1em;

    color: red;
  }
`;

export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ThemeSwitcher = styled.button`
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const UpdateButtonStyled = styled.button`
  color: ${(props) => props.theme.updateButtonColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0px;
`;

export const NotebookWrapper = styled.div`
  margin: 20px;
  padding: 10px;

  img {
    margin: 10px;
    width: 300px;
  }

  text-align: center;

  p {
    &.noteTitle {
      color: red;
    }
  }
`;
