(window.webpackJsonpiohub=window.webpackJsonpiohub||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"a":[{"name":"Tanoshii Sushi","status":"open","sortingValues":{"bestMatch":0,"newest":96,"ratingAverage":4.5,"distance":1190,"popularity":17,"averageProductPrice":1536,"deliveryCosts":200,"minCost":1000}},{"name":"Tandoori Express","status":"closed","sortingValues":{"bestMatch":1,"newest":266,"ratingAverage":4.5,"distance":2308,"popularity":123,"averageProductPrice":1146,"deliveryCosts":150,"minCost":1300}},{"name":"Royal Thai","status":"order ahead","sortingValues":{"bestMatch":2,"newest":133,"ratingAverage":4.5,"distance":2639,"popularity":44,"averageProductPrice":1492,"deliveryCosts":150,"minCost":2500}},{"name":"Sushi One","status":"open","sortingValues":{"bestMatch":3,"newest":238,"ratingAverage":4,"distance":1618,"popularity":23,"averageProductPrice":1285,"deliveryCosts":0,"minCost":1200}},{"name":"Roti Shop","status":"open","sortingValues":{"bestMatch":4,"newest":247,"ratingAverage":4.5,"distance":2308,"popularity":81,"averageProductPrice":915,"deliveryCosts":0,"minCost":2000}},{"name":"Aarti 2","status":"open","sortingValues":{"bestMatch":5,"newest":153,"ratingAverage":4.5,"distance":1605,"popularity":44,"averageProductPrice":922,"deliveryCosts":250,"minCost":500}},{"name":"Pizza Heart","status":"order ahead","sortingValues":{"bestMatch":6,"newest":118,"ratingAverage":4,"distance":2453,"popularity":9,"averageProductPrice":1103,"deliveryCosts":150,"minCost":1500}},{"name":"Mama Mia","status":"order ahead","sortingValues":{"bestMatch":7,"newest":250,"ratingAverage":4,"distance":1396,"popularity":6,"averageProductPrice":912,"deliveryCosts":0,"minCost":1000}},{"name":"Feelfood","status":"order ahead","sortingValues":{"bestMatch":8,"newest":163,"ratingAverage":4.5,"distance":2732,"popularity":31,"averageProductPrice":902,"deliveryCosts":150,"minCost":1500}},{"name":"Daily Sushi","status":"closed","sortingValues":{"bestMatch":9,"newest":221,"ratingAverage":4,"distance":1911,"popularity":6,"averageProductPrice":1327,"deliveryCosts":200,"minCost":1000}},{"name":"Pamukkale","status":"closed","sortingValues":{"bestMatch":10,"newest":201,"ratingAverage":4,"distance":2353,"popularity":25,"averageProductPrice":968,"deliveryCosts":0,"minCost":2000}},{"name":"Indian Kitchen","status":"open","sortingValues":{"bestMatch":11,"newest":272,"ratingAverage":4.5,"distance":2308,"popularity":5,"averageProductPrice":1189,"deliveryCosts":150,"minCost":1300}},{"name":"CIRO 1939","status":"open","sortingValues":{"bestMatch":12,"newest":231,"ratingAverage":4.5,"distance":3957,"popularity":79,"averageProductPrice":1762,"deliveryCosts":99,"minCost":1300}},{"name":"Zenzai Sushi","status":"closed","sortingValues":{"bestMatch":13,"newest":155,"ratingAverage":4,"distance":2911,"popularity":36,"averageProductPrice":1579,"deliveryCosts":0,"minCost":2000}},{"name":"Fes Patisserie","status":"order ahead","sortingValues":{"bestMatch":14,"newest":77,"ratingAverage":4,"distance":2302,"popularity":3,"averageProductPrice":1214,"deliveryCosts":150,"minCost":1250}},{"name":"Yvonne\'s Vispaleis","status":"order ahead","sortingValues":{"bestMatch":15,"newest":150,"ratingAverage":5,"distance":2909,"popularity":3,"averageProductPrice":2557,"deliveryCosts":150,"minCost":1750}},{"name":"De Amsterdamsche Tram","status":"open","sortingValues":{"bestMatch":304,"newest":131,"ratingAverage":0,"distance":2792,"popularity":0,"averageProductPrice":892,"deliveryCosts":0,"minCost":0}},{"name":"Lale Restaurant & Snackbar","status":"order ahead","sortingValues":{"bestMatch":305,"newest":73,"ratingAverage":0,"distance":2880,"popularity":0,"averageProductPrice":838,"deliveryCosts":0,"minCost":0}},{"name":"Lunchpakketdienst","status":"open","sortingValues":{"bestMatch":306,"newest":259,"ratingAverage":3.5,"distance":14201,"popularity":0,"averageProductPrice":4465,"deliveryCosts":500,"minCost":5000}}]}')},27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(3),o=a.n(n),i=(a(32),a(7),a(26)),c=a(21),l=a(11),u=a(22),d=function(e,t){return S[e].sortingValues.bestMatch-S[t].sortingValues.bestMatch},m=function(e,t){return S[e].sortingValues.newest-S[t].sortingValues.newest},v=function(e,t){return S[e].sortingValues.ratingAverage-S[t].sortingValues.ratingAverage},g=function(e,t){return S[e].sortingValues.distance-S[t].sortingValues.distance},p=function(e,t){return S[e].sortingValues.popularity-S[t].sortingValues.popularity},h=function(e,t){return S[e].sortingValues.averageProductPrice-S[t].sortingValues.averageProductPrice},f=function(e,t){return S[e].sortingValues.deliveryCost-S[t].sortingValues.deliveryCost},E=function(e,t){return S[e].sortingValues.minimumCost-S[t].sortingValues.minimumCost},y=function(e,t){return S[e].sortingValues.topRestaurants-S[t].sortingValues.topRestaurants};function b(e,t){return S[e].sortingValues[P[t]]}var C={bestMatch:"BEST MATCH",newest:"NEWEST",ratingAverage:"RATING AVG.",distance:"DISTANCE",popularity:"POPULARITY",averageProductPrice:"AVG. PRODUCT PRICE",deliveryCosts:"DELIVERY COST",minCost:"MINIMUM COST",topRestaurants:"TOP RESTAURANTS"},P={"BEST MATCH":"bestMatch",NEWEST:"newest","RATING AVG.":"ratingAverage",DISTANCE:"distance",POPULARITY:"popularity","AVG. PRODUCT PRICE":"averageProductPrice","DELIVERY COST":"deliveryCosts","MINIMUM COST":"minCost","TOP RESTAURANTS":"topRestaurants"},S=u.a.map(function(e){return e.sortingValues.topRestaurants=e.sortingValues.distance*e.sortingValues.popularity+e.sortingValues.ratingAverage,e})||[],A=function(){function e(){Object(c.a)(this,e),this.__restaurants={favorites:[],open:[],orderAhead:[],closed:[]},this.currentSort=C.bestMatch,this.__listener=null,this.parseRestaurants()}return Object(l.a)(e,[{key:"restaurants",get:function(){return this.__restaurants},set:function(e){if(this.__restaurants=e,this.__listener&&"function"===typeof this.__listener)return this.__listener({currentSort:this.currentSort,restaurants:e})}}]),Object(l.a)(e,[{key:"useRestaurants",value:function(){var e=s.a.useState({currentSort:this.currentSort,restaurants:this.restaurants}),t=Object(i.a)(e,2),a=t[0],r=t[1];return this.__listener=r,a}},{key:"updateFavorite",value:function(e,t){S[e].isFavorite!==t&&(S[e].isFavorite=t,this.parseRestaurants())}},{key:"setSortType",value:function(e){if(this.currentSort!==e&&!Object.is(e,""))return this.currentSort=e,this.triggerSort(this.restaurants),this.__listener&&"function"===typeof this.__listener?this.__listener({currentSort:this.currentSort,restaurants:this.restaurants}):void 0}},{key:"search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(Object.is(e,""))return this.parseRestaurants();var t=e.toLowerCase().split(".").reduce(function(e,t,a,r){return e+=".*".concat(t),a+1===r.length&&(e+=".*"),e},""),a=new RegExp("^".concat(t,"$"),"g");return this.parseRestaurants(S.reduce(function(e,t,r){return a.test(t.name.toLowerCase())?(e.push(r),e):e},[]))}},{key:"getBestMatchSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(d).reverse(),open:a=a.sort(d).reverse(),orderAhead:r=r.sort(d).reverse(),closed:s=s.sort(d).reverse()}}},{key:"getNewestSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(m).reverse(),open:a=a.sort(m).reverse(),orderAhead:r=r.sort(m).reverse(),closed:s=s.sort(m).reverse()}}},{key:"getRatingAverageSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(v).reverse(),open:a=a.sort(v).reverse(),orderAhead:r=r.sort(v).reverse(),closed:s=s.sort(v).reverse()}}},{key:"getDistanceSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(g),open:a=a.sort(g),orderAhead:r=r.sort(g),closed:s=s.sort(g)}}},{key:"getPopularitySort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(p).reverse(),open:a=a.sort(p).reverse(),orderAhead:r=r.sort(p).reverse(),closed:s=s.sort(p).reverse()}}},{key:"getAverageProductPriceSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(h),open:a=a.sort(h),orderAhead:r=r.sort(h),closed:s=s.sort(h)}}},{key:"getDeliveryCostSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(f),open:a=a.sort(f),orderAhead:r=r.sort(f),closed:s=s.sort(f)}}},{key:"getMinimumCostSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(E),open:a=a.sort(E),orderAhead:r=r.sort(E),closed:s=s.sort(E)}}},{key:"getTopRestaurantsSort",value:function(e){var t=e.favorites,a=e.open,r=e.orderAhead,s=e.closed;return{favorites:t=t.sort(y).reverse(),open:a=a.sort(y).reverse(),orderAhead:r=r.sort(y).reverse(),closed:s=s.sort(y).reverse()}}},{key:"triggerSort",value:function(e){var t;switch(this.currentSort){case C.bestMatch:t=this.getBestMatchSort(e);break;case C.newest:t=this.getNewestSort(e);break;case C.ratingAverage:t=this.getRatingAverageSort(e);break;case C.distance:t=this.getDistanceSort(e);break;case C.popularity:t=this.getPopularitySort(e);break;case C.averageProductPrice:t=this.getAverageProductPriceSort(e);break;case C.deliveryCosts:t=this.getDeliveryCostSort(e);break;case C.minimumCost:t=this.getMinimumCostSort(e);break;case C.topRestaurants:t=this.getTopRestaurantsSort(e);break;default:throw new Error("Unknown value provided as sort name")}return t}},{key:"parseRestaurants",value:function(e){console.info(e);var t={favorites:[],open:[],orderAhead:[],closed:[]},a=S;if(e){var r=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value;this.__parse(t,a,c)}}catch(u){s=!0,n=u}finally{try{r||null==i.return||i.return()}finally{if(s)throw n}}}else for(var l=0;l<a.length;l++)this.__parse(t,a,l);this.restaurants=this.triggerSort(t)}},{key:"__parse",value:function(e,t,a){if(t[a].isFavorite)e.favorites.push(a);else switch(t[a].status){case"open":e.open.push(a);break;case"order ahead":e.orderAhead.push(a);break;case"closed":e.closed.push(a);break;default:throw new Error("Unknown restaurant status provided!")}}}]),e}(),N=a(5),w=a(2),k=function(e){switch(e){case"open":return s.a.createElement("span",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},s.a.createElement(w.b,null)),s.a.createElement("span",{className:"tag is-success"},e));case"closed":return s.a.createElement("span",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},s.a.createElement(w.a,null)),s.a.createElement("span",{className:"tag is-warning"},e));case"order ahead":return s.a.createElement("span",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},s.a.createElement(w.f,null)),s.a.createElement("span",{className:"tag is-link"},e))}};function V(e){var t=e.name,a=e.status,r=e.isFavorite,n=e.sortValue,o=e.makeFavorite,i=e.id;return s.a.createElement(_.Consumer,null,function(e){return s.a.createElement("div",{className:"card is-clipped has-radius"},s.a.createElement("div",{className:"card-image "},s.a.createElement("figure",{className:"image is-marginless is-4by3"},s.a.createElement("img",{src:"/iohubweb"+"/img/rest".concat(i%3+1,".jpg"),alt:"Placeholder"}))),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-content is-flex is-flex-column"},s.a.createElement("span",{className:"has-text-weight-medium is-size-5 title"},"order ahead"==a?"You can order ahead of time.":"We are ".concat(a,"!")),s.a.createElement("p",{className:"subtitle is-6"},k(a)))),s.a.createElement("div",{className:"content"},s.a.createElement("p",{className:"title is-4 is-capitalized has-text-weight-bold"},t),s.a.createElement("p",{className:"is-size-6 has-text-ellipse has-text-weight-light"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."))),s.a.createElement("footer",{className:"card-footer"},s.a.createElement("span",{className:"card-footer-item is-size-2-mobile is-size-3",onClick:function(){return o(!r)}},r?s.a.createElement(w.c,{className:"isFavorite"}):s.a.createElement(w.d,null)),s.a.createElement("span",{className:"card-footer-item"},s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",null,s.a.createElement("p",{className:"heading "},e.currentSort),s.a.createElement("p",{className:"title"},n||0)))))))})}function M(e){var t=e.triggerSearch,a=e.triggerSort;return s.a.createElement("section",{className:"hero is-bold is-dark has-text-centered has-search"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title is-uppercase"},"Grab food now!"),s.a.createElement("h2",{className:"subtitle"},"Browse our top notch selection of delicacies."))),s.a.createElement("div",{className:"hero-foot"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-10-mobile is-offset-1-mobile is-8 is-offset-2 search"},s.a.createElement(T,{triggerSearch:t,triggerSort:a})))))}function T(e){var t=e.triggerSearch,a=e.triggerSort,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,a=void 0,r=this;return function(){var s=arguments;clearTimeout(a),a=setTimeout(function(){return e.apply(r,s)},t)}}(function(e){t(e)},500);return s.a.createElement("div",{className:"field has-addons is-centered"},s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input is-rounded",type:"text",onChange:function(e){r(e.target.value.trim())},placeholder:"Search for your taste..."}),s.a.createElement(w.e,{className:"icon is-left inputIcon"})),s.a.createElement("div",{className:"control has-icons-right "},s.a.createElement("select",{className:"input select is-rounded",type:"text",onChange:function(e){return a(e.target.value)}},s.a.createElement("option",null,"SORT BY"),s.a.createElement("option",{value:C.bestMatch},C.bestMatch),s.a.createElement("option",{value:C.deliveryCosts},C.deliveryCosts),s.a.createElement("option",{value:C.distance},C.distance),s.a.createElement("option",{value:C.minCost},C.minCost),s.a.createElement("option",{value:C.newest},C.newest),s.a.createElement("option",{value:C.popularity},C.popularity),s.a.createElement("option",{value:C.ratingAverage},C.ratingAverage),s.a.createElement("option",{value:C.averageProductPrice},C.averageProductPrice),s.a.createElement("option",{value:C.topRestaurants},C.topRestaurants)),s.a.createElement(w.g,{className:"icon is-right inputIcon"})))}var R=new A,_=s.a.createContext(R);function F(){var e=R.useRestaurants().restaurants;Object(N.useToasts)().addToast;return s.a.createElement(_.Provider,{value:R},s.a.createElement("main",{className:"container is-fluid is-marginless"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"wrapper "},s.a.createElement(M,{triggerSearch:R.search.bind(R),triggerSort:function(e){return R.setSortType(e)}}),s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"columns section is-vcentered is-multiline"},e.favorites.map(function(e){return s.a.createElement("div",{className:"column is-12-mobile is-3-tablet is-2"},s.a.createElement(V,{id:e,key:S[e].name,name:S[e].name,status:S[e].status,isFavorite:S[e].isFavorite,sortValue:b(e,R.currentSort),makeFavorite:function(t){R.updateFavorite(e,t)}}))}),e.open.map(function(e){return s.a.createElement("div",{className:"column is-12-mobile is-3-tablet is-2"},s.a.createElement(V,{id:e,key:S[e].name,name:S[e].name,status:S[e].status,isFavorite:S[e].isFavorite,sortValue:b(e,R.currentSort),makeFavorite:function(t){return R.updateFavorite(e,t)}}))}),e.orderAhead.map(function(e){return s.a.createElement("div",{className:"column is-12-mobile is-3-tablet is-2"},s.a.createElement(V,{id:e,key:S[e].name,name:S[e].name,status:S[e].status,isFavorite:S[e].isFavorite,sortValue:b(e,R.currentSort),makeFavorite:function(t){return R.updateFavorite(e,t)}}))}),e.closed.map(function(e){return s.a.createElement("div",{className:"column is-12-mobile is-3-tablet is-2"},s.a.createElement(V,{id:e,key:S[e].name,name:S[e].name,status:S[e].status,isFavorite:S[e].isFavorite,sortValue:b(e,R.currentSort),makeFavorite:function(t){return R.updateFavorite(e,t)}}))})))))))}var O=function(){return s.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(25);o.a.render(s.a.createElement(I.a,null,s.a.createElement(N.ToastProvider,{PlacementType:"bottom-left",TransitionState:"entering",transitionDuration:250},s.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.edf3fd12.chunk.js.map