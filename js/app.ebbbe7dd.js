(function(e){function a(a){for(var o,t,c=a[0],u=a[1],l=a[2],s=0,d=[];s<c.length;s++)t=c[s],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==r[c]&&(o=!1)}o&&(i.splice(a--,1),e=u(u.s=n[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"1e67a5fd","chunk-0206bfa0":"854f111b","chunk-04b93936":"5b023d92","chunk-13a6037e":"fcf809ba","chunk-16015154":"0a9c0c07","chunk-17977988":"c4a695b4","chunk-2c06842c":"c84ca9f1","chunk-2d208d90":"ba7a467a","chunk-2d21d0e2":"0edb16b4","chunk-2d22c123":"ef4a52b6","chunk-2e80bb9a":"8235ed23","chunk-3145fe0f":"285c5a2e","chunk-328f70dd":"38165604","chunk-3807499c":"b4a41816","chunk-3dc647fd":"3b59b66f","chunk-4cdd78c0":"54d79f3a","chunk-4fde0a08":"0dd89017","chunk-515a8379":"c654ac98","chunk-53ccb27e":"65c6baf2","chunk-59974754":"ca41ff67","chunk-766a929b":"7880e98f","chunk-839300a6":"30ebbffe","chunk-c796899c":"06acbc80","chunk-dbb9869e":"78658566",comple:"f835155f",creditos:"5be0e945",glosario:"7dbdcdf4",intro:"0b613bb9",referencias:"3499baac",tema1:"de1d3204",tema2:"b6288aa8",tema3:"0a8db1fd",tema4:"e8945b36"}[e]+".js"}function u(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema2:1,tema3:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"9da7cd45","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"be932b13","chunk-766a929b":"239be14b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"0f02afea",creditos:"bf32501b",glosario:"84ea6ff1",intro:"0e433876",referencias:"cb41c49c",tema1:"31d6cfe0",tema2:"bb83b673",tema3:"1f6c852d",tema4:"31d6cfe0"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===o||s===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(a){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(a)},u.m=e,u.c=o,u.d=function(e,a,n){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)u.d(n,o,function(a){return e[a]}.bind(null,o));return n},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.69136bc8.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,u=n("2877"),l=Object(u["a"])(c,t,r,!1,null,null,null),s=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");d["default"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=n("5f5b"),k=n("b1e0"),y=(n("f9e3"),n("2dd8"),n("a3a0"),{global:{componenteFormativo:"Diseño y construcción de Frontend",descripcionCurso:"En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación entornos de desarrollo, lenguajes entre otros.",imagenBannerPrincipal:n("694a"),fondoBannerPrincipal:n("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Análisis de requerimiento",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Diseño gráfico: herramientas de prototipado",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Adobe XD",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Balsamiq",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Canva",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Conceptos de Material Desing",hash:"t_2_4"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Principios básicos de usabilidad",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Componentes de <i>software</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Licenciamiento",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Serguridad",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"APIs, Firebase",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Herramientas",hash:"t_4_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Lázaro, G. (2015). Efecto Ripple de Material Design [HTML+CSS+JS]. ",link:" https://gersonlazaro.com/tutorial-efecto-ripple-de-material-design-html-css-js"},{referencia:"Material.io. (2021). Material Design.",link:" https://material.io/design/color/the-color-system.html#color-usage-and-palettes"},{referencia:"Aula formativa. (2019, julio 29). ¿Qué es el Material Design?. [Web log post].  blog.aulaformativa.com. ",link:" https://blog.aulaformativa.com/que-es-el-material-design"},{referencia:"Beust, C. (2019).  TestNG. ",link:"https://testng.org/doc"}],glosario:[{termino:"Wereable",significado:"Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil."},{termino:"wireframing",termHTML:"<i>Wireframing</i>",significado:"Es un esquema de página o plano de pantalla, como guía visual que representa el esqueleto o estructura visual de una interfaz."}],complementario:[{texto:"FalconMasters. (2018). Curso de Adobe XD | 1. Introducción y que Aprenderemos en el Curso [video] Youtube.",tipo:"Video Tutorial",link:"https://youtu.be/5HfqCSm9k3Y"},{texto:"EDteam. (2017). Minicurso de Balsamiq Mockups (1) - Los wireframes y la interfaz. [video] Youtube.",tipo:"Video Tutorial",link:"https://youtu.be/4WqfxF1QjTM"},{texto:"Aprende, G. (2020).  COMO USAR CANVA: Canva tutorial - Aprende a diseñar FÁCIL y de manera PROFESIONAL. [video] Youtube.",tipo:"Video Tutorial",link:"https://youtu.be/kdE6ZmT_5MI"},{texto:"Conde, J. (2016). 01.- Material Design con Android Studio. ¿Qué es Material Design? [video] Youtube.",tipo:"Video Tutorial",link:"https://youtu.be/wt0Jzc9UHNw"},{texto:"Novato, P. (2019). Firebase 01.- Que es Firebase.  [video] Youtube.",tipo:"Video Tutorial",link:"https://youtu.be/0Bhrwc8VfGw"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Lider de equipo",centro:"Direccion General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Peter Emerson Pinchao",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial  - Regional Cauca"},{nombre:"Adriana López",cargo:"Diseñador instruccional",centro:"Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y metrología - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Luis Fernando Sarmiento Betancourth",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Lizeth Karina Manchego Suárez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].use(v["a"]),o["a"].use(k["a"]),o["a"].prototype.$config=y;var C=n("9224");o["a"].prototype.$package=C,new o["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},"694a":function(e,a,n){e.exports=n.p+"img/banner-principal.80343b63.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"bootstrap":"^5.0.2","bootstrap-vue":"^2.21.2","ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.ebbbe7dd.js.map