"use strict";
var accordions = document.querySelectorAll(".faq-accordion");
function _createForOfIteratorHelper(e, t) {
  var n;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var e = n.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (l = !0), (o = e);
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
accordions.forEach(function (e) {
  e.addEventListener("click", function (e) {
    var t = e.currentTarget,
      n = t.querySelector(".faq-accordion__control"),
      r = t.querySelector(".faq-accordion__content");
    t.classList.toggle("open"),
      t.classList.contains("open")
        ? (n.setAttribute("aria-expanded", !0),
          r.setAttribute("aria-hidden", !1),
          (r.style.maxHeight = r.scrollHeight + "px"))
        : (n.setAttribute("aria-expanded", !1),
          r.setAttribute("aria-hidden", !0),
          (r.style.maxHeight = null));
  });
});
var insta = document.querySelector(".instagram__content");
function init() {
  new ymaps.Map("map", { center: [55.76, 37.64], zoom: 7 });
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _createForOfIteratorHelper(e, t) {
  var n;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var e = n.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (l = !0), (o = e);
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
new InstagramFeed({
  username: "max.denaro",
  display_profile: !1,
  display_biography: !1,
  display_gallery: !0,
  display_captions: !0,
  callback: function (e) {
    var t,
      n = e.edge_owner_to_timeline_media.edges.slice(0, 5),
      r = _createForOfIteratorHelper(n);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var a = t.value;
        console.log(a.node);
        var o = a.node;
        insta.insertAdjacentHTML(
          "afterbegin",
          '\n          <article class="instagram__item">\n            <a href="https://www.instagram.com/p/'
            .concat(
              o.shortcode,
              '/" target="_blank">\n              <img src="'
            )
            .concat(o.thumbnail_src, '"\n                alt="')
            .concat(
              o.accessibility_caption,
              '">\n            </a>\n          </article>\n        '
            )
        );
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
  },
  styling: !1,
}),
  ymaps.ready(init);
var quizData = [
    {
      number: 1,
      title:
        "РљР°РєРѕР№ С‚РёРї РєСЂРѕСЃСЃРѕРІРѕРє СЂР°СЃСЃРјР°С‚СЂРёРІР°РµС‚Рµ?",
      answer_alias: "type",
      answers: [
        { answer_title: "РєРµРґС‹", type: "checkbox" },
        { answer_title: "РєРµРґС‹", type: "checkbox" },
        { answer_title: "РєРµРґС‹", type: "checkbox" },
        { answer_title: "РєРµРґС‹", type: "checkbox" },
        { answer_title: "РєРµРґС‹", type: "checkbox" },
      ],
    },
    {
      number: 2,
      title: "РљР°РєРѕР№ СЂР°Р·РјРµСЂ РІР°Рј РїРѕРґРѕР№РґРµС‚?",
      answer_alias: "size",
      answers: [
        { answer_title: "РњРµРЅРµРµ 36", type: "checkbox" },
        { answer_title: "36-38", type: "checkbox" },
        { answer_title: "39-41", type: "checkbox" },
        { answer_title: "42-44", type: "checkbox" },
        { answer_title: "45 Рё Р±РѕР»СЊС€Рµ", type: "checkbox" },
      ],
    },
    {
      number: 3,
      title: "РЈС‚РѕС‡РЅРёС‚Рµ РєР°РєРёРµ-Р»РёР±Рѕ РјРѕРјРµРЅС‚С‹",
      answer_alias: "message",
      answers: [
        { answer_title: "Р’РІРµРґРёС‚Рµ СЃРѕРѕР±С‰РµРЅРёРµ", type: "textarea" },
      ],
    },
  ],
  quizTemplate = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = e.number,
      a = e.title,
      o = n.nextBtnText,
      i = e.answers.map(function (t) {
        return "checkbox" === t.type
          ? '\n        <li class="quiz-question__item">\n          <img src="img/sneaker.jpg" alt="">\n          <label class="custom-checkbox quiz-question__label">\n            <input type="'
              .concat(
                t.type,
                '" class="custom-checkbox__field quiz-question__answer" data-valid="false" name="'
              )
              .concat(e.answer_alias, '" ')
              .concat(
                "text" == t.type
                  ? 'placeholder="Р’РІРµРґРёС‚Рµ РІР°С€ РІР°СЂРёР°РЅС‚"'
                  : "",
                ' value="'
              )
              .concat(
                "text" !== t.type ? t.answer_title : "",
                '">\n            <span class="custom-checkbox__content">'
              )
              .concat(
                t.answer_title,
                "</span>\n          </label>\n        </li>\n      "
              )
          : "textarea" === t.type
          ? '\n        <label class="quiz-question__label">\n          <textarea placeholder="'.concat(
              t.answer_title,
              '" class="quiz-question__message"></textarea>\n        </label>\n      '
            )
          : '\n        <label class="quiz-question__label">\n          <input type="'
              .concat(
                t.type,
                '" data-valid="false" class="quiz-question__answer" name="'
              )
              .concat(e.answer_alias, '" ')
              .concat(
                "text" == t.type
                  ? 'placeholder="Р’РІРµРґРёС‚Рµ РІР°С€ РІР°СЂРёР°РЅС‚"'
                  : "",
                ' value="'
              )
              .concat(
                "text" !== t.type ? t.answer_title : "",
                '">\n          <span>'
              )
              .concat(t.answer_title, "</span>\n        </label>\n      ");
      });
    return '\n    <div class="quiz-question">\n      <h3 class="quiz-question__title">'
      .concat(
        a,
        '</h3>\n      <ul class="quiz-question__answers list-reset">\n        '
      )
      .concat(
        i.join(""),
        '\n      </ul>\n      <div class="quiz-bottom">\n        <div class="quiz-question__count">'
      )
      .concat(r, " РёР· ")
      .concat(
        t,
        '</div>\n        <button type="button" class="btn btn-reset btn--thirdly quiz-question__btn" data-next-btn>'
      )
      .concat(o, "</button>\n      </div>\n    </div>\n\t");
  },
  Quiz = (function () {
    function e(t, n, r) {
      _classCallCheck(this, e),
        (this.$el = document.querySelector(t)),
        (this.options = r),
        (this.data = n),
        (this.counter = 0),
        (this.dataLength = this.data.length),
        (this.resultArray = []),
        (this.tmp = {}),
        this.init(),
        this.events();
    }
    return (
      _createClass(e, [
        {
          key: "init",
          value: function () {
            console.log("init!"),
              (this.$el.innerHTML = quizTemplate(
                this.data[this.counter],
                this.dataLength,
                this.options
              ));
          },
        },
        {
          key: "nextQuestion",
          value: function () {
            console.log("next question!"),
              this.valid()
                ? this.counter + 1 < this.dataLength
                  ? (this.counter++,
                    (this.$el.innerHTML = quizTemplate(
                      this.data[this.counter],
                      this.dataLength,
                      this.options
                    )),
                    this.counter,
                    this.dataLength)
                  : (console.log("Рђ РІСЃРµ! РєРѕРЅРµС†!"),
                    (document.querySelector(".quiz-questions").style.display =
                      "none"),
                    (document.querySelector(".asd").style.display = "block"))
                : console.log("РќРµ РІР°Р»РёРґРЅРѕ!");
          },
        },
        {
          key: "events",
          value: function () {
            var e = this;
            console.log("events!"),
              this.$el.addEventListener("click", function (t) {
                t.target == document.querySelector("[data-next-btn]") &&
                  (e.addToSend(), e.nextQuestion()),
                  t.target == document.querySelector("[data-send]") && e.send();
              }),
              this.$el.addEventListener("change", function (t) {
                if ("INPUT" == t.target.tagName) {
                  if ("checkbox" !== t.target.type && "radio" !== t.target.type)
                    e.$el.querySelectorAll("input").forEach(function (e) {
                      e.checked = !1;
                    });
                  e.tmp = e.serialize(e.$el);
                }
              });
          },
        },
        {
          key: "valid",
          value: function () {
            var e = !1,
              t = this.$el.querySelector("textarea");
            return t && t.value.length > 0
              ? (e = !0)
              : (this.$el.querySelectorAll("input").forEach(function (t) {
                  switch (t.nodeName) {
                    case "INPUT":
                      switch (t.type) {
                        case "text":
                          t.value ? (e = !0) : t.classList.add("error");
                        case "checkbox":
                          t.checked ? (e = !0) : t.classList.add("error");
                        case "radio":
                          t.checked ? (e = !0) : t.classList.add("error");
                      }
                  }
                }),
                e);
          },
        },
        {
          key: "addToSend",
          value: function () {
            this.resultArray.push(this.tmp);
          },
        },
        {
          key: "send",
          value: function () {
            if (this.valid()) {
              var e,
                t = new FormData(),
                n = _createForOfIteratorHelper(this.resultArray);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  for (var a in r)
                    t.append(a, r[a].substring(0, r[a].length - 1));
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
              fetch("mail.php", { method: "POST", body: t });
            }
          },
        },
        {
          key: "serialize",
          value: function (e) {
            var t,
              n = {},
              r = "";
            if ("object" == _typeof(e) && "FORM" == e.nodeName)
              for (var a = e.elements.length, o = 0; o < a; o++)
                if (
                  (t = e.elements[o]).name &&
                  !t.disabled &&
                  "file" != t.type &&
                  "reset" != t.type &&
                  "submit" != t.type &&
                  "button" != t.type
                )
                  if ("select-multiple" == t.type)
                    for (j = e.elements[o].options.length - 1; j >= 0; j--)
                      t.options[j].selected &&
                        (n[n.length] =
                          encodeURIComponent(t.name) +
                          "=" +
                          encodeURIComponent(t.options[j].value));
                  else
                    (("checkbox" != t.type && "radio" != t.type && t.value) ||
                      t.checked) &&
                      ((r += t.value + ","), (n[t.name] = r));
            return n;
          },
        },
      ]),
      e
    );
  })();
window.quiz = new Quiz(".quiz-form .quiz-questions", quizData, {
  nextBtnText: "РЎР»РµРґСѓСЋС‰РёР№ С€Р°Рі",
  sendBtnText: "РћС‚РїСЂР°РІРёС‚СЊ",
});
var rangeSlider = document.getElementById("range-slider");
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: !0,
    step: 1,
    range: { min: [500], max: [999999] },
  });
  var input0 = document.getElementById("input-0"),
    input1 = document.getElementById("input-1"),
    inputs = [input0, input1];
  rangeSlider.noUiSlider.on("update", function (e, t) {
    inputs[t].value = Math.round(e[t]);
  });
  var setRangeSlider = function (e, t) {
    var n = [null, null];
    (n[e] = t), rangeSlider.noUiSlider.set(n);
  };
  inputs.forEach(function (e, t) {
    e.addEventListener("change", function (e) {
      setRangeSlider(t, e.currentTarget.value);
    });
  });
}
