fs = require("fs");
const https = require("https");
const axios = require("axios");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;
// const IP_GEOLOCATION_API_KEY = process.env.IP_GEOLOCATION_API_KEY;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`,
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
    },
  };

  const req = https.request(default_options, (res) => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", (d) => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", (error) => {
    throw error;
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET",
  };

  const req = https.request(options, (res) => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestMediumFailed);
    }

    res.on("data", (d) => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", (error) => {
    throw error;
  });

  req.end();
}

// ///////////////////////////////!!!!!

// const getIPAddress = async () => {
//   const response = await axios.get("https://api.ipify.org?format=json");
//   return response.data.ip;
// };

// const getGeoLocation = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.geoapify.com/v1/ipinfo?&apiKey=${IP_GEOLOCATION_API_KEY}`
//     );

//     console.log(`statusCode: ${response.status}`);
//     if (response.status !== 200) {
//       throw new Error(ERR.requestMediumFailed);
//     }

//     const geoData = response.data;
//     const jsonGeoData = JSON.stringify(geoData);
//     fs.writeFile("./public/geo.json", jsonGeoData, function (err) {
//       if (err) return console.log(err);
//       console.log("saved file to public/geo.json");
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// getGeoLocation();

// // const getOS = () => {
// //   const userAgent = navigator.userAgent;
// //   const osList = {
// //     "Windows NT 10.0": "Windows 10",
// //     "Windows NT 6.3": "Windows 8.1",
// //     "Windows NT 6.2": "Windows 8",
// //     "Windows NT 6.1": "Windows 7",
// //     "Windows NT 6.0": "Windows Vista",
// //     "Windows NT 5.1": "Windows XP",
// //     "Windows NT 5.0": "Windows 2000",
// //     "Mac OS X": "Mac OS X",
// //     Linux: "Linux",
// //   };
// //   for (const os in osList) {
// //     if (userAgent.indexOf(os) !== -1) {
// //       return osList[os];
// //     }
// //   }
// //   return "Unknown";
// // };

// const Mailgun = require("mailgun.js");
// const formData = require("form-data");

// fs.readFile("./public/geo.json", "utf8", (err, data) => {
//   if (err) {
//     console.error(`${error} (Fail to fetch GeoData from public folder)`);
//     return;
//   }
//   console.log("Success to fetch geolocation file");
//   const geoData = JSON.parse(data);
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
//     key: process.env.MAILGUN_API_KEY,
//   });
//   client.messages
//     .create(process.env.MAILGUN_DOMAIN, messageData)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

// const sendEmail = async () => {

//   // try {
//   //   const response = await axios.post(
//   //     `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}`,
//   //     {

//   //     },
//   //     {
//   //       auth: {
//   //         username: "api",
//   //         password: process.env.MAILGUN_API_KEY,
//   //       },
//   //     }
//   //   );
//   //   console.log("Email sent:", response.data);
//   // } catch (error) {
//   //   console.error("Failed to send email:", error);
//   // }
// };

// sendEmail();
