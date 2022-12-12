import React from "react";
import styles from "./Main.module.css";
import { ReactComponent as Location } from "../../img/SVG/location-pin.svg";
import { ReactComponent as Url } from "../../img/SVG/link.svg";
import { ReactComponent as Twitter } from "../../img/SVG/twitter.svg";
import { ReactComponent as Office } from "../../img/SVG/office.svg";
import { Users } from "../Interface";

const Main = (props: { users: Users | null; changeTheme: boolean }) => {
  const { users, changeTheme } = props;

  const formatDate = (date: any) => {
    let d = new Date(date),
      month = d.toLocaleString("en-US", { month: "short" }),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(" ");
  };

  let apiDate = formatDate(users?.created_at);

  return (
    <div className={changeTheme ? styles.darkMain : styles.main}>
      <div className={styles.mainHeader}>
        <img src={users?.avatar_url} alt="logo" className={styles.logo} />
        <div
          className={
            changeTheme ? styles.darkMainHeaderList : styles.mainHeaderList
          }
        >
          <span>{users?.name}</span>
          <span>@{users?.login}</span>
          <span>joined {apiDate}</span>
        </div>
      </div>
      <div className={changeTheme ? styles.darkBio : styles.bio}>
        {users?.bio ? (
          <>{users?.bio}</>
        ) : (
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati doloribus animi corporis exercitationem."
        )}
      </div>
      <div className={changeTheme ? styles.darkUserCard : styles.userCard}>
        <span>
          Repos: <p>{users?.public_repos}</p>
        </span>
        <span>
          Followers: <p>{users?.followers}</p>
        </span>
        <span>
          Following: <p>{users?.following}</p>
        </span>
      </div>
      <div className={changeTheme ? styles.darkMainBody : styles.mainBody}>
        <div className={styles.leftSide}>
          <span>
            <span className={styles.mainBodyIcon}>
              <Location
                className={
                  changeTheme ? styles.darkLocationLogo : styles.locationLogo
                }
              />
            </span>
            {users?.location ? <>{users?.location}</> : "Not available"}
          </span>
          <span className={changeTheme ? styles.darkBlog : styles.blog}>
            <span className={styles.mainBodyIcon}>
              <Url
                className={changeTheme ? styles.darkUrlLogo : styles.urlLogo}
              />
            </span>
            {users?.blog ? (
              <a href={users?.blog} target="_blank">
                {users?.blog}
              </a>
            ) : (
              "Not available"
            )}
          </span>
        </div>
        <div className={styles.rightSide}>
          <span>
            <span className={styles.mainBodyIcon}>
              <Twitter
                className={
                  changeTheme ? styles.darkTwitterLogo : styles.twitterLogo
                }
              />
            </span>
            {users?.twitter_username === null && "Not available"}
          </span>
          <span className={changeTheme ? styles.darkBlog : styles.blog}>
            <span className={styles.mainBodyIcon}>
              <Office
                className={
                  changeTheme ? styles.darkOfficeLogo : styles.officeLogo
                }
              />
            </span>
            {users?.company ? (
              <a href={users?.company} target="_blank">
                {users?.company}
              </a>
            ) : (
              "Not available"
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
