import{r as s,h as i,H as e}from"./p-e97fde0a.js";const t=":host{display:inline-block}";const d=t;const p={unshipped:wp.i18n.__("Not Shipped","surecart"),shipped:wp.i18n.__("Shipped","surecart"),delivered:wp.i18n.__("Delivered","surecart")};const l={unshipped:"default",shipped:"info",delivered:"success"};const n=class{constructor(i){s(this,i);this.status=undefined;this.size="medium";this.pill=false;this.clearable=false}render(){if(this.status==="unshippable"){return i(e,{style:{display:"none"}})}return i("sc-tag",{type:l===null||l===void 0?void 0:l[this===null||this===void 0?void 0:this.status],pill:this.pill},(p===null||p===void 0?void 0:p[this.status])||this.status)}};n.style=d;export{n as sc_fulfillment_shipping_status_badge};
//# sourceMappingURL=p-ac5c366f.entry.js.map