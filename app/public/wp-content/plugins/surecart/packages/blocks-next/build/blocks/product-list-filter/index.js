!function(){"use strict";var e=window.wp.blocks,t=window.React,n=window.wp.primitives,a=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M12 4 4 19h16L12 4zm0 3.2 5.5 10.3H12V7.2z"})),o=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components,c=window.wp.coreData;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(null,arguments)}var i=JSON.parse('{"UU":"surecart/product-list-filter"}');(0,e.registerBlockType)(i.UU,{icon:a,edit:e=>{let{attributes:{taxonomy:t,label:n},setAttributes:a}=e;const i=(0,r.useBlockProps)({className:"sc-dropdown"}),{records:u}=(0,c.useEntityRecords)("root","taxonomy",{per_page:-1}),w=(u??[]).filter((e=>e.types.includes("sc_product")&&e?.visibility.public));return React.createElement("div",s({},i,{role:"menu",tabIndex:"-1"}),React.createElement(r.InspectorControls,null,React.createElement(l.PanelBody,{title:(0,o.__)("Settings")},Array.isArray(w)&&React.createElement(l.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,o.__)("Taxonomy"),options:w.map((e=>({label:e.name,value:e.slug}))),value:t,onChange:e=>a({taxonomy:e,label:w.find((t=>t.slug===e))?.name??(0,o.__)("Filter","surecart")})}))),React.createElement("button",{className:"sc-dropdown__trigger sc-button sc-button--standard sc-button--medium sc-button--caret sc-button--has-label sc-button--text"},React.createElement("span",{className:"sc-button__label"},React.createElement(r.RichText,{value:n??(0,o.__)("Filter","surecart"),withoutInteractiveFormatting:!0,allowedFormats:[],onChange:e=>a({label:e})})),React.createElement("span",{className:"sc-button__caret"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},React.createElement("polyline",{points:"6 9 12 15 18 9"})))))}})}();