import{g as getQueryArgs,b as buildQueryString}from"./add-query-args.js";function getQueryArg(r,e){return getQueryArgs(r)[e]}function removeQueryArgs(r,...e){const t=r.indexOf("?");if(-1===t)return r;const u=getQueryArgs(r),g=r.substr(0,t);e.forEach((r=>delete u[r]));const s=buildQueryString(u);return s?g+"?"+s:g}export{getQueryArg as g,removeQueryArgs as r};