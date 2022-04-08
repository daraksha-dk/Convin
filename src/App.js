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
    dispatch(mainActions.getUsers(1));
  }, [dispatch]);

  console.log({ users, selectedUser });

  return (
    <div className="App">
      <header>
        {Object.keys(selectedUser.data).length > 0 ? (
          <>
            <p>
              <span>Img: </span>
              <span>
                <img src={selectedUser.data.avatar} alt="selectedProfile" />
              </span>
            </p>

            <p>
              <span>Name: </span>
              <span>
                {selectedUser.data.first_name +
                  " " +
                  selectedUser.data.last_name}
              </span>
            </p>

            <p>
              <span>Email: </span>
              <span>{selectedUser.data.email}</span>
            </p>
          </>
        ) : (
          <>
            <h1>
              Click on any of the boxes below to see the profile of the user
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
