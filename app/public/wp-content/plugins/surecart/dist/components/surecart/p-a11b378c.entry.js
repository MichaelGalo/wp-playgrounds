import{r as e,c as i,h as t,F as s,H as r}from"./p-e97fde0a.js";import{i as o}from"./p-6ec14893.js";import{g as l}from"./p-46b57a87.js";import{f as c}from"./p-d1f5a7ef.js";import{o as a}from"./p-322d462c.js";import"./p-3f6362a4.js";import"./p-07b1b1ed.js";import"./p-d7296e4c.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";const n=":host{display:block}sc-form{width:100%}.selected-price{display:flex;align-items:center;gap:var(--sc-spacing-small);flex-wrap:wrap}.selected-price__wrap{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--sc-spacing-xx-small);color:var(--sc-selected-price-color, var(--sc-color-gray-800));line-height:1}.selected-price__price{font-size:var(--sc-font-size-xxx-large);font-weight:var(--sc-font-weight-bold);white-space:nowrap}.selected-price__interval{font-weight:var(--sc-font-weight-bold);opacity:0.65;white-space:nowrap}.selected-price__scratch-price{opacity:0.65;font-weight:var(--sc-font-weight-normal);text-decoration:line-through}";const d=n;const p=class{constructor(t){e(this,t);this.scUpdateLineItem=i(this,"scUpdateLineItem",7);this.productId=undefined;this.showInput=undefined;this.adHocAmount=undefined}lineItem(){return l(this.productId)}componentWillLoad(){a("checkout",(()=>{var e,i,t;this.adHocAmount=((e=this.lineItem())===null||e===void 0?void 0:e.ad_hoc_amount)||((t=(i=this.lineItem())===null||i===void 0?void 0:i.price)===null||t===void 0?void 0:t.amount)}))}updatePrice(){var e,i,t;this.showInput=false;if(!this.adHocAmount&&this.adHocAmount!==0)return;if(this.adHocAmount===((e=this.lineItem())===null||e===void 0?void 0:e.ad_hoc_amount))return;this.scUpdateLineItem.emit({price_id:(t=(i=this.lineItem())===null||i===void 0?void 0:i.price)===null||t===void 0?void 0:t.id,quantity:1,ad_hoc_amount:this.adHocAmount})}handleShowInputChange(e){if(e){setTimeout((()=>{this.input.triggerFocus()}),50)}}onSubmit(e){e.preventDefault();e.stopImmediatePropagation();this.updatePrice()}render(){var e,i,l,a,n,d;const p=(e=this.lineItem())===null||e===void 0?void 0:e.price;const u=(i=this.lineItem())===null||i===void 0?void 0:i.variant;if(!p)return t(r,{style:{display:"none"}});return t("div",{class:{"selected-price":true}},this.showInput?t("sc-form",{onScSubmit:e=>this.onSubmit(e),onScFormSubmit:e=>{e.preventDefault();e.stopImmediatePropagation()}},t("sc-price-input",{ref:e=>this.input=e,size:"large","currency-code":(p===null||p===void 0?void 0:p.currency)||"usd",min:p===null||p===void 0?void 0:p.ad_hoc_min_amount,max:p===null||p===void 0?void 0:p.ad_hoc_max_amount,placeholder:"0.00",required:true,value:(a=(l=this.adHocAmount)===null||l===void 0?void 0:l.toString)===null||a===void 0?void 0:a.call(l),onScInput:e=>this.adHocAmount=parseFloat(e.target.value),onKeyDown:e=>{if(e.key==="Enter"){this.onSubmit(e)}}},t("sc-button",{slot:"suffix",type:"link",submit:true},wp.i18n.__("Update","surecart")))):t(s,null,t("div",{class:"selected-price__wrap"},t("span",{class:"selected-price__price","aria-label":wp.i18n.__("Product price","surecart")},(p===null||p===void 0?void 0:p.scratch_amount)>p.amount&&t(s,null,t("sc-format-number",{class:"selected-price__scratch-price",part:"price__scratch",type:"currency",currency:p===null||p===void 0?void 0:p.currency,value:p===null||p===void 0?void 0:p.scratch_amount})," "),t("sc-format-number",{type:"currency",currency:p===null||p===void 0?void 0:p.currency,value:((n=this.lineItem())===null||n===void 0?void 0:n.ad_hoc_amount)!==null?(d=this.lineItem())===null||d===void 0?void 0:d.ad_hoc_amount:(u===null||u===void 0?void 0:u.amount)||(p===null||p===void 0?void 0:p.amount)})),t("span",{class:"selected-price__interval","aria-label":wp.i18n.__("Price interval","surecart")},o(p,{labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))),(p===null||p===void 0?void 0:p.ad_hoc)&&!c()&&t("sc-button",{class:"selected-price__change-amount",type:"primary",size:"small",onClick:()=>this.showInput=true},t("sc-icon",{name:"edit",slot:"prefix"}),wp.i18n.__("Change Amount","surecart"))))}static get watchers(){return{showInput:["handleShowInputChange"]}}};p.style=d;export{p as sc_product_selected_price};
//# sourceMappingURL=p-a11b378c.entry.js.map