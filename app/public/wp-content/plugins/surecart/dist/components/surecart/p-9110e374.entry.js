import{r as t}from"./p-e97fde0a.js";const s=":host{display:inline-block}";const i=s;const a=class{constructor(s){t(this,s);this.locale=undefined;this.value=0;this.unit="byte";this.display="short"}render(){if(isNaN(this.value)){return""}const t=["","kilo","mega","giga","tera"];const s=["","kilo","mega","giga","tera","peta"];const i=this.unit==="bit"?t:s;const a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1));const n=i[a]+this.unit;const e=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return new Intl.NumberFormat(this.locale,{style:"unit",unit:n,unitDisplay:this.display}).format(e)}};a.style=i;export{a as sc_format_bytes};
//# sourceMappingURL=p-9110e374.entry.js.map