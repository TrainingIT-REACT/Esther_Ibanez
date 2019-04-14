import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

const Login = React.lazy(() => import('./components/Login/Login'));
const Profile = React.lazy(() => import('./components/Login/Profile'));
const Home = React.lazy(() => import('./components/Home/Home'));
const Albums = React.lazy(() => import('./components/Albums/Albums'));
const AlbumDetail = React.lazy(() => import('./components/Albums/AlbumDetail'));

const AppRouter = ({user}) => {
    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={user.signedIn ? Profile : Login}/>
              <Route exact path="/albums" component={Albums}/>
              <Route path="/albums/:id([0-9]*)" component={AlbumDetail}/>
            </Switch>
        </Suspense>
    </>
};

const mapStateToProps = (state/*, otherProps */) => {
    return {
      ...state
    }
  }
  
  export default connect(
    mapStateToProps,
    () => ({}),
  )(AppRouter);