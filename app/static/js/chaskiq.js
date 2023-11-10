(function (d, t) {
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = "https://support.platformengineers.io/embed.js";
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    var currentRoute = window.location.pathname;

    var right = currentRoute === "/contact-us" ? "60px" : "";

    var style = document.createElement("style");
    style.innerHTML = "#chaskiqPrime { right: " + right + " !important; }";
    document.head.appendChild(style);

    new window.ChaskiqMessengerEncrypted({
      domain: "https://support.platformengineers.io",
      ws: "wss://support.platformengineers.io/cable",
      app_id: "BfzTsCS7K4vKytFvEP5Yv7Fd",
      data: "YOUR_ENCRYPTED_JWE_DATA",
      lang: "USER_LANG_OR_DEFAULTS_TO_BROWSER_LANG",
    });
  };
})(document, "script");
