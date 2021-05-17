"use strict";var accordions=document.querySelectorAll(".faq__accordion");accordions.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget,n=t.querySelector(".accordion__header"),r=t.querySelector(".accordion__res");t.classList.toggle("open"),t.classList.contains("open")?(n.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1),r.style.maxHeight=r.scrollHeight+"px"):(n.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0),r.style.maxHeight=null)}))}));var rangeSlider=document.querySelector("#range-slider");rangeSlider&&noUiSlider.create(rangeSlider,{range:{min:500,max:99999},step:1,start:[500,99999],connect:!0});var input0=document.querySelector("#input-0"),input1=document.querySelector("#input-1"),inputs=[input0,input1];rangeSlider.noUiSlider.on("update",(function(e,t){inputs[t].value=Math.round(e[t])}));var setRangeSlider=function(e,t){var n=[null,null];n[e]=t,rangeSlider.noUiSlider.set(n)};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}inputs.forEach((function(e,t){e.addEventListener("change",(function(e){setRangeSlider(t,e.currentTarget.value)}))}));var myMap,quizData=[{number:1,title:"Какой тип кроссовок рассматриваете?",answer_alias:"type",answers:[{answer_title:"Мокасины",type:"checkbox"},{answer_title:"Топсайдеры",type:"checkbox"},{answer_title:"Челси",type:"checkbox"},{answer_title:"Чакка",type:"checkbox"},{answer_title:"Лоферы",type:"checkbox"},{answer_title:"Монки",type:"checkbox"}]},{number:2,title:"Какой размер обуви вас интересует",answer_alias:"size",answers:[{answer_title:"менее 36",type:"radio"},{answer_title:"36-38",type:"radio"},{answer_title:"39-41",type:"radio"},{answer_title:"42-44",type:"radio"},{answer_title:"45 и больше",type:"radio"}]},{number:3,title:"Уточните какие-либо моменты",answer_alias:"message",answers:[{answer_title:"Введите сообщение",type:"textarea"}]}],quizTemplate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=e.number,a=e.title,o=n.nextBtnText,i=e.answers.map((function(t){return"checkbox"===t.type?'\n          <li class="quiz-question__item">\n              <label class="custom-checkbox quiz-question__label quiz-label">\n                  <img src="img/sneaker.jpg" alt="product image">\n                  <div class="quiz-label__bottom">\n          <input type="'.concat(t.type,'" data-valid="false" class="quiz-question__answer custom-checkbox__field" name="').concat(e.answer_alias,'" ').concat("text"==t.type?'placeholder="Введите ваш вариант"':"",' value="').concat("text"!==t.type?t.answer_title:"",'">\n          <span class="custom-checkbox__text">').concat(t.answer_title,"</span>\n                  </div>\n        </label>\n          </li>\n      "):"radio"===t.type?'\n      <div class="quiz-question__label-wrap">\n        <label class="quiz-question__label">\n         <input class="quiz-qustion__radio custom-radio__field" type="'.concat(t.type,'" id="quizRadio">\n         <span>').concat(t.answer_title,"</span>\n        </label>\n      </div>\n      "):"Введите сообщение"==t.answer_title?'\n        <label class="quiz-question__label">\n          <textarea placeholder="'.concat(t.answer_title,'" type="').concat(t.type,'" data-valid="false" class="quiz-question__textarea" name="').concat(e.answer_alias,'" ').concat("textarea"==t.type?'placeholder="Введите ваш вариант"':"",' value="').concat("text"!==t.type?t.answer_title:"",'">\n          <span>').concat(t.answer_title,"</span>\n        </label>\n      "):'\n        <label class="quiz-question__label">\n          <input type="'.concat(t.type,'" data-valid="false" class="quiz-question__answer" name="').concat(e.answer_alias,'" ').concat("text"==t.type?'placeholder="Введите ваш вариант"':"",' value="').concat("text"!==t.type?t.answer_title:"",'">\n          <span>').concat(t.answer_title,"</span>\n        </label>\n      ")}));return'\n    <div class="quiz-question">\n      <h3 class="quiz-question__title">'.concat(a,'</h3>\n      <ul class="quiz-question__answers list-reset grid">\n        ').concat(i.join(""),'\n      </ul>\n              <div class="quiz__bottom">\n            <div class="quiz-question__count">').concat(r," из ").concat(t,'</div>\n          <button type="button" class="quiz-question__btn btn btn-reset btn--transparent-border" data-next-btn>').concat(o,"</button>\n              </div>\n    </div>\n\t")},Quiz=function(){function e(t,n,r){_classCallCheck(this,e),this.$el=document.querySelector(t),this.options=r,this.data=n,this.counter=0,this.dataLength=this.data.length,this.resultArray=[],this.tmp={},this.init(),this.events()}return _createClass(e,[{key:"init",value:function(){this.$el.innerHTML=quizTemplate(this.data[this.counter],this.dataLength,this.options)}},{key:"nextQuestion",value:function(){document.querySelector(".quiz-form__last");this.valid()?this.counter+1<this.dataLength?(this.counter++,this.$el.innerHTML=quizTemplate(this.data[this.counter],this.dataLength,this.options),this.counter,this.dataLength):(document.querySelector(".quiz-form__questions").style.display="none",document.querySelector(".quiz-form__last").style.display="block"):console.log("Не валидно!")}},{key:"events",value:function(){var e=this;this.$el.addEventListener("click",(function(t){t.target==document.querySelector("[data-next-btn]")&&(e.addToSend(),e.nextQuestion()),t.target==document.querySelector("[data-send]")&&e.send()})),this.$el.addEventListener("change",(function(t){if("INPUT"==t.target.tagName){if("checkbox"!==t.target.type&&"radio"!==t.target.type)e.$el.querySelectorAll("input").forEach((function(e){e.checked=!1}));e.tmp=e.serialize(e.$el)}}))}},{key:"valid",value:function(){var e=this.$el.querySelector("textarea");if(e&&e.value.length>5)return t=!0;var t=!1;return this.$el.querySelectorAll("input").forEach((function(e){switch(e.nodeName){case"INPUT":switch(e.type){case"text":e.value?t=!0:e.classList.add("error");case"checkbox":e.checked?t=!0:e.classList.add("error");case"radio":e.checked?t=!0:e.classList.add("error")}}})),t}},{key:"addToSend",value:function(){this.resultArray.push(this.tmp)}},{key:"send",value:function(){if(this.valid()){var e,t=new FormData,n=_createForOfIteratorHelper(this.resultArray);try{for(n.s();!(e=n.n()).done;){var r=e.value;for(var a in r)t.append(a,r[a].substring(0,r[a].length-1))}}catch(e){n.e(e)}finally{n.f()}fetch("mail.php",{method:"POST",body:t})}}},{key:"serialize",value:function(e){var t,n={},r="";if("object"==_typeof(e)&&"FORM"==e.nodeName)for(var a=e.elements.length,o=0;o<a;o++)if((t=e.elements[o]).name&&!t.disabled&&"file"!=t.type&&"reset"!=t.type&&"submit"!=t.type&&"button"!=t.type)if("select-multiple"==t.type)for(j=e.elements[o].options.length-1;j>=0;j--)t.options[j].selected&&(n[n.length]=encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[j].value));else("checkbox"!=t.type&&"radio"!=t.type&&t.value||t.checked)&&(r+=t.value+",",n[t.name]=r);return n}}]),e}();function init(){myMap=new ymaps.Map("map",{center:[55.76,37.64],zoom:10},{searchControlProvider:"yandex#search"})}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.quiz=new Quiz(".quiz-form .quiz-questions",quizData,{nextBtnText:"Следующий шаг",sendBtnText:"Получить"}),ymaps.ready(init);var _step,anchors=document.querySelectorAll('a[href*="#"]'),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var body=document.querySelector("body"),cartBtn=document.querySelector("#cart-btn"),cartModal=document.querySelector(".cart-modal"),formalizationModalOverlay=document.querySelector("#modal-formalization-overlay"),formalizationModalBtn=document.querySelector("#move-to-cart"),modalProductOverlay=document.querySelector("#modal-product-overlay"),productCardBtn=document.querySelectorAll(".move-to-product-card"),burgerMenu=document.querySelector("#burger-menu");cartBtn.addEventListener("click",(function(){cart.classList.toggle("active")})),document.addEventListener("click",(function(e){e.target.closest("#cart")||cart.classList.remove("active")})),formalizationModalBtn.addEventListener("click",(function(){formalizationModalOverlay.classList.toggle("active"),body.classList.toggle("overflow-hidden")})),document.addEventListener("click",(function(e){e.target===formalizationModalOverlay&&(formalizationModalOverlay.classList.remove("active"),body.classList.remove("overflow-hidden"))})),productCardBtn.forEach((function(e){e.addEventListener("click",(function(){modalProductOverlay.classList.toggle("active"),body.classList.toggle("overflow-hidden")}))})),document.addEventListener("click",(function(e){e.target===modalProductOverlay&&(modalProductOverlay.classList.remove("active"),body.classList.remove("overflow-hidden"))})),burgerMenu.addEventListener("click",(function(){burgerMenu.classList.contains("open")?(body.classList.remove("overflow-hidden"),burgerMenu.classList.remove("open")):(burgerMenu.classList.toggle("open"),body.classList.add("overflow-hidden"))}));var modalClose=document.querySelectorAll(".modal-close-btn");modalClose.forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal").classList.remove("active"),body.classList.remove("overflow-hidden")}))}));var modalCloseNavLink=document.querySelectorAll(".modal-close-js");modalCloseNavLink.forEach((function(e){e.addEventListener("click",(function(){burgerMenu.classList.remove("open"),body.classList.remove("overflow-hidden")}))}));