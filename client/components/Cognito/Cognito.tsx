import React from "react";
import Button from "../Button/Button";
import { GetServerSideProps } from "next";
import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../../auth";

const Cognito = (props: { initialAuth: AuthTokens }) => {
  const auth = useAuth(props.initialAuth);
  const { login, logout } = useAuthFunctions();
  return (
    <React.Fragment>
      {auth ? (
        <Button
          text="Logout"
          handleClick={() => logout()}
          className="x"
          height="35px"
          width="110px"
        />
      ) : (
        <React.Fragment>
          <Button
            text="Login / Create Account"
            handleClick={() => login()}
            className="x"
            height="35px"
            width="190px"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<{
  initialAuth: AuthTokens;
}> = async (context) => {
  const initialAuth = getServerSideAuth(context.req);

  return { props: { initialAuth } };
};

export default Cognito;
