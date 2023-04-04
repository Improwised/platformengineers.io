const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function unescapeHTML(escapedHTML) {
  return escapedHTML
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export default function ({ $axios, $img }, inject) {
  inject("download", (ids) => {
    const fs = require("fs");
    return new Promise((resolve, reject) => {
      try {
        ids.forEach(async (id) => {
          await $axios
            .get(`https://data.improwised.com/assets/${id}`, {
              responseType: "arraybuffer",
              responseEncoding: "binary",
            })
            .then(async (res) => {
              await fs.writeFile(`public/${id}.pdf`, res.data, (err) => {
                if (err) console.log(err); // eslint-disable-line no-console
                else {
                  console.log("File written successfully\n"); // eslint-disable-line no-console
                }
              });
            })
            .catch((error) => {
              console.error(error); // eslint-disable-line no-console
            });
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });

  inject("unescapeHTML", (content) => {
    return unescapeHTML(content);
  });

  inject("dImage", (content) => {
    const dom = new JSDOM(content);
    const images = dom.window.document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      if (images[i].src.includes(process.env.DATA_URL)) {
        const url = images[i].src;
        dom.window.document.querySelector(`img[src="${url}"]`).src = $img(url, {
          format: "png",
        });
      }
    }
    return unescapeHTML(
      dom.window.document.getElementsByTagName("body")[0].innerHTML
    );
  });

  inject("gist", async (content) => {
    const dom = new JSDOM(content);
    const scripts = dom.window.document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src.includes("pastebin")) {
        try {
          const { data: sData } = await $axios.get(scripts[i].src);
          const a = dom.window.document.createElement("div");
          a.append(sData.replace(`document.write('`, "").replace(`');`, ""));
          const scr = dom.window.document.querySelector(
            `script[src="${scripts[i].src}"]`
          );
          scr.parentNode.append(
            sData.replace(`document.write('`, "").replace(`');`, "")
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
    return unescapeHTML(
      dom.window.document.getElementsByTagName("body")[0].innerHTML
    );
  });
}
