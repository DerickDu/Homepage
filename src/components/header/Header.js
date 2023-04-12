import React, { useContext, useEffect, useCallback } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  educationInfo,
  bigProjects,
  // blogSection,
  // talkSection,
  achievementSection,
} from "../../portfolio";
// import fs from "fs";
// fs = require("fs");
import axios from "axios";
// import process from "process/browser";
// const process = require("process");
// require("dotenv").config();
import Mailgun from "mailgun.js";
// const Mailgun = require("mailgun.js");
const formData = require("form-data");

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewEdu = educationInfo.display;
  const viewBigProjects = bigProjects.display;
  // const viewTalks = talkSection.display;

  const IP_GEOLOCATION_API_KEY = process.env.REACT_APP_IP_GEOLOCATION_API_KEY;

  // const getRepoData = () => {
  //   fetch("/profile.json").then((result) => {
  //     if (result.ok) {
  //       return console.log(result);
  //     }
  //     throw result;
  //   });
  // };

  // const getIPAddress = async () => {
  //   const response = await axios.get("https://api.ipify.org?format=json");
  //   return response.data.ip;
  // };

  const getOS = () => {
    const userAgent = navigator.userAgent;
    const osList = {
      "Windows NT 10.0": "Windows 10",
      "Windows NT 6.3": "Windows 8.1",
      "Windows NT 6.2": "Windows 8",
      "Windows NT 6.1": "Windows 7",
      "Windows NT 6.0": "Windows Vista",
      "Windows NT 5.1": "Windows XP",
      "Windows NT 5.0": "Windows 2000",
      "Mac OS X": "Mac OS X",
      Linux: "Linux",
    };
    for (const os in osList) {
      if (userAgent.indexOf(os) !== -1) {
        return osList[os];
      }
    }
    return "Unknown";
  };

  // const getGeoLocation = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.geoapify.com/v1/ipinfo?&apiKey=${IP_GEOLOCATION_API_KEY}`
  //     );

  //     console.log(`statusCode: ${response.status}`);
  //     if (response.status !== 200) {
  //       console.log("Fail to fetch IP address");
  //     }

  //     const geoData = response.data;
  //     return JSON.stringify(geoData);
  //     // const jsonGeoData = JSON.stringify(geoData);
  //     // fs.writeFile("./public/geo.json", jsonGeoData, function (err) {
  //     //   if (err) return console.log(err);
  //     //   console.log("saved file to public/geo.json");
  //     // });
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const sendEmail = async () => {
  //   const geoData = JSON.parse(getGeoLocation());

  //   // fs.readFile("./public/geo.json", "utf8", (err, data) => {
  //   //   if (err) {
  //   //     console.error(`${error} (Fail to fetch GeoData from public folder)`);
  //   //     return;
  //   //   }
  //   console.log("Success to fetch geolocation file");
  //   // const geoData = JSON.parse(data);
  //   // const osData = getOS();
  //   const messageData = {
  //     from: "dododugan@gmail.com",
  //     to: "derick@email.cn",
  //     subject: "New website visitor",
  //     text: `New website visitor:\nTime and date of visit: ${new Date().toLocaleString()}\nCountry: ${
  //       geoData.country.name
  //     }\nCity: ${geoData.city.name}\nOperating system: None\nLatLon: ${
  //       geoData.location.latitude
  //     } & ${geoData.location.longitude}`,
  //   };
  //   const mailgun = new Mailgun(formData);
  //   const client = mailgun.client({
  //     username: "api",
  //     key: process.env.REACT_APP_MAILGUN_API_KEY,
  //   });

  //   await client.messages
  //     .create(process.env.REACT_APP_MAILGUN_DOMAIN, messageData)
  //     .then((res) => {
  //       console.log(res);
  //       console.log("Success to send email");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   getRepoData();
  //   sendEmail();

  //   // fetchData();
  // }, [sendEmail]);

  const sendEmail = useCallback(async () => {
    const getGeoLocation = async () => {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/ipinfo?&apiKey=${IP_GEOLOCATION_API_KEY}`
        );

        console.log(`statusCode: ${response.status}`);
        if (response.status !== 200) {
          console.log("Fail to fetch IP address");
        }

        const geoData = response.data;
        return JSON.stringify(geoData);
      } catch (error) {
        throw error;
      }
    };

    const geoData = JSON.parse(await getGeoLocation());

    console.log("Success to fetch geolocation file");

    const messageData = {
      from: "dododugan@gmail.com",
      to: "derick@email.cn",
      subject: "New website visitor",
      text: `New website visitor:\nTime and date of visit: ${new Date().toLocaleString()}\nCountry: ${
        geoData.country.name
      }\nCity: ${
        geoData.city.name
      }\nOperating system: ${await getOS()}\nLatLon: ${
        geoData.location.latitude
      } & ${geoData.location.longitude}`,
    };
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "api",
      key: process.env.REACT_APP_MAILGUN_API_KEY,
    });

    client.messages
      .create(process.env.REACT_APP_MAILGUN_DOMAIN, messageData)
      .then((res) => {
        console.log(res);
        console.log("Success to send email");
      })
      .catch((err) => {
        console.error(err);
        console.log("Fail!");
      });
  }, [IP_GEOLOCATION_API_KEY]);

  const getRepoData = useCallback(() => {
    fetch("/profile.json").then((result) => {
      if (result.ok) {
        return console.log(result);
      }
      throw result;
    });
  }, []);
  // const getRepoData = useCallback(async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/users/${username}/repos?sort=updated`
  //     );

  //     setRepos(response.data);
  //     console.log("Success to fetch repositories data");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [username]);

  useEffect(() => {
    getRepoData();
    sendEmail();
  }, [getRepoData, sendEmail]);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEdu && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewBigProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {/* {viewBigProjects && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* <li>
            eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a>
              <ToggleSwitch />
            </a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
