(()=>{var e={343:(e,t,r)=>{const{animate:n}=r(956);e.exports=()=>{const e=document.querySelector("#calc");if(!e)return;const t=e.querySelector("#calc-type"),r=e.querySelector("#calc-type-material"),o=e.querySelector("#calc-input"),a=e.querySelector("#calc-total");if(!(t&&r&&o&&a))return;const s=e.querySelector('label[for="calc-total"]');s&&(s.textContent+=" рублей"),e.addEventListener("input",(e=>{if(0===t.selectedIndex||0===r.selectedIndex||""===o.value)return void(a.value="");let s=isNaN(parseInt(a.value))?0:parseInt(a.value);const l=+o.value*+r.options[+r.selectedIndex].value*+t.options[+t.selectedIndex].value;s!==l&&n({duration:600,timing:e=>e,draw(e){a.value=1e3*Math.round(s+e*(l-s))}})}))}},240:e=>{e.exports=()=>{const e=document.querySelector("#documents");if(!e)return;const t=document.querySelector(".overlay");e.addEventListener("click",(e=>{if(e.target.closest(".sertificate-document")){e.preventDefault(),t.innerHTML="",t.style.display="block";const r=document.createElement("div");r.classList.add("certificateDiv"),r.style.position="absolute",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.innerHTML=`<img src="${e.target.closest(".sertificate-document").getAttribute("href")}" alt='Сертификат' style="height: ${document.documentElement.clientHeight-30}px;"><div class="certCloser" style="position: absolute; top: 5px; right: 3px; cursor: pointer; font-size: 20px; padding: 7px; line-height: 1.2; text-align: center; background-color: #000; border-radius: 20px; color: #FFF;">X</div>`,t.appendChild(r)}}));const r=()=>{t.innerHTML="",t.style.display="none"};t.addEventListener("click",(e=>{e.target.closest(".certCloser")&&r(),e.target.closest(".certificateDiv")||document.querySelector(".certificateDiv")&&r()}))}},845:e=>{e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("input",(e=>{e.target.getAttribute("name")&&"fio"===e.target.getAttribute("name")&&(e.target.value=e.target.value.replace(/[^A-Za-zА-Яа-яЁё]+/g,"")),e.target.getAttribute("name")&&"phone"===e.target.getAttribute("name")&&(e.target.value=e.target.value.replace(/[^\d\+\(\)\- ]+/g,"")),e.target.getAttribute("id")&&"calc-input"===e.target.getAttribute("id")&&(e.target.value=e.target.value.replace(/[^\d]+/g,""))}))}))}},956:e=>{e.exports={animate:function({timing:e,draw:t,duration:r}){let n=performance.now();requestAnimationFrame((function o(a){let s=(a-n)/r;s>1&&(s=1);let l=e(s);t(l),s<1&&requestAnimationFrame(o)}))}}},131:e=>{e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".overlay"),t=document.querySelector(".header-modal"),r=document.querySelector(".services-modal--opened"),n=(t,r)=>{t.classList.contains(r)&&(t.classList.remove(r),e.style.display="block")},o=(t,r)=>{e.style.display="none",t.classList.add(r)};document.addEventListener("click",(e=>{e.target.closest(".header-modal--opened")||t.classList.contains("header-modal")||o(t,"header-modal"),e.target.closest(".header-modal__close")&&o(t,"header-modal"),e.target.closest(".header-modal--opened")||t.classList.contains("header-modal")||o(t,"header-modal"),e.target.closest(".btn")&&"#callback"===e.target.closest(".btn").getAttribute("href")&&(e.preventDefault(),n(t,"header-modal")),e.target.closest(".services-modal--opened")||r.classList.contains("services-modal")||o(r,"services-modal"),e.target.closest(".btn")&&"#application"===e.target.closest(".btn").getAttribute("href")&&(e.preventDefault(),n(r,"services-modal")),e.target.closest(".services-modal__close")&&o(r,"services-modal")}))}))}},863:e=>{e.exports=()=>{!function(e,t="+7 (__) --"){const r=document.querySelectorAll(e);function n(e){const r=e.keyCode,n=t,o=n.replace(/\D/g,""),a=this.value.replace(/\D/g,"");let s=0,l=n.replace(/[_\d]/g,(function(e){return s<a.length?a.charAt(s++)||o.charAt(s):e}));s=l.indexOf("_"),-1!=s&&(l=l.slice(0,s));let c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of r)e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}('[name="phone"]',"+7 (___) ___-__-__")}},504:(e,t,r)=>{const{animate:n}=r(956);e.exports=()=>{let e=null,t=0;const r=["green","gray","orange"];document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#reviews");if(!n)return;const o=n.querySelector(".comments-container");o.innerHTML="";const a=()=>{o.innerHTML="";const n=o.querySelector(".comment-item");n&&(n.style.opacity=1),t>=e.length&&(t=0);for(let n=0;n<3;n++){let a=t+n;a>=e.length&&(a=0);let s=document.createElement("div");const l=`<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${e[a].image?e[a].image:"man-user.png"}" alt="" class="img-responsive avatar"${e[a].image?"":' style="display: block; padding: 30px; margin-left: 20px;"'}></div></div>`;let c=`<div class="col-xs-9 col-sm-9">\n\t\t\t\t\t\t\t<div class="review-inner review-XXX review-arrow review-arrow-XXXXX">\n\t\t\t\t\t\t\t\t<p class="text-normal">${e[a].author}</p>\n\t\t\t\t\t\t\t\t<p>${e[a].comment}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>`;n%2==0?(c=c.replace("review-XXX",`review-${r[n%3]}`).replace("review-arrow-XXXXX","review-arrow-left"),s.innerHTML=`<div class="review-margin-bottom row comment-item">${l}${c}</div>`):(c=c.replace("review-XXX","review-gray").replace("review-arrow-XXXXX","review-arrow-right"),s.innerHTML=`<div class="review-margin-bottom row comment-item">${c}${l}</div>`),o.appendChild(s)}setTimeout((()=>{t+=1,a()}),5e3)};fetch("comments.json").then((e=>e.json())).then((t=>{e=t.comments,a()})).catch((e=>{console.log(e)}))}))}},728:(e,t,r)=>{const{animate:n}=r(956);e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".smooth-scroll");e.style.display="none",document.addEventListener("scroll",(t=>{document.documentElement.scrollTop<=50?e.style.display="none":e.style.display="block"})),e.addEventListener("click",(e=>{const t=document.documentElement.scrollTop;n({duration:600,timing:e=>e,draw(e){document.documentElement.scrollTop=t-e*t}})}))}))}},834:e=>{e.exports=()=>{let e=!1;const t=(e,t)=>{setTimeout((()=>{e.textContent=""}),3e3),setTimeout((()=>{if(t.closest(".fancybox-skin")){const e=document.querySelector(".overlay");e&&(e.style.display="none");const r=t.closest(".fancybox-skin").parentNode;let n=r.getAttribute("class").replace("--opened","");r.classList.add(n)}}),1500)};let r;document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("input",(t=>{t.target.getAttribute("name")&&"phone"===t.target.getAttribute("name")&&e&&(11===t.target.value.replace(/[^\d]/g,"").length?(t.target.style.borderColor="rgb(223, 223, 223)",t.target.classList.remove("error")):(t.target.classList.add("error"),t.target.style.borderColor="red")),t.target.getAttribute("name")&&"fio"===t.target.getAttribute("name")&&e&&(t.target.value?(t.target.style.borderColor="rgb(223, 223, 223)",t.target.classList.remove("error")):(t.target.classList.add("error"),t.target.style.borderColor="red"))})),document.addEventListener("click",(n=>{if(n.target.closest(".btn")&&"submit"===n.target.closest(".btn").getAttribute("type")){n.preventDefault();const o=n.target.closest("form");if(!o)return;r=n.target.parentNode.querySelector("p"),r||(r=document.createElement("p"),r.style.paddingTop="5px",n.target.parentNode.appendChild(r)),(t=>{e=!0;let r=!0;const n=t.querySelector('[name="phone"]'),o=t.querySelector('[name="fio"]');return 11!==n.value.replace(/[^\d]/g,"").length?(n.style.borderColor="red",n.classList.add("error"),r=!1):(n.style.borderColor="rgb(223, 223, 223)",n.classList.contains("error")&&n.classList.remove("error")),o.value?(o.style.borderColor="rgb(223, 223, 223)",o.classList.contains("error")&&o.classList.remove("error")):(o.style.borderColor="red",o.classList.add("error"),r=!1),r})(o)&&(r.textContent="Отправляю",((e,n)=>{formBody=(e=>{const t=new FormData(e),r={};return t.forEach(((e,t)=>{""!==e.trim()&&(r[t]=e)})),r})(e);const o=document.querySelector("#calc-total");var a;o&&""!==o.value&&"0"!==o.value&&(formBody["calc-total"]=o.value.trim()),(a=formBody,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((o=>{r.textContent="Спасибо! Мы скоро свяжемся с Вами!",t(r,n),setTimeout((()=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))}),2900)})).catch((e=>{r.textContent="Ошибка отправки данных",t(r,n)}))})(o,n.target))}}))}))}},613:e=>{e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".benefits-arrows"),t=document.querySelector(".benefits-wrap");let r=[];if(e||r.push('ВЕРСТАЛЬЩИК, ВЕРНИ, ПОЖАЛУЙСТА КОНТЕЙНЕР СО СТРЕЛКАМИ КЛАСС ".benefits-arrows"'),t||r.push('ВЕРСТАЛЬЩИК, ВЕРНИ, ПОЖАЛУЙСТА КОНТЕЙНЕР СО ПРЕИМУЩЕСТВАМИ КЛАСС ".benefits-wrap"'),r.length)return;const n=t.querySelectorAll(".benefits__item");if(!n.length)return;let o,a=0;const s=()=>{t.innerHTML="",o=3,document.documentElement.clientWidth<576&&(o=1),a>=n.length&&(a=0),a<0&&(a=n.length-1);let e=o,r=0;for(let s=a;s<a+o;s++)s<n.length?t.appendChild(n[s]):(t.appendChild(n[r]),r+=1),e-=1};s(),e.addEventListener("click",(e=>{e.target.closest(".benefits__arrow--left")&&(a-=1,s()),e.target.closest(".benefits__arrow--right")&&(a+=1,s())}))}))}},51:e=>{e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#services");if(!e)return;const t=e.querySelector(".row");if(!t)return;const r=e.querySelector(".services-arrows");let n=e.querySelectorAll(".service-block");if(!n.length||!r)return;t.parentNode.appendChild(r),n=Array.from(n).map((e=>e.parentNode));let o=2,a=0;document.documentElement.clientWidth<576&&(o=1);const s=()=>{t.innerHTML="",a>=n.length&&(a=0),a<0&&(a=n.length-1);let e=o,r=0;for(let s=a;s<a+o;s++)s<n.length?t.appendChild(n[s]):(t.appendChild(n[r]),r+=1),e-=1};s(),r.addEventListener("click",(e=>{e.target.closest(".services__arrow--left")&&(a-=1,s()),e.target.closest(".services__arrow--right")&&(a+=1,s())}))}))}},410:e=>{e.exports=(e,t)=>{if(!e)return;const r=document.querySelector(t);if(!r)return;let n;const o=r.querySelector(".count_1 span"),a=r.querySelector(".count_2 span"),s=r.querySelector(".count_3 span"),l=r.querySelector(".count_4 span"),c=()=>{const{days:t,hours:r,minutes:c,seconds:i}=(e=>{const t=new Date(e).getTime(),r=(new Date).getTime();let n=Math.floor((t-r)/1e3);return{days:Math.floor(n/86400),hours:Math.floor(n/60/60%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}})(e);if(i<0)return clearInterval(n),o.textContent="00",a.textContent="00",s.textContent="00",void(l.textContent="00");o.textContent=String(t).padStart(2,"0"),a.textContent=String(r).padStart(2,"0"),s.textContent=String(c).padStart(2,"0"),l.textContent=String(i).padStart(2,"0")};c(),n=setInterval(c,1e3,e)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{const e=r(613),t=r(51),n=r(131),o=r(728),a=r(410),s=r(845),l=r(240),c=r(834),i=r(863),d=r(343),u=r(504);e(),t(),n(),o(),a("11 september 2022","#order_1"),a("15 september 2022","#order_2"),s(),l(),i(),c(),d(),u()})()})();