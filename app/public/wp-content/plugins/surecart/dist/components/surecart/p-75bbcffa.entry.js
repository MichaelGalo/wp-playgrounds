import{r as e,h as s,H as t}from"./p-e97fde0a.js";import{g as i}from"./p-e9824b3f.js";import{f as p}from"./p-d1f5a7ef.js";import"./p-93127aa7.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-322d462c.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-d7296e4c.js";import"./p-6ec14893.js";const r="sc-express-payment{display:block}";const o=r;const a=class{constructor(s){e(this,s);this.processor=undefined;this.dividerText=undefined;this.debug=undefined;this.hasPaymentOptions=undefined}onPaymentRequestLoaded(){this.hasPaymentOptions=true}renderStripePaymentRequest(){const{processor_data:e}=i("stripe")||{};return s("sc-stripe-payment-request",{debug:this.debug,stripeAccountId:e===null||e===void 0?void 0:e.account_id,publishableKey:e===null||e===void 0?void 0:e.publishable_key})}render(){return s(t,{key:"03d79ade65f62e194567328e2110be7685c833ce",class:{"is-empty":!this.hasPaymentOptions&&!this.debug}},this.renderStripePaymentRequest(),(this.hasPaymentOptions||this.debug)&&s("sc-divider",{key:"57d20315a41736e2bb259182052a9217c8bd82c4",style:{"--spacing":"calc(var(--sc-form-row-spacing)/2)"}},this.dividerText),!!p()&&s("sc-block-ui",{key:"1fca0a7a58721ae3ec8569744c609be941ef52e7"}))}};a.style=o;export{a as sc_express_payment};
//# sourceMappingURL=p-75bbcffa.entry.js.map