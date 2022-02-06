import fetch from "node-fetch";
import fs from "fs";
import { KEY_WORDS } from "./keywords.js";

console.log(KEY_WORDS);
const NUMBERPATTERN = /\d+/g;

// fetch("https://www.google.com/search?q=KITCHEN")
//   .then((res) => res.text())
//   .then((text) => console.log(text));

let p = [];

const PHONE_TEXT = "&#272;i&#7879;n tho&#7841;i";
const WEBSITE_TEXT = `Trang web`;

const resolveData = (text, key) => {
  fs.writeFile("./text.html", JSON.stringify(text), (e) => e && console.log(e));
  let phone, website;

  phone = text
    .slice(text.indexOf(PHONE_TEXT) + 84, text.indexOf(PHONE_TEXT) + 100)
    .match(NUMBERPATTERN)
    ?.join("");

  if (phone) {
    const position = text.indexOf(WEBSITE_TEXT);

    const websiteDraft = text.slice(position - 500, position);
    website = websiteDraft
      .slice(websiteDraft.indexOf("http"))
      .split("&amp;")[0];

    return {
      company: key,
      phone,
      website: website?.indexOf("http") != -1 ? website : null,
    };
  }
  return null;
};

async function fetchData(URL) {
  const response = await fetch(URL);
  const myJson = await response.text();
  return JSON.stringify(myJson);
}

async function main() {
  for (let i = 0; i < KEY_WORDS.length; i++) {
    const element = KEY_WORDS[i];
    const URL = `https://www.google.com/search?q=${element.replace(/ /g, "+")}`;

    try {
      console.log(URL);
      const data = await fetchData(URL);
      console.log(data);
      if (data) {
        const item = resolveData(data, element);
        item && p.push(item);
        console.log(item);
      }
      continue;
    } catch (error) {
      console.log("errorrrrrrr", error);
      continue;
    }

    // try {
    //   fetch(URL)
    //     .then((res) => {
    //       return res.text();
    //     })
    //     .then((text) => {
    //       console.log(URL);
    //       if (text) {
    //         const item = resolveData(text, element);
    //         console.log(i, item);
    //         item && p.push(item);
    //         fs.writeFile(
    //           "./data.json",
    //           JSON.stringify(p),
    //           (e) => e && console.log(e)
    //         );
    //       }
    //     });
    // } catch (error) {
    //   console.log("error");
    //   return;
    // }
    // continue;
  }
}

main();

fs.writeFile("./data.json", JSON.stringify(p), (e) => e && console.log(e));
