(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,n,t){e.exports=t(72)},62:function(e,n,t){var r={"./product-1.jpg":63,"./product-2.jpg":64,"./product-3.jpg":65,"./product-4.jpg":66,"./product-5.jpg":67,"./product-6.jpg":68,"./product-7.jpg":69,"./product-8.jpg":70};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=62},63:function(e,n,t){e.exports=t.p+"static/media/product-1.5b629eeb.jpg"},64:function(e,n,t){e.exports=t.p+"static/media/product-2.e013f11a.jpg"},65:function(e,n,t){e.exports=t.p+"static/media/product-3.b756e167.jpg"},66:function(e,n,t){e.exports=t.p+"static/media/product-4.3367517d.jpg"},67:function(e,n,t){e.exports=t.p+"static/media/product-5.7a256f82.jpg"},68:function(e,n,t){e.exports=t.p+"static/media/product-6.15bf9c82.jpg"},69:function(e,n,t){e.exports=t.p+"static/media/product-7.fcd37ef5.jpg"},70:function(e,n,t){e.exports=t.p+"static/media/product-8.b14dd313.jpg"},71:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=t(2),l=t(3),u=t(8),p=t(5),d=t(28),s=t(29),f=t(15),m={products:null,selectedSize:"default",loading:!0},g=Object(p.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"LOADED_PRODUCTS":return Object(f.a)({},e,{loading:!1,products:r});case"SET_PRODUCT_SIZE":return Object(f.a)({},e,{loading:!1,selectedSize:r});default:return e}}}),v=[s.a],x=Object(p.createStore)(g,{},Object(d.composeWithDevTools)(p.applyMiddleware.apply(void 0,v))),b=t(12),h=t.n(b),E=t(30),j=t(31),y=t.n(j);function O(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n\n  select {\n    width: 150px;\n  }\n"]);return O=function(){return e},e}var w=l.a.form(O()),S={getSelectedProductSize:function(e){return function(n){var t=e.target.value;console.log(t),n({type:"SET_PRODUCT_SIZE",payload:t})}}},k=Object(u.b)(function(e){return{product:e.product}},S)(function(e){var n,t=e.product,r=e.getSelectedProductSize;return t.loading||(n=[{label:"Extra Small",value:"XS"},{label:"Small",value:"S"},{label:"Medium",value:"M"},{label:"Large",value:"L"},{label:"Extra Large",value:"XL"}].map(function(e){return e.value,t.selectedSize,a.a.createElement("option",{key:e.value,value:e.value},e.label)})).unshift(a.a.createElement("option",{key:"x",value:"default",disabled:!0},"Filter by size")),console.log("product.selectedSize",t.selectedSize),a.a.createElement(w,null,a.a.createElement("select",{value:t.selectedSize,onChange:r},n&&n))}),z=function(e){return void 0===e||null===e||0===e||"object"===typeof e&&0===Object.keys(e).length||Array.isArray(e)&&0===e.length||"string"===typeof e&&0===e.trim().length||"string"===typeof e&&"null"===e};function D(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  margin-top: 10px;\n  grid-gap: 10px;\n\n  span:first-child {\n    font-size: 20px;\n  }\n\n  span:last-child {\n    font-size: 30px;\n    text-align: right;\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(i.a)(["\n  height: 50px;\n  width: 100%;\n\n  span {\n    background-color: ",";\n    height: 50px;\n    display: inline-flex;\n    align-items: center;\n    padding: 0px 22px;\n    color: #fff;\n  }\n"]);return C=function(){return e},e}function L(){var e=Object(i.a)(["\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n"]);return L=function(){return e},e}function T(){var e=Object(i.a)(["\n  list-style-type: none;\n  border: 1px solid #f1f1f1;\n  padding: 10px;\n  padding-bottom: 30px;\n"]);return T=function(){return e},e}var _=t(62),P=l.a.li(T()),U=l.a.div(L()),R=l.a.div(C(),function(e){return e.theme.backgroundColor}),A=l.a.div(D()),I=function(e){var n=e.product,t=_("./".concat(n.productImage)),r=a.a.createElement(R,null);return n.isExclusive&&(r=a.a.createElement(R,{theme:{backgroundColor:"green"}},a.a.createElement("span",null,"Exclusive"))),n.isSale&&(r=a.a.createElement(R,{theme:{backgroundColor:"red"}},a.a.createElement("span",null,"Sale"))),a.a.createElement(P,null,a.a.createElement(U,null,a.a.createElement("img",{src:t,alt:"any"})),r&&r,a.a.createElement(A,null,a.a.createElement("span",null,n.productName),a.a.createElement("span",null,n.price)))};function M(){var e=Object(i.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin: 120px 0px;\n"]);return M=function(){return e},e}function N(){var e=Object(i.a)(["\n  display: grid;\n  padding: 0px;\n  grid-template-columns: repeat(1, 1fr);\n\n  @media (min-width: 450px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 960px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]);return N=function(){return e},e}var W=l.a.ul(N()),B=l.a.p(M()),F=Object(u.b)(function(e){return{product:e.product}})(function(e){var n,t=e.product;if(t.loading)n=a.a.createElement(B,null,"Loading..");else if(z(t.products))n=a.a.createElement("p",null,"No Products were found");else{var r=t.products.filter(function(e){return e.size.some(function(e){return e===t.selectedSize})});z(r)&&(r=t.products);var o=r.map(function(e){return a.a.createElement(I,{product:e,key:e.index})});n=a.a.createElement(W,null,o)}return n});function J(){var e=Object(i.a)(["\n  background-color: #def1f4;\n  padding: 10px;\n  margin-top: 40px;\n  display: grid;\n  grid-template-columns: auto 200px;\n\n  h1 {\n    font-size: 30px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n  }\n"]);return J=function(){return e},e}function X(){var e=Object(i.a)(["\n  max-width: 960px;\n  margin: 0 auto;\n"]);return X=function(){return e},e}var Z=l.a.section(X()),$=l.a.section(J()),q=function(){return Object(r.useEffect)(function(){x.dispatch(function(){var e=Object(E.a)(h.a.mark(function e(n){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3");case 3:t=e.sent,n({type:"LOADED_PRODUCTS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(n){return e.apply(this,arguments)}}())},[]),a.a.createElement(u.a,{store:x},a.a.createElement(Z,null,a.a.createElement($,null,a.a.createElement("h1",null,"Women's tops"),a.a.createElement(k,null)),a.a.createElement(F,null)))};t(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.9efdfa40.chunk.js.map