import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchLogo } from "../../img/SVG/search.svg";

const Search = (props: {
  setSearchUser: React.Dispatch<React.SetStateAction<string>>;
  searchUser: string;
  error: boolean;
  changeTheme: boolean;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  userSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { userSearchHandler, clicked, setClicked, changeTheme, error } = props;

  return (
    <div className={changeTheme ? styles.darkSearch : styles.search}>
      <div className={styles.searchLogo}>
        <SearchLogo className={styles.searchLogo} />
      </div>
      <input
        type="text"
        onChange={userSearchHandler}
        placeholder="Search GitHub username..."
        className={changeTheme ? styles.darkInput : styles.input}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
      <button onClick={() => setClicked(!clicked)}>Search</button>
    </div>
  );
};

export default Search;
