(function (d, t) {
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = "https://support.platformengineers.io/embed.js";
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    new window.ChaskiqMessengerEncrypted({
      domain: "https://support.platformengineers.io",
      ws: "wss://support.platformengineers.io/cable",
      app_id: "BfzTsCS7K4vKytFvEP5Yv7Fd",
      data: "YOUR_ENCRYPTED_JWE_DATA",
      lang: "USER_LANG_OR_DEFAULTS_TO_BROWSER_LANG",
    });
  };
})(document, "script");
