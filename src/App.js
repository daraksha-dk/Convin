import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.scss";
import {
  mainActions,
  selectSelectedUser,
  selectUsers,
} from "./store/mainSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers, shallowEqual);
  const selectedUser = useSelector(selectSelectedUser, shallowEqual);

  useEffect(() => {
    dispatch(mainActions.getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {users.loading || (selectedUser.loading && "loading")}
      <header>
        {Object.keys(selectedUser.data).length > 0 ? (
          <>
            <img
              className="avatar"
              src={selectedUser.data.avatar}
              alt="selectedProfile"
            />

            <div className="other-info">
              <p>
                {selectedUser.data.first_name +
                  " " +
                  selectedUser.data.last_name}
              </p>

              <p>{selectedUser.data.email}</p>
            </div>
          </>
        ) : (
          <>
            <h1>
              Click on any of the boxes below to see the profile of a user
            </h1>
          </>
        )}
      </header>

      <footer className="footer">
        {users.data.map((_, index) => (
          <div
            key={index}
            className="box"
            onClick={() => {
              dispatch(mainActions.setProfile(users.data[index].id));
            }}
          >
            {index + 1}
          </div>
        ))}
      </footer>
    </div>
  );
}

export default App;
