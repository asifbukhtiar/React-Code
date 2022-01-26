import React, { Suspense, useContext } from "react";
import { Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../network/firebase/context";
import Layout from "../components/Wrapper";
import * as LazyComponent from "../utils/LazyLoaded";
import { PATH_NAME } from "./pathNames";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const Routes = () => {
  const { user } = useContext(AuthContext);
  return (
    <Suspense fallback={<></>}>
      <Layout>
        <Switch>
          {/*  Private routes, user must be authrized to navigate to it */}
          {[
            <PrivateRoute
              Component={(props) => <LazyComponent.Landing {...props} />}
              path={PATH_NAME.LANDING}
              exact
              authed={user}
              key="landing"
            />,
            <PrivateRoute
              Component={(props) => <LazyComponent.MyLinks {...props} />}
              path={PATH_NAME.MYLINKS}
              exact
              authed={user}
              key="links"
            />,
            <PrivateRoute
              Component={(props) => <LazyComponent.Stats {...props} />}
              path={PATH_NAME.STATS}
              exact
              authed={user}
              key="stats"
            />,
            <PrivateRoute
              Component={(props) => <LazyComponent.AddPodcast {...props} />}
              path={PATH_NAME.ADDPODCAST}
              exact
              authed={user}
              key="add_podcast"
            />,
            <PrivateRoute
              Component={(props) => <LazyComponent.Plans {...props} />}
              path={PATH_NAME.SUBSCRIPTION_PLANS}
              exact
              authed={user}
              key="plans"
            />,
            <PrivateRoute
              Component={(props) => <LazyComponent.Profile {...props} />}
              path={PATH_NAME.PROFILE}
              exact
              authed={user}
              key="profile"
            />,
          ]}

          {/* Public routes that doesn't need any auth */}

          <PublicRoute
            Component={(props) => <LazyComponent.SignIn {...props} />}
            path={PATH_NAME.SIGN_IN}
            exact
            authed={user}
          />

          <PublicRoute
            Component={(props) => <LazyComponent.SignUp {...props} />}
            path={PATH_NAME.SIGN_UP}
            exact
            authed={user}
          />
          <PublicRoute
            Component={(props) => <LazyComponent.ExternalSignUp {...props} />}
            path={PATH_NAME.EXTERNAL_SIGN_UP}
            exact
            authed={user}
          />
          <PublicRoute
            Component={(props) => <LazyComponent.Home {...props} />}
            path={PATH_NAME.HOME}
            exact
            authed={user}
          />
          <PublicRoute
            Component={(props) => <LazyComponent.ForgetPw {...props} />}
            path={PATH_NAME.FORGET_PW}
            exact
            authed={user}
          />
          <PublicRoute
            Component={(props) => <LazyComponent.Faq {...props} />}
            path={PATH_NAME.FAQ}
            exact
            authed={user}
          />
          <Redirect to={PATH_NAME.HOME} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Routes;
