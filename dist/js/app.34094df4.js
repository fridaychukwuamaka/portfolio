(function (e) {
  function t(t) {
    for (
      var r, o, s = t[0], c = t[1], l = t[2], u = 0, p = [];
      u < s.length;
      u++
    )
      (o = s[u]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]),
        (n[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    d && d(t);
    while (p.length) p.shift()();
    return a.push.apply(a, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < a.length; t++) {
      for (var i = a[t], r = !0, s = 1; s < i.length; s++) {
        var c = i[s];
        0 !== n[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var r = {},
    n = { app: 0 },
    a = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var i = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var d = c;
  a.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  "034f": function (e, t, i) {
    "use strict";
    i("85ec");
  },
  "0635": function (e, t, i) {
    e.exports = i.p + "img/Cover.b35e21e1.png";
  },
  "0ea8": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABjCAYAAABg+dWrAAAABHNCSVQICAgIfAhkiAAADrFJREFUeF7lXQd0FVUa/gDRlV1Z21lkd0VUViwUIyquSsegCZ1AzMYSDEgv0iG0ANJDhwgJAULo0kIRQQggxYiuiiBFQHrACoJBBHHPN84LLy/vvZm5c+e+yfqfk/MOzC3/vd/cuf/92y2CQkD/3bU5JiFhyMV31m+6C8DdAG4FcAuAkvovR3EBwI/67zkAxwHs1/++dfswi7iQwTIAqup/jwN4ZNrkMXfm5JzF0OFjRdklEHsBfAQgG8AHAE6INuZEvVAD8WcATwF40mvy+dbno+NHdqNIkSK4v3wV/PLLL7Lm4YwOCoHx/P0kq3Gr7YQSiH8AaAUgDkDZQIxXfbIKNq1foT3u0LkXZqcvsDpGM+W/BJAGYC6AU2YqyC4TCiAeBtAfQAsAxYwGNHRwX3Tr2l4rduDgITz2ZC2jKnae/wpgEYCRAD6305DVuiqB4CdoAIAIK0x+nL0JD5b/V16VBk1isSlrq5UmRMuu0QHZJtqAlXoqgLgPwFQAz1thjGXLlPkn9u3ema/a+g1ZaNL8FatN2Sm/GkBXAIftNGJU10kgSgBIANAdwE1GjPh73qXj6xg+jIvoOv3222/a5+ngl47Oiy87lwGMATACQK7IWIzqOAUEv/+UNSnzC9O7a97Gs89Qks1PM2dloPMbfYXbtVGRIu8bAJbaaMNvVdlA3AwgHUCUXUZvueUvyDn+hSa2Fng9L1/WRNkfzp23241ofW7oLQFcEm3At55MILij8k2pKIO5/8REISV5fMCmBg8djTFJk2V0JdrGZwAaATgm2oB3PVlA8EC2CsDfZDDFNubPnYFGDV4I2NzX33yLcg8+jl9/pcQZMvoaQAMAH9rlQAYQFOwJAk/JUqh48eI4fWwvSpTgly4wtWrTBQsWLZPSp41GeBonGFk22oBdIOoDeFtUKgrEeL3w2li2eI7huD7//As8Va2eYTkFBShVcV+kqCtEdoBoDWAagBuEeg5SadL4EYhv+ZKpZsMjmmH7DttfBlN9GRS6CoAqgBSRxkSBiAGQAaCoSKdGdQ7t24XSpQvo/vxWy1y9DjEv8Z1wBV0D0ARAplVuRICoCWCDEyuBzFd5rDK2bjK/wq9du4aKYdVw9BjND66gnwFEAthkhRurQDwBYKOXMcZKX6bKDurfE716dDZV1lNoavJM9Oo72FIdhwvTSFXXijRlBYhSACg789cxyt6+ARUeedBS+7m5l3DvA2G4eDFk5gR//J4FUBkAfw3JLBDcC7gS+FlyjPwp+cx21jdhCCZNFdonzXYhUo4iLVcG946gZBYIrvtBRo3Zfd6hXTxGjxD7xJw6lYPyFaqCSkGXUSIAw0GZAYKrgKvBEQnJe9LWZC5EzerPCM9j7CttsCJzrXB9hypyNXBVBD3wGQFBTwka3W1pUc0MkEq+U0f3oFgxQ6NdwOZ2frALdZ9vaqY71WWotX1E9zDx27cREDQZ9lbBdXTzxkhLsa/Eq/psOPbs2aeCZat9jALQJ1ClYECU16UkIaOOVS7TZ01DsyZU2dijxW+vRMtWHe014kxtqkEe1f2sCvQQDAgeSBy11Hu4KVq0KM6e3G+o5DMzP1evXtW0st98+52Z4qrLcK/lfmEaiMYAlqvisk7t6shcNk9ad+MmTMOAwbRqupKoAvndP8iL/K0I/t/HAMJUDWPcmGFo0/pVad1duHBRO+BdukRtg+uIzmz0aDEEQulqIDdWlHxmp/WNHgmYkUqrrSuJn/zNRiuCfqEFLfYOjadypQrYsfUd6a1/dfQYKjz6rPR2JTW4xVdL4ftp4uHNlqXJKqMJfbqhXx86RsinZtFxWPcu90dXUr5V4QvEbADyPtYmxs/VwFXhBGVt2Yb6jWg6cSXRBEm/X428gaDNmZpCabZno+HfdVcpHN5PT3nnKOyJmqqd0cwOhqpyOmLzNx8QRGeW2VZklKOkRInJSZo7bxHadujhZBd22uZyXegLxDoASi3xmcvnoU6t6nYGYlj3cuid0YLxuBIApdS8FUE1Bt3mlKgz2PHNN/9JO03bUfIZoqAXGD5yPN4cOc5scZXleNC5DcDPnj1CubREvRL1Syro+x/OyY42ksm2Jj15gFBi+PHmnppWalxVUbuOPZCeQZdV15FmOPIAwVNeDVUsUslH20PJkjR3qCEF0UaiA9EOdwRC+f5AKxytcaqJZwqeLVxG2j5BIKiAyh+W4zCntEvTPq2aeMrmaduFFEYglJ8f9n62HWXvYTi1eqpcpToOHf5KfcfBe4whEEo36ocfKo9dO98L2USkzExH1+6MKHMVJRIIpfqlnt07YfCAXiGbBZc6o80hEEpP1Fs2rsLjVWi6DR0NTByJpPEMdHUNvUsglNkfbr/tVpz4Smkcud+Zdkm0kTdv2QSCGVzoseE4MeaBsQ9uoNdad8KiJQVMx6Fi7QCBYHIQRx2LPaNbviQd4c8pcQwxnFAXRRuR17MEggcKx5V9VPIxLu7GG280nCRVBegVSO9AF9BlAqHEa7dJo0hkzHnLBWO+zgL9ZOkv6wYiEMz29VenmUmdPhEx0e7yS2W0ET3IT5/m1zmkdF7JHhEKJZ/ZaZ08LQV9+g0xW9ypctoe4bjUVKPa01i7ypUqaLjEGU2Tmj7VQ4ycQlsLPgmFks/sgHr3TcSU5FSzxZ0op50jKEwzp4Rj9MXuHbinjOMhFsL8uyDaaCWBmACgi/AoDCpWqPAQsretd6p5ae0yVpsx2yGiiQSiLYBkpxjo06sLBvRzrTtL3rC378hGeITt7Eai09iOQDjqOLBt8xqEPVpJlEGl9UIYbVSLQDDVpyOWktKlS+HQPrmefGvWrkdkRLgjAC1cvBzxr1sLtpfESGkCwWjRbwDcLqnRvGZax7+MCUnDpTX7clw7LFuxGo0bRoAHRKpNZFKIoo2Yu6Ksx4vDEckpc1kG6tS27xxCb73o2FbY8N71kILyD5TD4gVpKHf/vTKxwNhxUzBoCOMOlZHmjOwBQvqGLcuT76efctE46mXs2FkwFRATa81OnSL1UxUCZzTmBpztAUL6PhHVtCHmpNmzgp07fx6RDWPw6WfBjUmd2rfGsCH9cMMNclJHdenWD6lpzE6thLikj3q75UtVdcxKnYIWUeLnRFrRXqjfAvsPMG23MTGH+IK5M1CqlP20ggqjjQ4A0DLAeAMhzZvDrpLvxIlTqBfZHMeOW7tZ4M47bsei+TPxVFXedmCPmG2ZWZcdprw8Hd5AEBkpIfu1a1bDqhXzhcbABFh16jXFmTOmsusU6IPe5YkDe6Nr57Z+c8aaZWpj1lY0bBJrtrhIOdqBygE44rsi+G8pCsCk0UPR9nXrHnX79h/UPkcygtWfq1sTc2clgzk+RMnhaKN8Yb6+MXTMFWHbus9wLIZlWaFPPt2NyEYxOH+et9PIISoaKeJaTcTl6X3O3IVo36mnHGYKtsIITur5NPIFgkETvMgieMLVIKyJhOtSz0MRlc5fsok28remJgmFADgYbcSB/l23jvoFgv9pSxtrNVyXGyIPaxKvrPGL5WtxsRg7KhE33WTNT2LYiCSMGJX34sp6TybqVyHktee7IviASDHftZBQvvP9dahUkamJjInqirj4jsrSSpOvxfNn4u67GcxpjhxwRuNquB9AjjcH/oDgcyF/WMrwRw4wjYcxMXqHUTyqicEx89Kng5KdWWrTvjsy5i82W9yo3HTd9JCvXCAg6DN/0Kq/U7s2LTF2lLEhnmZJmidDRbwKoXfPzuBnlGceI5IYbcScTbxVoMABKRAQ5M3yAW/1ygWoVSN4/ovEYaMxeqz9TGVGk2fmOS8JWZCRCvrkGlFEg2hseX+HUTGj5wETLQYDgrsaV4WpiBKjnHzMPsm4BIU6HKNJ0Z7TZrJ00WzDNBRr39mA5jGvmWozQCGuAq4GrooCFAwIFn4RgKmL34Ll5KMjF68YcJHTb76JoIg78s2BQXNG8UVithsbqa/9JszyMGIEBMvxWoJmRq9CoJx8V65cQeyrbUHLmtvJyOA0PWUOuvXkFXqWiU5dfKkDkhkgeMijKBTQAhMoJx8ziEVFx2Hz1u2WOQ9VhWAGJ8Foo6N6Nji6ttoCgpWZSIs7lV8Ro26dGli5lLcYXKcff7yAhk1jseujT0I1p8L9BjM49R80HOMnmnZ6YfLdf5tJ1m5mRXgGFFCKmpD0JlrHX7+k77vvf0BEgxbYs5cmjsJL/gxOFp3RTKWj5gxZAYKrgaeaAvuFt5IvJ+eMZks4fIQrsvCTP4NTXHwHLFlqeFcHs4TSUcowQbtVIFieykDmZuNy0+ixsEp4P4vXekKTKAjCyZOnCz8CXiPwNTiZiDZiXGJtK/fUWVkRHtbu1PcL7SbXgQk9tVOqTFuCG1H0NTjVDm+M7A/9qnMO6S+qpVvlRYDgPBEEeo6V5MUblLHrRUZJtSW4EQzy5DE4bdi4GfSz8iFOPr8WBMMSiQLBTireW/aerLSUSXc0avYSKCX9UYjpKxZmpKDZi3Hg5q0TnfQYqcnbBSyTHSCQnJxUv3v3/hNycy9RrfuHI/r00rKoX7HMNHzCVwrbAkKfefqvMLmGlDtKCyGa/ETzsnSuCGGSAQQ7ZwasSd55TIU5KlwVeYrlJXi2k5DLAsIzfXTdYKI+YZt3IcGBE08A8qsTbDAvGwhtE9evU9bE2/9D4mYcLbopB5oPJ4BgXyX0a1yYD8iatd69yNGOMEZ3N8qVzaZTQHj4pDQ1Qz9lyuZdZXu8s7OrHanIiFmngfD0z5QDvK7dlLXPiGmFz2lV44285i9PFWROFRBkj+E9rQDwc+XeWN/fJ/Kk/hniarYtEZnBRiUQHn6K61cj9AVwnxkmFZahQ/BoAGkArijs15Ia3Am+ngbAvKMtAIh7C9vj7KKu3ufkh8yUGIoV4W/aCEJzAAwXpTVQbmBcwR4ZRUtvbBrSlwAgGCEltwDhOwmMcOWlpYw44XUrjN14WHCm9uhxH4z9oDqCb/33gm05Vs2tQAQaMA+JZh1X6dVuLu7Lsek13/D/AE9QMAA5p1YVAAAAAElFTkSuQmCC";
  },
  "0eba": function (e, t, i) {
    e.exports = i.p + "img/musicapp.814219e1.png";
  },
  "180f": function (e, t, i) {},
  "2cbe": function (e, t, i) {
    "use strict";
    i("5380");
  },
  "3cae": function (e, t, i) {
    "use strict";
    i("5e13");
  },
  "4bdc": function (e, t, i) {
    "use strict";
    i("b798");
  },
  "52e9": function (e, t, i) {},
  5380: function (e, t, i) {},
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    var r = i("2b0e"),
      n = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "app" } },
          [
            i("transition", { attrs: { name: "fade3", appear: "" } }, [
              e.splashScreen ? e._e() : i("div", [i("SplashScreen")], 1),
            ]),
            e.splashScreen
              ? i(
                  "div",
                  { attrs: { id: "others" } },
                  [
                    i("Header"),
                    i(
                      "div",
                      { attrs: { id: "not-mobile" } },
                      [i("router-view")],
                      1
                    ),
                    i(
                      "div",
                      { attrs: { id: "mobile" } },
                      [
                        i("Home"),
                        i("div", { attrs: { id: "page" } }, [i("About")], 1),
                        i("div", { attrs: { id: "work" } }, [i("Work")], 1),
                        i(
                          "div",
                          { attrs: { id: "experience" } },
                          [i("Experience")],
                          1
                        ),
                        i(
                          "div",
                          { attrs: { id: "contact" } },
                          [i("Contact")],
                          1
                        ),
                      ],
                      1
                    ),
                    i("div", { attrs: { id: "menu" } }, [
                      i(
                        "ul",
                        [
                          i(
                            "router-link",
                            { staticClass: "route", attrs: { to: "/" } },
                            [
                              i(
                                "li",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.activeLink(0);
                                    },
                                  },
                                },
                                [
                                  i("p", [e._v("Home")]),
                                  i("div", {
                                    class: {
                                      growed:
                                        0 == e.link && "/" == e.currentRoute,
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "router-link",
                            { staticClass: "route", attrs: { to: "/about" } },
                            [
                              i(
                                "li",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.activeLink(1);
                                    },
                                  },
                                },
                                [
                                  i("p", [e._v("About")]),
                                  i("div", {
                                    class: {
                                      growed:
                                        1 == e.link ||
                                        "/about" == e.currentRoute,
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "router-link",
                            { staticClass: "route", attrs: { to: "/work" } },
                            [
                              i(
                                "li",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.activeLink(2);
                                    },
                                  },
                                },
                                [
                                  i("p", [e._v("My projects")]),
                                  i("div", {
                                    class: {
                                      growed:
                                        2 == e.link ||
                                        "/work" == e.currentRoute,
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "router-link",
                            {
                              staticClass: "route",
                              attrs: { to: "/experience" },
                            },
                            [
                              i(
                                "li",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.activeLink(3);
                                    },
                                  },
                                },
                                [
                                  i("p", [e._v("Experience")]),
                                  i("div", {
                                    class: {
                                      growed:
                                        3 == e.link ||
                                        "/experience" == e.currentRoute,
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._m(0),
                    ]),
                    i("div", { attrs: { id: "side-bar" } }, [i("SideBar")], 1),
                    i("transition", { attrs: { name: "fade", appear: "" } }, [
                      i("div", { attrs: { id: "to-top" } }, [
                        i(
                          "a",
                          { attrs: { href: "#mobile" } },
                          [
                            i("chevron-up-icon", {
                              staticClass: "chevron-up-icon",
                              attrs: { size: "1.5x" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        );
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "downld-cv" } }, [
            i(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://drive.google.com/file/d/1lsF7Tgzr5PwY-rACSrYrzfxj7B0_Wq4y/view?usp=sharing",
                  download: "",
                },
              },
              [e._v("Resume")]
            ),
          ]);
        },
      ],
      o = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { staticClass: "hello" }, [
          i("h1", [e._v(e._s(e.msg))]),
          e._m(0),
          i("h3", [e._v("Installed CLI Plugins")]),
          i("ul"),
          i("h3", [e._v("Essential Links")]),
          e._m(1),
          i("h3", [e._v("Ecosystem")]),
          e._m(2),
        ]);
      },
      s = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", [
            e._v(
              " For a guide and recipes on how to configure / customize this project,"
            ),
            i("br"),
            e._v(" check out the "),
            i(
              "a",
              {
                attrs: {
                  href: "https://cli.vuejs.org",
                  target: "_blank",
                  rel: "noopener",
                },
              },
              [e._v("vue-cli documentation")]
            ),
            e._v(". "),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("ul", [
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("Core Docs")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://forum.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("Forum")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://chat.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("Community Chat")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://twitter.com/vuejs",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("Twitter")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://news.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("News")]
              ),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("ul", [
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://router.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("vue-router")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://vuex.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("vuex")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/vue-devtools#vue-devtools",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("vue-devtools")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://vue-loader.vuejs.org",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("vue-loader")]
              ),
            ]),
            i("li", [
              i(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/awesome-vue",
                    target: "_blank",
                    rel: "noopener",
                  },
                },
                [e._v("awesome-vue")]
              ),
            ]),
          ]);
        },
      ],
      c = { name: "HelloWorld", props: { msg: String } },
      l = c,
      d = (i("9a84"), i("2877")),
      u = Object(d["a"])(l, o, s, !1, null, "574af232", null),
      p =
        (u.exports,
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { attrs: { id: "cover" } },
            [
              i("transition", { attrs: { name: "fade" } }, [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.menu,
                        expression: "menu",
                      },
                    ],
                    attrs: { id: "menu-open" },
                  },
                  [
                    i("div", {
                      attrs: { id: "shadowed" },
                      on: {
                        click: function (t) {
                          e.menu = !e.menu;
                        },
                      },
                    }),
                    i("div", { attrs: { id: "none-shadow" } }, [
                      i(
                        "p",
                        {
                          attrs: { id: "back" },
                          on: {
                            click: function (t) {
                              e.menu = !e.menu;
                            },
                          },
                        },
                        [e._v("back")]
                      ),
                      i("ul", [
                        i("a", { attrs: { href: "#cover" } }, [
                          i(
                            "li",
                            {
                              on: {
                                click: function (t) {
                                  return e.toggle(0);
                                },
                              },
                            },
                            [
                              i("a", [e._v("Home")]),
                              i("div", {
                                class: { selected: 0 == e.selectMenu },
                              }),
                            ]
                          ),
                        ]),
                        i("a", { attrs: { href: "#page" } }, [
                          i(
                            "li",
                            {
                              on: {
                                click: function (t) {
                                  return e.toggle(1);
                                },
                              },
                            },
                            [
                              i("a", [e._v("About")]),
                              i("div", {
                                class: { selected: 1 == e.selectMenu },
                              }),
                            ]
                          ),
                        ]),
                        i("a", { attrs: { href: "#work" } }, [
                          i(
                            "li",
                            {
                              on: {
                                click: function (t) {
                                  return e.toggle(2);
                                },
                              },
                            },
                            [
                              i("a", [e._v("My projects")]),
                              i("div", {
                                class: { selected: 2 == e.selectMenu },
                              }),
                            ]
                          ),
                        ]),
                        i("a", { attrs: { href: "#experience" } }, [
                          i(
                            "li",
                            {
                              on: {
                                click: function (t) {
                                  return e.toggle(3);
                                },
                              },
                            },
                            [
                              i("a", [e._v("Experience")]),
                              i("div", {
                                class: { selected: 3 == e.selectMenu },
                              }),
                            ]
                          ),
                        ]),
                        i("a", { attrs: { href: "#contact" } }, [
                          i(
                            "li",
                            {
                              on: {
                                click: function (t) {
                                  return e.toggle(4);
                                },
                              },
                            },
                            [
                              i("a", [e._v("Contact")]),
                              i("div", {
                                class: { selected: 4 == e.selectMenu },
                              }),
                            ]
                          ),
                        ]),
                        i(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://drive.google.com/file/d/1lsF7Tgzr5PwY-rACSrYrzfxj7B0_Wq4y/view?usp=sharing",
                              download: "",
                            },
                          },
                          [
                            i("li", { attrs: { id: "download" } }, [
                              e._v(" Resume "),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
              i(
                "div",
                { staticClass: "title" },
                [
                  i(
                    "div",
                    { attrs: { id: "hello" } },
                    [
                      i("transition", { attrs: { name: "fade", appear: "" } }, [
                        i("p", { attrs: { id: "first" } }, [e._v("Hello,")]),
                      ]),
                      i(
                        "transition",
                        { attrs: { name: "slide-home-side", appear: "" } },
                        [
                          i("p", { attrs: { id: "second" } }, [
                            e._v("I'm Chukwuamaka Friday"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  i(
                    "transition",
                    { attrs: { name: "slide-home-up", appear: "" } },
                    [
                      i("p", { attrs: { id: "story" } }, [
                        e._v(
                          "I am a full-stack web developer and a mobile developer"
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              i("div", { staticStyle: { height: "75px" } }),
            ],
            1
          );
        }),
      m = [],
      v = i("c594"),
      f = i.n(v),
      h = {
        name: "Home",
        components: { VueAos: f.a },
        props: { msg: String },
        data: () => ({ selectMenu: 0, menu: !1 }),
        methods: {
          toggle(e) {
            this.selectMenu = e;
          },
        },
      },
      g = h,
      b = (i("8f68"), Object(d["a"])(g, p, m, !1, null, "7d192973", null)),
      k = b.exports,
      w = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { attrs: { id: "page" } }, [
          e._m(0),
          r("div", { attrs: { id: "about" } }, [
            r(
              "div",
              { attrs: { id: "row" } },
              [
                r(
                  "transition",
                  { attrs: { name: "slide-home-up", appear: "" } },
                  [
                    r("div", [
                      r("p", { attrs: { id: "text" } }, [
                        e._v(" My name is "),
                        r("b", [e._v("Friday Chukwuamaka Kareen")]),
                        e._v(
                          " I am a mobile developer based in Nigeria. I love to solve problems. Whether it's finding the most elegant way to write a line of code or figuring out which chord fits best into a progression, I love the challenge of finding a way and discovering solutions. As long as there's a problem to solve or a challenge to puzzle over, it's bound to be something I love!. One of my biggest strengths is translating UI/UX design to code you can see the evidence from my projects and this website. "
                        ),
                      ]),
                      r("p", { attrs: { id: "text" } }, [
                        e._v(
                          " Here are a few technologies I've been working with recently: "
                        ),
                      ]),
                      r("ul", { staticClass: "skills-list" }, [
                        r("li", [e._v("Flutter")]),
                        r("li", [e._v("Vue")]),
                        r("li", [e._v("Firebase")]),
                        r("li", [e._v("MongoDB")]),
                        r("li", [e._v("Node.js")]),
                        r("li", [e._v("Arduino")]),
                      ]),
                    ]),
                  ]
                ),
                r("transition", { attrs: { name: "fade3", appear: "" } }, [
                  r("img", {
                    attrs: { id: "image", src: i("b092"), alt: "pix" },
                  }),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      _ = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "title" } }, [
            i("p", [e._v("About")]),
            i("div"),
          ]);
        },
      ],
      A = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      x = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "more-about" } }, [
            i("p", { attrs: { id: "text" } }, [
              e._v(
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet architecto iure praesentium? Velit minus fuga sed ipsum! Ducimus ratione, eum sapiente quas iste iure veniam sunt debitis vel odio ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolor laudantium fugiat ullam accusamus est numquam minima et? Aliquam, recusandae rerum! Praesentium, omnis sit eaque nemo animi neque dolorem tempore. "
              ),
            ]),
          ]);
        },
      ],
      y = { name: "MoreAbout" },
      j = y,
      I = (i("bd4d"), Object(d["a"])(j, A, x, !1, null, "1721430e", null)),
      C = I.exports,
      E = {
        name: "About",
        components: { MoreAbout: C },
        props: { msg: String },
      },
      M = E,
      F = (i("ef6b"), Object(d["a"])(M, w, _, !1, null, "045ea0ba", null)),
      S = F.exports,
      B = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { attrs: { id: "work" } },
          [
            e._m(0),
            r("transition", { attrs: { name: "fade3", appear: "" } }, [
              r("div", { attrs: { id: "projects" } }, [
                r("div", { attrs: { id: "project" } }, [
                  r("div", { attrs: { id: "image" } }),
                  r("img", {
                    attrs: { src: i("f123"), id: "imagex", alt: "" },
                  }),
                  r("div", { attrs: { id: "writings" } }, [
                    r("div", { attrs: { id: "heading" } }, [
                      e._v(" Lorem ipsum dolor sit amet "),
                    ]),
                    r("div", { attrs: { id: "subtitle" } }, [
                      e._v(
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam maiores libero ratione officia! Sit quisquam reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab ullam harum illo optio dolorem? Adipisci. "
                      ),
                    ]),
                    r(
                      "a",
                      { attrs: { href: "/", id: "link" } },
                      [
                        r("p", [e._v("View project")]),
                        r("Chevron-right-icon", { attrs: { size: "1.2x" } }),
                      ],
                      1
                    ),
                  ]),
                ]),
                r("div", { attrs: { id: "project" } }, [
                  r("div", { attrs: { id: "image" } }),
                  r("img", {
                    attrs: { src: i("f123"), id: "imagex", alt: "" },
                  }),
                  r("div", { attrs: { id: "writings" } }, [
                    r("div", { attrs: { id: "heading" } }, [
                      e._v(" Lorem ipsum dolor sit amet "),
                    ]),
                    r("div", { attrs: { id: "subtitle" } }, [
                      e._v(
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam maiores libero ratione officia! Sit quisquam reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab ullam harum illo optio dolorem? Adipisci. "
                      ),
                    ]),
                    r(
                      "a",
                      { attrs: { href: "/", id: "link" } },
                      [
                        r("p", [e._v("View project")]),
                        r("Chevron-right-icon", { attrs: { size: "1.2x" } }),
                      ],
                      1
                    ),
                  ]),
                ]),
                r("div", { attrs: { id: "project" } }, [
                  r("div", { attrs: { id: "image" } }),
                  r("img", {
                    attrs: { src: i("f123"), id: "imagex", alt: "" },
                  }),
                  r("div", { attrs: { id: "writings" } }, [
                    r("div", { attrs: { id: "heading" } }, [
                      e._v(" Lorem ipsum dolor sit amet "),
                    ]),
                    r("div", { attrs: { id: "subtitle" } }, [
                      e._v(
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam maiores libero ratione officia! Sit quisquam reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab ullam harum illo optio dolorem? Adipisci. "
                      ),
                    ]),
                    r(
                      "a",
                      { attrs: { href: "/", id: "link" } },
                      [
                        r("p", [e._v("View project")]),
                        r("Chevron-right-icon", { attrs: { size: "1.2x" } }),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      D = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "title" } }, [
            i("p", [e._v("My projects")]),
            i("div"),
          ]);
        },
      ],
      L = i("0a35"),
      q = {
        name: "Worrk",
        components: { ArrowRightIcon: L["b"], ChevronRightIcon: L["c"] },
      },
      V = q,
      H = (i("3cae"), Object(d["a"])(V, B, D, !1, null, "7c07f791", null)),
      R = H.exports,
      T = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "work" } },
          [
            e._m(0),
            i("transition", { attrs: { name: "fade6", appear: "" } }, [
              i(
                "div",
                { attrs: { id: "projects" } },
                e._l(e.works, function (t, r) {
                  return i("div", { key: r, attrs: { id: "project" } }, [
                    i("img", { attrs: { src: t.img, id: "imagex", alt: "" } }),
                    i("div", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: null != t.img,
                          expression: "work.img != null",
                        },
                      ],
                      style: { "background-image": "url(" + t.img + ")" },
                      attrs: { id: "image" },
                    }),
                    i("div", { attrs: { id: "writings" } }, [
                      i("div", { attrs: { id: "heading" } }, [
                        e._v(" " + e._s(t.title) + " "),
                      ]),
                      i(
                        "div",
                        { attrs: { id: "tools" } },
                        [
                          e._v(" Tools: "),
                          e._l(t.tools, function (t, r) {
                            return i("p", { key: r }, [
                              e._v(" " + e._s(t) + " "),
                            ]);
                          }),
                        ],
                        2
                      ),
                      i("div", { attrs: { id: "subtitle" } }, [
                        e._v(" " + e._s(t.detail) + " "),
                      ]),
                      i("div", { attrs: { id: "links" } }, [
                        i(
                          "a",
                          {
                            attrs: {
                              rel: "noreferrer",
                              target: "_blank",
                              href: t.app_link,
                              id: "link",
                            },
                          },
                          [i("p", [e._v("View project")])]
                        ),
                        i(
                          "a",
                          {
                            attrs: {
                              rel: "noreferrer",
                              target: "_blank",
                              href: t.code_link,
                              id: "link",
                            },
                          },
                          [i("p", [e._v("View code")])]
                        ),
                      ]),
                    ]),
                  ]);
                }),
                0
              ),
            ]),
          ],
          1
        );
      },
      G = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "title" } }, [
            i("p", [e._v("My projects")]),
            i("div"),
          ]);
        },
      ],
      O = {
        name: "Work",
        components: { ArrowRightIcon: L["b"], ChevronRightIcon: L["c"] },
        data: () => ({
          works: [
            {
              title: "Deigit",
              detail:
                "Degeit is a mobile application that helps merchants to generate digital copies of receipt for every transaction made. It is specially made for merchants who sell online (Instagram, Facebook, Twitter, WhatsApp, Telegram. etc.).",
              code_link:
                "https://github.com/fridaychukwuamaka/mobileforce-digital-receipt",
              app_link:
                "https://play.google.com/store/apps/details?id=xyz.degeit",
              img: i("8d79"),
              tools: ["Flutter"],
            },
            {
              title: "Music Player",
              detail:
                "A mobile app built with flutter that is able to plays all the songs on the local storage. User can also create and delete playlist",
              code_link: "https://github.com/fridaychukwuamaka/music_app_v3",
              app_link:
                "https://drive.google.com/file/d/1xTq_1ix-Mry26y7b-jpnkijOEuFBN2wb/view?usp=sharing",
              img: i("0eba"),
              tools: ["Flutter"],
            },
            {
              title: "Nectar Grocery Store",
              detail:
                "This an online Grocery store shopping app. You can create a cart  and save your favoutite items.",
              code_link:
                "https://github.com/fridaychukwuamaka/Flutter-Grocery-App-UI-main",
              app_link:
                "https://drive.google.com/file/d/1-b-ZCmjhCBrXXqoRkO_EZD51OIbXf3Nx/view?usp=sharing",
              img: i("0635"),
              tools: ["Flutter", "Firebase"],
            },
            {
              title: "Smart Irrigation",
              detail:
                "It is a mobile app connected to an embedded system, it allows the user to get information about the farm and can also send commands to the embedded system.",
              code_link:
                "https://github.com/fridaychukwuamaka/smart_irrigation",
              app_link:
                "https://drive.google.com/file/d/18cPcgRh_2-v6IU9M-uzsSccKcpjHgCfS/view?usp=sharing",
              img: i("df4e"),
              tools: ["Flutter", "Firebase", "Arduino"],
            },
            {
              title: "BLE Scanner",
              detail:
                "It is a mobile app built with flutter that can scan low energy devices such as headphone, airpods etc. and also get their distance from the mobile phone",
              code_link: "https://github.com/fridaychukwuamaka/BLE-scanner",
              app_link:
                "https://drive.google.com/file/d/1-wcwSs9IuE2q2l0nwKF0xbmnk5seI_eU/view?usp=sharing",
              img: null,
              tools: ["Flutter"],
            },
            {
              title: "Portfoilo Website",
              detail: "It is a portfolio website I built for myself using Vue",
              code_link: "https://github.com/fridaychukwuamaka/portfolio",
              app_link: "/",
              img: null,
              tools: ["Vue js"],
            },
          ],
        }),
      },
      Z = O,
      W = (i("2cbe"), Object(d["a"])(Z, T, G, !1, null, "a54fa13e", null)),
      z = W.exports,
      P = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { attrs: { id: "contact" } }, [
          e._m(0),
          i("p", { attrs: { id: "contact-text" } }, [
            e._v(
              " You want to talk to me, feel free to email or DM me using the following platforms. "
            ),
          ]),
          i("div", { attrs: { id: "icon-row" } }, [
            i(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://www.linkedin.com/in/fridaychukwuamaka-14622a169",
                  id: "icon",
                },
              },
              [
                i("linkedin-icon", { attrs: { size: "1.5x" } }),
                i("p", [e._v("LinkedIn")]),
              ],
              1
            ),
            i(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://github.com/fridaychukwuamaka",
                  id: "icon",
                },
              },
              [
                i("github-icon", { attrs: { size: "1.5x" } }),
                i("p", [e._v("GitHub")]),
              ],
              1
            ),
            i(
              "form",
              {
                attrs: {
                  action: "mailto:fridaychukwuamaka@gmail.com?subject= message",
                  method: "get",
                  enctype: "text/plain",
                },
              },
              [
                i(
                  "button",
                  { staticClass: "email-icon", attrs: { id: "icon" } },
                  [
                    i("mail-icon", { attrs: { size: "1.5x" } }),
                    i("p", [e._v("Email")]),
                  ],
                  1
                ),
              ]
            ),
          ]),
          e._m(1),
        ]);
      },
      U = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "title" } }, [
            i("p", [e._v("Contact")]),
            i("div"),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { attrs: { id: "footer" } }, [
            e._v("Designed & developed by"),
            i("br"),
            e._v("Chukwuamaka Friday"),
          ]);
        },
      ],
      K = {
        name: "Contact",
        components: {
          LinkedinIcon: L["f"],
          GithubIcon: L["e"],
          TwitterIcon: L["i"],
          MailIcon: L["g"],
        },
      },
      N = K,
      Q = (i("dbab"), Object(d["a"])(N, P, U, !1, null, "547f58c9", null)),
      X = Q.exports,
      Y = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "experience" } },
          [
            i("transition", { attrs: { name: "fade", appear: "" } }, [
              i("div", { attrs: { id: "title" } }, [
                i("p", [e._v("Experience")]),
                i("div"),
              ]),
            ]),
            i("transition", { attrs: { name: "slide1", appear: "" } }, [
              i("div", { attrs: { id: "view" } }, [
                i("div", { attrs: { id: "tab-bar" } }, [
                  i(
                    "button",
                    {
                      class: { unselected: 0 != e.currentIndex },
                      on: {
                        click: function (t) {
                          return e.moveTo(0);
                        },
                      },
                    },
                    [
                      e._v(" Freelance "),
                      i(
                        "transition",
                        { attrs: { name: "fade2" } },
                        [
                          0 == e.currentIndex
                            ? i("chevron-right-icon", {
                                attrs: {
                                  size: "1.2x",
                                  id: "chevron-right-icon",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "button",
                    {
                      class: { unselected: 1 != e.currentIndex },
                      on: {
                        click: function (t) {
                          return e.moveTo(1);
                        },
                      },
                    },
                    [
                      e._v(" HNG Internship "),
                      i(
                        "transition",
                        { attrs: { name: "fade2" } },
                        [
                          1 == e.currentIndex
                            ? i("chevron-right-icon", {
                                attrs: {
                                  size: "1.2x",
                                  id: "chevron-right-icon",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "button",
                    {
                      class: { unselected: 2 != e.currentIndex },
                      on: {
                        click: function (t) {
                          return e.moveTo(2);
                        },
                      },
                    },
                    [
                      e._v(" Bincom Dev centre "),
                      i(
                        "transition",
                        { attrs: { name: "fade2" } },
                        [
                          2 == e.currentIndex
                            ? i("chevron-right-icon", {
                                attrs: {
                                  size: "1.2x",
                                  id: "chevron-right-icon",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                i(
                  "div",
                  { attrs: { id: "tab-view" } },
                  [
                    e._l(e.experience, function (t) {
                      return [
                        i(
                          "transition",
                          { key: t.index, attrs: { name: "slide" } },
                          [
                            e.currentIndex == t.index
                              ? i("div", [
                                  i("p", { attrs: { id: "tab-role" } }, [
                                    e._v(e._s(t.role)),
                                  ]),
                                  i(
                                    "ol",
                                    e._l(t.desc, function (t) {
                                      return i(
                                        "li",
                                        { key: t, attrs: { id: "tab-desc" } },
                                        [e._v(" " + e._s(t) + " ")]
                                      );
                                    }),
                                    0
                                  ),
                                  i("p", { attrs: { id: "tab-period" } }, [
                                    e._v(e._s(t.period)),
                                  ]),
                                ])
                              : e._e(),
                          ]
                        ),
                      ];
                    }),
                  ],
                  2
                ),
              ]),
            ]),
            e._l(e.experience, function (t) {
              return i("div", { key: t.index, attrs: { id: "row" } }, [
                i("div", { attrs: { id: "exprnce" } }, [
                  i("p", { attrs: { id: "place" } }, [
                    e._v(e._s(t.placement) + " - " + e._s(t.role)),
                  ]),
                  i(
                    "ol",
                    e._l(t.desc, function (t) {
                      return i("li", { key: t, attrs: { id: "desc" } }, [
                        e._v(" " + e._s(t) + " "),
                      ]);
                    }),
                    0
                  ),
                  i("p", { attrs: { id: "period" } }, [e._v(e._s(t.period))]),
                ]),
              ]);
            }),
          ],
          2
        );
      },
      J = [],
      $ = {
        name: "Experience",
        components: { ChevronRightIcon: L["c"] },
        data: () => ({
          experience: [
            {
              placement: "Freelance",
              role: "Mobile Developer",
              desc: [
                "Cooperated with the designers to create clean interfaces and\nsimple, intuitive interactions and experiences for mobile and larger devices using Flutter.",
                "Made the flutter web app responsive for mobile phones and tablet devices.",
                "Integrated google maps to a client application",
              ],
              period: "November 2020 - Present",
              index: 0,
            },
            {
              placement: "HNG Internship",
              role: "Mobile Developer",
              desc: [
                "Cooperated with designers to create clean interfaces and\nsimple, intuitive interactions and experiences using Flutter.",
                "Carry out quality assurance tests to discover errors and\noptimize usability",
              ],
              period: "June 2020 - August 2020",
              index: 1,
            },
            {
              placement: "Bincom Dev Centre",
              role: "Frontend Developer",
              desc: [
                "Worked as a frontend web\ndeveloper, contributed to a Bincom product Social Lender using Angular and Ionic framework.",
                "Integrated repayent option on Social lender: Paytack and Flutterwave",
                "Managed social lender mobile app on playstore.",
                "Carry out quality assurance tests to discover errors and\noptimize usability",
              ],
              period: "June 2019 - November 2019",
              index: 2,
            },
          ],
          currentIndex: 0,
        }),
        methods: {
          moveTo(e) {
            this.currentIndex = e;
          },
        },
      },
      ee = $,
      te = (i("c4e8"), Object(d["a"])(ee, Y, J, !1, null, "6bf83cb0", null)),
      ie = te.exports,
      re = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { attrs: { id: "header" } },
          [
            r(
              "div",
              { staticClass: "heading" },
              [
                r("img", {
                  attrs: { id: "logo", alt: "logo", src: i("0ea8") },
                }),
                r("menu-icon", {
                  attrs: { id: "menu-icon" },
                  on: {
                    click: function (t) {
                      e.menu = !e.menu;
                    },
                  },
                }),
              ],
              1
            ),
            r(
              "transition",
              { attrs: { name: "drawer-open", animation: "transition" } },
              [
                r(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.menu,
                        expression: "menu",
                      },
                    ],
                    attrs: { id: "menu-open" },
                  },
                  [
                    r("div", {
                      attrs: { id: "shadowed" },
                      on: {
                        click: function (t) {
                          e.menu = !e.menu;
                        },
                      },
                    }),
                    r(
                      "div",
                      { attrs: { id: "none-shadow" } },
                      [
                        r("arrow-left-icon", {
                          attrs: { id: "back" },
                          on: {
                            click: function (t) {
                              e.menu = !e.menu;
                            },
                          },
                        }),
                        r("ul", [
                          r("a", { attrs: { href: "#mobile" } }, [
                            r(
                              "li",
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggle(0);
                                  },
                                },
                              },
                              [
                                r("a", [e._v("Home")]),
                                r("div", {
                                  class: { selected: 0 == e.selectMenu },
                                }),
                              ]
                            ),
                          ]),
                          r("a", { attrs: { href: "#page" } }, [
                            r(
                              "li",
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggle(1);
                                  },
                                },
                              },
                              [
                                r("a", [e._v("About")]),
                                r("div", {
                                  class: { selected: 1 == e.selectMenu },
                                }),
                              ]
                            ),
                          ]),
                          r("a", { attrs: { href: "#work" } }, [
                            r(
                              "li",
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggle(2);
                                  },
                                },
                              },
                              [
                                r("a", [e._v("My projects")]),
                                r("div", {
                                  class: { selected: 2 == e.selectMenu },
                                }),
                              ]
                            ),
                          ]),
                          r("a", { attrs: { href: "#experience" } }, [
                            r(
                              "li",
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggle(3);
                                  },
                                },
                              },
                              [
                                r("a", [e._v("Experience")]),
                                r("div", {
                                  class: { selected: 3 == e.selectMenu },
                                }),
                              ]
                            ),
                          ]),
                          r("a", { attrs: { href: "#contact" } }, [
                            r(
                              "li",
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggle(4);
                                  },
                                },
                              },
                              [
                                r("a", [e._v("Contact")]),
                                r("div", {
                                  class: { selected: 4 == e.selectMenu },
                                }),
                              ]
                            ),
                          ]),
                          r("li", { attrs: { id: "download" } }, [
                            r(
                              "a",
                              {
                                attrs: {
                                  target: "_blank",
                                  href: "https://drive.google.com/file/d/1lsF7Tgzr5PwY-rACSrYrzfxj7B0_Wq4y/view?usp=sharing",
                                  download: "",
                                },
                              },
                              [e._v("Resume")]
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      ne = [],
      ae = {
        name: "Header",
        components: { MenuIcon: L["h"], ArrowLeftIcon: L["a"] },
        data: () => ({ selectMenu: 0, menu: !1 }),
        methods: {
          toggle(e) {
            this.selectMenu = e;
          },
        },
      },
      oe = ae,
      se = (i("c319"), Object(d["a"])(oe, re, ne, !1, null, "2501a8b3", null)),
      ce = se.exports,
      le = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      de = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { attrs: { id: "splash-screen" } }, [
            r("img", { attrs: { id: "logo", alt: "logo", src: i("0ea8") } }),
            r("p", { attrs: { id: "signature" } }, [e._v("amaka")]),
          ]);
        },
      ],
      ue = { name: "SplashScreen" },
      pe = ue,
      me = (i("4bdc"), Object(d["a"])(pe, le, de, !1, null, "2ffbae16", null)),
      ve = me.exports,
      fe = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { attrs: { id: "side-bar-column" } }, [
          i(
            "a",
            {
              attrs: {
                target: "_blank",
                href: "https://www.linkedin.com/in/fridaychukwuamaka-14622a169",
                id: "icon",
              },
            },
            [i("linkedin-icon", { attrs: { size: "1.2x" } })],
            1
          ),
          i(
            "a",
            {
              attrs: {
                target: "_blank",
                href: "https://github.com/fridaychukwuamaka",
                id: "icon",
              },
            },
            [i("github-icon", { attrs: { size: "1.2x" } })],
            1
          ),
          i(
            "form",
            {
              attrs: {
                action: "mailto:fridaychukwuamaka@gmail.com?subject= message",
                method: "get",
                enctype: "text/plain",
              },
            },
            [
              i(
                "button",
                {
                  staticClass: "email-icon",
                  staticStyle: { cursor: "pointer" },
                  attrs: { id: "icon" },
                },
                [i("mail-icon", { attrs: { size: "1.2x" } })],
                1
              ),
            ]
          ),
        ]);
      },
      he = [],
      ge = {
        name: "SideBar",
        components: {
          LinkedinIcon: L["f"],
          GithubIcon: L["e"],
          TwitterIcon: L["i"],
          MailIcon: L["g"],
        },
      },
      be = ge,
      ke = (i("d2bd"), Object(d["a"])(be, fe, he, !1, null, "6d790bd3", null)),
      we = ke.exports,
      _e = {
        name: "App",
        components: {
          Header: ce,
          SplashScreen: ve,
          SideBar: we,
          Home: k,
          About: S,
          MoreAbout: C,
          Work: z,
          Worrk: R,
          Experience: ie,
          ChevronUpIcon: L["d"],
          Contact: X,
        },
        data: () => ({
          splashScreen: !1,
          windowWidth: window.screen.availWidth,
          currentRoute: window.location.pathname,
          link: 0,
        }),
        methods: {
          activeLink(e) {
            this.link = e;
          },
        },
        beforeUpdate: function () {
          this.currentRoute = window.location.pathname;
        },
        beforeCreate: function () {
          (this.splashScreen = !1),
            setTimeout(() => {
              this.splashScreen = !0;
            }, 1500);
        },
      },
      Ae = _e,
      xe = (i("034f"), Object(d["a"])(Ae, n, a, !1, null, null, null)),
      ye = xe.exports,
      je = i("8c4f");
    const Ie = [
      { path: "/", component: k },
      { path: "/about", component: S },
      { path: "/work", component: z },
      { path: "/worrk", component: R },
      { path: "/experience", component: ie },
      { path: "*", redirect: "/" },
    ];
    (r["a"].config.productionTip = !1), r["a"].use(je["a"]);
    const Ce = new je["a"]({ mode: "history", routes: Ie });
    new r["a"]({
      router: Ce,
      render: function (e) {
        return e(ye);
      },
    }).$mount("#app");
  },
  "5e13": function (e, t, i) {},
  "5fbd": function (e, t, i) {},
  "6d6b": function (e, t, i) {},
  "85ec": function (e, t, i) {},
  "8d79": function (e, t, i) {
    e.exports = i.p + "img/PROMO.3d59442f.jpg";
  },
  "8f68": function (e, t, i) {
    "use strict";
    i("b410");
  },
  "9a84": function (e, t, i) {
    "use strict";
    i("5fbd");
  },
  b092: function (e, t, i) {
    e.exports = i.p + "img/IMG_20200810_170143564~3.730e3363.png";
  },
  b410: function (e, t, i) {},
  b798: function (e, t, i) {},
  bd4d: function (e, t, i) {
    "use strict";
    i("d85c");
  },
  c319: function (e, t, i) {
    "use strict";
    i("52e9");
  },
  c4e8: function (e, t, i) {
    "use strict";
    i("180f");
  },
  d2bd: function (e, t, i) {
    "use strict";
    i("e917");
  },
  d85c: function (e, t, i) {},
  dbab: function (e, t, i) {
    "use strict";
    i("f3d9");
  },
  df4e: function (e, t, i) {
    e.exports = i.p + "img/irrigation.6dc331c4.png";
  },
  e917: function (e, t, i) {},
  ef6b: function (e, t, i) {
    "use strict";
    i("6d6b");
  },
  f123: function (e, t, i) {
    e.exports = i.p + "img/michael-dam-mEZ3PoFGs_k-unsplash.4c5dff7b.jpg";
  },
  f3d9: function (e, t, i) {},
});
//# sourceMappingURL=app.34094df4.js.map
