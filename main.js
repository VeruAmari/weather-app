(()=>{"use strict";function e(){return{getLocation:()=>document.getElementById("location").value,getButton:()=>document.getElementById("location-btn"),getCurrentDisplay:()=>document.getElementById("current-display"),getTempFormat:()=>document.getElementById("temperature-format"),makeCard:function(){const e=document.createElement("div");e.classList.add("forecast");const t=document.createElement("div");t.classList.add("header");const n=document.createElement("div");n.classList.add("weather","container"),e.appendChild(t),e.appendChild(n);const a=document.createElement("img"),o=document.createElement("div");o.classList.add("temperatures"),n.appendChild(a),n.appendChild(o);const c=document.createElement("span");c.classList.add("temp","max");const d=document.createElement("span");d.classList.add("temp","min");const r=document.createElement("span");return r.classList.add("temp","now"),o.appendChild(r),o.appendChild(c),o.appendChild(d),{getWeatherContainer:()=>e,getHeader:()=>t,getImage:()=>a,getTempMax:()=>c,getTempMin:()=>d,getTempNow:()=>r}},getForm:()=>document.getElementById("get-weather")}}const t=function(){const e=new Date,t=e.getMinutes()>29?1:0;let n=e.getHours()+t;return n=n>23?0:n,n}();function n(){(async function(e){const t=""!==e?e:"London",n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1b4c098e88594855994210217230112&q=${t}&days=3`,{mode:"cors"});return await n.json()})(e().getLocation()).catch((e=>console.log(e))).then((n=>{document.getElementById("changing-location").textContent=n.location.name,n.forecast.forecastday.forEach((a=>{const o=e().makeCard();let c;switch(n.forecast.forecastday.indexOf(a)){case 0:c="Today";break;case 1:c="Tomorrow";break;case 2:c="After"}console.log(a);const d=e().getTempFormat().textContent;o.getTempMax().textContent="C"===d?`Max ${a.day.maxtemp_c}°C`:`Max ${a.day.maxtemp_f}°F`,o.getTempMin().textContent="C"===d?`Min ${a.day.mintemp_c}°C`:`Min ${a.day.mintemp_f}°F`,o.getTempNow().textContent="C"===d?`Now ${a.hour[t].temp_c}°C`:`Now ${a.hour[t].temp_f}°F`,o.getHeader().textContent=`${c}`,o.getImage().setAttribute("src",`${a.day.condition.icon}`),"Today"===c&&o.getWeatherContainer().classList.add("highlight"),document.querySelector(".body.container").appendChild(o.getWeatherContainer())}))}))}e().getCurrentDisplay().addEventListener("click",(()=>{const t=e().getTempFormat();t.textContent="C"===t.textContent?"F":"C"})),e().getForm().addEventListener("submit",(e=>{e.preventDefault(),document.querySelectorAll(".forecast").forEach((e=>{document.querySelector(".body.container").removeChild(e)})),n()})),n()})();