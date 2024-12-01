import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load authenticated User
  const { data, isLoading, isAuthenticated } = useUser();

  //2. if there is No authenticated user redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (data === null) navigate("/login");
  //4. if there is A user,render
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
