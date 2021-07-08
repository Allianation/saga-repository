import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actions as userActions, selectors as userSelectors } from "./reducers/user";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.userInfoRequest());
  }, [dispatch]);

  const user = useSelector(userSelectors.getUserInfo);
  console.log(user);

  return (
    <>
      {user && <h1>Hello, {user.firstName} </h1>}
    </>
  );
};

export default App;
