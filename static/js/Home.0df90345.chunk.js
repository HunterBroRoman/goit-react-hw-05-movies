"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{544:function(e,t,n){n.r(t);var r=n(439),a=n(689),c=n(87),o=n(791),i=n(737),u=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,a.TH)();return(0,o.useEffect)((function(){i.Df().then(s)}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Tranding today"}),n.length>0&&(0,u.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:f},children:n})},t)}))})]})}},737:function(e,t,n){n.d(t,{Df:function(){return i},TP:function(){return s},V0:function(){return u},tx:function(){return l},zv:function(){return f}});var r=n(243),a=n(411),c="https://image.tmdb.org/t/p/w300",o="5ce599886a4c0703a030654068991e03";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("/trending/movie/day?api_key=".concat(o,"&page=1")).then((function(e){return e.data.results.map((function(e){return{id:e.id,title:e.title}}))})).catch((function(e){console.log(e.message)}))},u=function(e){return r.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1")).then((function(e){return e.data.results.map((function(e){return{id:e.id,title:e.title}}))})).catch((function(e){console.log(e.message)}))},s=function(e){return r.Z.get("/movie/".concat(e,"?api_key=").concat(o)).then((function(e){var t=e.data,n=t.id,r=t.title,a=t.release_date,o=t.poster_path,i=t.overview,u=t.genres,s=t.vote_average;return{id:n,title:r,releaseYear:new Date(a).getFullYear(),poster:c+o,overview:i,genres:u,userScore:Math.round(10*s)}})).catch((function(e){console.log(e.message)}))},f=function(e){return r.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o)).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,o=e.profile_path;return{id:t,name:n,character:r,photo:o?c+o:a}}))})).catch((function(e){console.log(e.message)}))},l=function(e){return r.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o)).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},411:function(e){e.exports="data:image/jpeg;base64,"}}]);
//# sourceMappingURL=Home.0df90345.chunk.js.map