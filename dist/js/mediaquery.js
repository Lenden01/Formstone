/*! Formstone v0.0.1 [mediaquery.js] 2014-12-13 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(m[c]=b[c]?a.merge(b[c],m[c]):m[c]);m=a.extend(m,b),m.minWidth.sort(i),m.maxWidth.sort(h),m.minHeight.sort(i),m.maxHeight.sort(h);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in m[d])if(m[d].hasOwnProperty(e)){var g=window.matchMedia("("+t[d]+": "+(1/0===m[d][e]?1e5:m[d][e])+m.unit+")");g.addListener(f),s[d][m[d][e]]=g}}f()}function d(a,b){var c=p.matchMedia(a),d=j(c.media);r[d]||(r[d]={mq:c,active:!0,enter:[],leave:[]},r[d].mq.addListener(g));for(var e in b)b.hasOwnProperty(e)&&r[d].hasOwnProperty(e)&&r[d][e].push(b[e]);g(r[d].mq)}function e(){q={unit:m.unit};for(var a in t)if(t.hasOwnProperty(a))for(var b in s[a])if(s[a].hasOwnProperty(b)&&s[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!q[a]||c<q[a])&&(q[a]=c):(!q[a]||c>q[a])&&(q[a]=c)}}function f(){e(),o.trigger(n.mqChange,[q])}function g(a){var b=j(a.media),c=r[b],d=a.matches?n.enter:n.leave;if(c&&c.active||!c.active&&a.matches){for(var e in c[d])c[d].hasOwnProperty(e)&&c[d][e].apply(c.mq);c.active=!0}}function h(a,b){return b-a}function i(a,b){return a-b}function j(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").trim()}function k(){return q}var l=b.Plugin("mediaquery",{utilities:{_initialize:c,state:k,bind:d},events:{mqChange:"mqchange"}}),m={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},n=a.extend(l.events,{enter:"enter",leave:"leave"}),o=b.$window,p=o[0],q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);