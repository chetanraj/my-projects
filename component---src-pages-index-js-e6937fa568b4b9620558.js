(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(152),c=(a(162),a(163)),s=a(146);a(149);var o=function(t){t.children;return r.a.createElement(s.a,{query:"2234229499",render:function(t){return r.a.createElement("div",{className:"cards"},t.site.siteMetadata.projects.map(function(t){return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"frame"}),r.a.createElement("div",{onClick:function(){return e=t.url,void console.log("url :: ",e);var e},className:"card"},t.name))}))},data:c})},l=a(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(o,null))}},145:function(t,e,a){var n;t.exports=(n=a(148))&&n.default||n},146:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=(a(33),a(145),r.a.createContext({})),o=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t){t.exports={data:{site:{siteMetadata:{title:"My projects"}}}}},148:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(56),o=a(2),l=function(t){var e=t.location,a=o.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(153),l=a.n(o);function u(t){var e=t.description,a=t.lang,r=t.meta,c=t.keywords,s=t.title,o=n.data.site,u=e||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},151:function(t){t.exports={data:{site:{siteMetadata:{title:"My projects",description:"",author:"@chetan_raj"}}}}},152:function(t,e,a){"use strict";var n=a(147),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(146),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",null,e)))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(149),function(t){var e=t.children;return i.a.createElement(o.a,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});d.propTypes={children:s.a.node.isRequired};e.a=d},162:function(t,e,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},163:function(t){t.exports={data:{site:{siteMetadata:{projects:[{name:"Javascript Essentials",url:"http://javascriptessentials.netlify.com"},{name:"Javascript Essentials [Instagram]",url:"https://www.instagram.com/javascriptessentials/"},{name:"Snpt",url:"https://snpt.netlify.com/"}]}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-e6937fa568b4b9620558.js.map