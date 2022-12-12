import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Main from "./Components/Main/Main";
import { Users } from "./Components/Interface";

const App = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const [searchUser, setSearchUser] = useState("octocat");
  const [clicked, setClicked] = useState(false);
  const [changeTheme, setChangetheme] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await axios(
        `https://api.github.com/users/${searchUser}`
      ).catch(function (error) {
        if (error.response) {
          setError(error.response.data.message);
        }
      });
      const data = response.data;
      setUsers(data);
      setError(false);
    };
    fetchData();
  }, [clicked]);

  const userSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value);
  };

  return (
    <div className={changeTheme ? styles.dark : styles.App}>
      <Header changeTheme={changeTheme} setChangetheme={setChangetheme} />
      <Search
        userSearchHandler={userSearchHandler}
        clicked={clicked}
        setClicked={setClicked}
        changeTheme={changeTheme}
        error={error}
        setSearchUser={setSearchUser}
        searchUser={searchUser}
      />
      <Main users={users} changeTheme={changeTheme} />
    </div>
  );
};

export default App;
