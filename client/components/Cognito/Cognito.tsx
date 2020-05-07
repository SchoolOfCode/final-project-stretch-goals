import React from "react";
import Button from "../Button/Button";
import { GetServerSideProps } from "next";
import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../../auth";

const Home = (props: { initialAuth: AuthTokens }) => {
  const auth = useAuth(props.initialAuth);
  const { login, logout } = useAuthFunctions();
  console.log(auth);
  return (
    <React.Fragment>
      {auth ? (
        <Button
          text="Sign Out"
          handleClick={() => logout()}
          className="x"
          height="35px"
          width="110px"
        />
      ) : (
        <React.Fragment>
          <Button
            text="Sign In"
            handleClick={() => login()}
            className="x"
            height="35px"
            width="110px"
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

export default Home;
