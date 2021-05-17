"use strict";

var accordions = document.querySelectorAll('.faq__accordion');
accordions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var self = e.currentTarget;
    var control = self.querySelector('.accordion__header');
    var content = self.querySelector('.accordion__res');
    self.classList.toggle('open'); // если открыт аккордеон

    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});
"use strict";

var rangeSlider = document.querySelector("#range-slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    range: {
      'min': 500,
      'max': 99999
    },
    step: 1,
    // Handles start at ...
    start: [500, 99999],
    // Display colored bars between handles
    connect: true
  });
}

var input0 = document.querySelector("#input-0");
var input1 = document.querySelector("#input-1");
var inputs = [input0, input1];
rangeSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});

var setRangeSlider = function setRangeSlider(i, value) {
  var arr = [null, null];
  arr[i] = value;
  rangeSlider.noUiSlider.set(arr);
};

inputs.forEach(function (el, index) {
  el.addEventListener('change', function (e) {
    setRangeSlider(index, e.currentTarget.value);
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var quizData = [{
  number: 1,
  title: "Какой тип кроссовок рассматриваете?",
  answer_alias: "type",
  answers: [{
    answer_title: "Мокасины",
    type: "checkbox"
  }, {
    answer_title: "Топсайдеры",
    type: "checkbox"
  }, {
    answer_title: "Челси",
    type: "checkbox"
  }, {
    answer_title: "Чакка",
    type: "checkbox"
  }, {
    answer_title: "Лоферы",
    type: "checkbox"
  }, {
    answer_title: "Монки",
    type: "checkbox"
  }]
}, {
  number: 2,
  title: "Какой размер обуви вас интересует",
  answer_alias: "size",
  answers: [{
    answer_title: "менее 36",
    type: "radio"
  }, {
    answer_title: "36-38",
    type: "radio"
  }, {
    answer_title: "39-41",
    type: "radio"
  }, {
    answer_title: "42-44",
    type: "radio"
  }, {
    answer_title: "45 и больше",
    type: "radio"
  }]
}, {
  number: 3,
  title: "Уточните какие-либо моменты",
  answer_alias: "message",
  answers: [{
    answer_title: "Введите сообщение",
    type: "textarea"
  }]
}];

var quizTemplate = function quizTemplate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var dataLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var number = data.number,
      title = data.title;
  var nextBtnText = options.nextBtnText;
  var answers = data.answers.map(function (item) {
    // console.log(item);
    if (item.type === 'checkbox') {
      return "\n          <li class=\"quiz-question__item\">\n              <label class=\"custom-checkbox quiz-question__label quiz-label\">\n                  <img src=\"img/sneaker.jpg\" alt=\"product image\">\n                  <div class=\"quiz-label__bottom\">\n          <input type=\"".concat(item.type, "\" data-valid=\"false\" class=\"quiz-question__answer custom-checkbox__field\" name=\"").concat(data.answer_alias, "\" ").concat(item.type == "text" ? 'placeholder="Введите ваш вариант"' : "", " value=\"").concat(item.type !== "text" ? item.answer_title : "", "\">\n          <span class=\"custom-checkbox__text\">").concat(item.answer_title, "</span>\n                  </div>\n        </label>\n          </li>\n      ");
    } else if (item.type === "radio") {
      return "\n      <div class=\"quiz-question__label-wrap\">\n        <label class=\"quiz-question__label\">\n         <input class=\"quiz-qustion__radio custom-radio__field\" type=\"".concat(item.type, "\" id=\"quizRadio\">\n         <span>").concat(item.answer_title, "</span>\n        </label>\n      </div>\n      ");
    } else if (item.answer_title == "Введите сообщение") {
      return "\n        <label class=\"quiz-question__label\">\n          <textarea placeholder=\"".concat(item.answer_title, "\" type=\"").concat(item.type, "\" data-valid=\"false\" class=\"quiz-question__textarea\" name=\"").concat(data.answer_alias, "\" ").concat(item.type == "textarea" ? 'placeholder="Введите ваш вариант"' : "", " value=\"").concat(item.type !== "text" ? item.answer_title : "", "\">\n          <span>").concat(item.answer_title, "</span>\n        </label>\n      ");
    } else {
      return "\n        <label class=\"quiz-question__label\">\n          <input type=\"".concat(item.type, "\" data-valid=\"false\" class=\"quiz-question__answer\" name=\"").concat(data.answer_alias, "\" ").concat(item.type == "text" ? 'placeholder="Введите ваш вариант"' : "", " value=\"").concat(item.type !== "text" ? item.answer_title : "", "\">\n          <span>").concat(item.answer_title, "</span>\n        </label>\n      ");
    }
  });
  return "\n    <div class=\"quiz-question\">\n      <h3 class=\"quiz-question__title\">".concat(title, "</h3>\n      <ul class=\"quiz-question__answers list-reset grid\">\n        ").concat(answers.join(""), "\n      </ul>\n              <div class=\"quiz__bottom\">\n            <div class=\"quiz-question__count\">").concat(number, " \u0438\u0437 ").concat(dataLength, "</div>\n          <button type=\"button\" class=\"quiz-question__btn btn btn-reset btn--transparent-border\" data-next-btn>").concat(nextBtnText, "</button>\n              </div>\n    </div>\n\t");
};

var Quiz = /*#__PURE__*/function () {
  function Quiz(selector, data, options) {
    _classCallCheck(this, Quiz);

    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0;
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.tmp = {};
    this.init();
    this.events();
  }

  _createClass(Quiz, [{
    key: "init",
    value: function init() {
      // console.log("init!");
      this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion() {
      // console.log("next question!");
      var quizLast = document.querySelector('.quiz-form__last');

      if (this.valid()) {
        if (this.counter + 1 < this.dataLength) {
          this.counter++;
          this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);

          if (this.counter + 1 == this.dataLength) {// this.$el.insertAdjacentHTML(
            //   "beforeend",
            //   `<button class="btn btn-reset btn--primary" type="button" data-send>${this.options.sendBtnText}</button>`
            // );
            // this.$el.querySelector("[data-next-btn]").remove();
          }
        } else {
          document.querySelector('.quiz-form__questions').style.display = "none";
          document.querySelector('.quiz-form__last').style.display = "block"; // console.log("А все! конец!");
        }
      } else {
        console.log("Не валидно!");
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      // console.log("events!");
      this.$el.addEventListener("click", function (e) {
        if (e.target == document.querySelector("[data-next-btn]")) {
          _this.addToSend();

          _this.nextQuestion();
        }

        if (e.target == document.querySelector("[data-send]")) {
          _this.send();
        }
      });
      this.$el.addEventListener("change", function (e) {
        if (e.target.tagName == "INPUT") {
          if (e.target.type !== "checkbox" && e.target.type !== "radio") {
            var elements = _this.$el.querySelectorAll("input");

            elements.forEach(function (el) {
              el.checked = false;
            });
          }

          _this.tmp = _this.serialize(_this.$el);
        }
      });
    }
  }, {
    key: "valid",
    value: function valid() {
      var textarea = this.$el.querySelector('textarea');

      if (textarea && textarea.value.length > 5) {
        isValid = true;
        return isValid;
      }

      var isValid = false;
      var elements = this.$el.querySelectorAll("input");
      elements.forEach(function (el) {
        switch (el.nodeName) {
          case "INPUT":
            switch (el.type) {
              case "text":
                if (el.value) {
                  isValid = true;
                } else {
                  el.classList.add("error");
                }

              case "checkbox":
                if (el.checked) {
                  isValid = true;
                } else {
                  el.classList.add("error");
                }

              case "radio":
                if (el.checked) {
                  isValid = true;
                } else {
                  el.classList.add("error");
                }

            }

        }
      });
      return isValid;
    }
  }, {
    key: "addToSend",
    value: function addToSend() {
      this.resultArray.push(this.tmp);
    }
  }, {
    key: "send",
    value: function send() {
      if (this.valid()) {
        var formData = new FormData();

        var _iterator = _createForOfIteratorHelper(this.resultArray),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            for (var obj in item) {
              formData.append(obj, item[obj].substring(0, item[obj].length - 1));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var response = fetch("mail.php", {
          method: "POST",
          body: formData
        });
      }
    }
  }, {
    key: "serialize",
    value: function serialize(form) {
      var field,
          s = {};
      var valueString = "";

      if (_typeof(form) == "object" && form.nodeName == "FORM") {
        var len = form.elements.length;

        for (var i = 0; i < len; i++) {
          field = form.elements[i];

          if (field.name && !field.disabled && field.type != "file" && field.type != "reset" && field.type != "submit" && field.type != "button") {
            if (field.type == "select-multiple") {
              for (j = form.elements[i].options.length - 1; j >= 0; j--) {
                if (field.options[j].selected) s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
              }
            } else if (field.type != "checkbox" && field.type != "radio" && field.value || field.checked) {
              valueString += field.value + ",";
              s[field.name] = valueString;
            }
          }
        }
      }

      return s;
    }
  }]);

  return Quiz;
}();

window.quiz = new Quiz(".quiz-form .quiz-questions", quizData, {
  nextBtnText: "Следующий шаг",
  sendBtnText: "Получить"
});
"use strict";

var myMap; // Дождёмся загрузки API и готовности DOM.

ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map("map", {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [55.76, 37.64],
    // Москва
    zoom: 10
  }, {
    searchControlProvider: "yandex#search"
  }); //   document.getElementById("destroyButton").onclick = function () {
  //     // Для уничтожения используется метод destroy.
  //     myMap.destroy();
  //   };
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
// let accordionHeader = document.querySelectorAll(".accordion-header");
// let accordion = document.querySelector(".accordion-js");
// let accordionRes = document.querySelector(".accordion__res");
// accordion.addEventListener("click", function() {
//   accordion.classList.toggle("accordion--active");
// });
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var body = document.querySelector("body");
var cartBtn = document.querySelector('#cart-btn');
var cartModal = document.querySelector(".cart-modal");
var formalizationModalOverlay = document.querySelector("#modal-formalization-overlay");
var formalizationModalBtn = document.querySelector("#move-to-cart");
var modalProductOverlay = document.querySelector("#modal-product-overlay");
var productCardBtn = document.querySelectorAll(".move-to-product-card");
var burgerMenu = document.querySelector("#burger-menu");
/* ======================================== */

cartBtn.addEventListener("click", function () {
  cart.classList.toggle("active"); // body.classList.toggle("overflow-hidden");
});
document.addEventListener("click", function (e) {
  var target = e.target;

  if (!target.closest("#cart")) {
    cart.classList.remove("active"); // body.classList.remove("overflow-hidden");
  }
});
/* ========================================= */

/* ======================================== */

formalizationModalBtn.addEventListener("click", function () {
  formalizationModalOverlay.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});
document.addEventListener("click", function (e) {
  var target = e.target;

  if (target === formalizationModalOverlay) {
    formalizationModalOverlay.classList.remove("active");
    body.classList.remove("overflow-hidden");
  }
});
/* ======================================== */

/* ======================================== */

productCardBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    modalProductOverlay.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
});
document.addEventListener("click", function (e) {
  var target = e.target;

  if (target === modalProductOverlay) {
    modalProductOverlay.classList.remove("active");
    body.classList.remove("overflow-hidden");
  }
});
/* ======================================== */

/* ======================================== */

burgerMenu.addEventListener("click", function () {
  if (burgerMenu.classList.contains("open")) {
    body.classList.remove("overflow-hidden");
    burgerMenu.classList.remove("open");
  } else {
    burgerMenu.classList.toggle("open");
    body.classList.add("overflow-hidden");
  }
}); // modal close btn

var modalClose = document.querySelectorAll(".modal-close-btn");
modalClose.forEach(function (el) {
  el.addEventListener("click", function () {
    el.closest(".modal").classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
});
var modalCloseNavLink = document.querySelectorAll(".modal-close-js");
modalCloseNavLink.forEach(function (el) {
  el.addEventListener("click", function () {
    burgerMenu.classList.remove("open");
    body.classList.remove("overflow-hidden");
  });
});
//# sourceMappingURL=main.js.map
