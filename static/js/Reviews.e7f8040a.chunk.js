"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{565:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,a=n(439),o=n(689),c=n(791),i=n(737),u=n(168),s=n(444).ZP.li(r||(r=(0,u.Z)(["\n  margin-bottom: 16px;\n  h4 {\n    margin-bottom: 16px;\n  }\n"]))),f=n(184),h=function(){var e=(0,o.UO)("movieId").movieId,t=(0,c.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,c.useEffect)((function(){i.tx(e).then(u)}),[e]),(0,f.jsx)(f.Fragment,{children:r.length>0?(0,f.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,f.jsxs)(s,{children:[(0,f.jsx)("h4",{children:n}),(0,f.jsx)("p",{children:r})]},t)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie."})})}},737:function(e,t,n){n.d(t,{Df:function(){return i},TP:function(){return s},V0:function(){return u},tx:function(){return h},zv:function(){return f}});var r=n(243),a=n(411),o="https://image.tmdb.org/t/p/w300",c="5ce599886a4c0703a030654068991e03";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("/trending/movie/day?api_key=".concat(c,"&page=1")).then((function(e){return e.data.results.map((function(e){return{id:e.id,title:e.title}}))})).catch((function(e){console.log(e.message)}))},u=function(e){return r.Z.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1")).then((function(e){return e.data.results.map((function(e){return{id:e.id,title:e.title}}))})).catch((function(e){console.log(e.message)}))},s=function(e){return r.Z.get("/movie/".concat(e,"?api_key=").concat(c)).then((function(e){var t=e.data,n=t.id,r=t.title,a=t.release_date,c=t.poster_path,i=t.overview,u=t.genres,s=t.vote_average;return{id:n,title:r,releaseYear:new Date(a).getFullYear(),poster:o+c,overview:i,genres:u,userScore:Math.round(10*s)}})).catch((function(e){console.log(e.message)}))},f=function(e){return r.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,c=e.profile_path;return{id:t,name:n,character:r,photo:c?o+c:a}}))})).catch((function(e){console.log(e.message)}))},h=function(e){return r.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},411:function(e,t,n){e.exports=n.p+"static/media/ava.08d8b84eaf747f01e7ed.jpg"}}]);
//# sourceMappingURL=Reviews.e7f8040a.chunk.js.map