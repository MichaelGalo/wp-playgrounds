import{h}from"@stencil/core";export class ScTabGroup{constructor(){this.tabs=[],this.panels=[],this.activeTab=void 0}componentDidLoad(){this.syncTabsAndPanels(),this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),this.mutationObserver=new MutationObserver((()=>{this.syncTabsAndPanels()})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver.disconnect()}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()}setAriaLabels(){this.tabs.map((e=>{const t=this.panels.find((t=>t.name===e.panel));t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))}))}handleClick(e){const t=e.target.closest("sc-tab");(null==t?void 0:t.closest("sc-tab-group"))===this.el&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sc-tab");if((null==t?void 0:t.closest("sc-tab-group"))!==this.el)return!0;if(["Enter"," "].includes(e.key)&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"}),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=document.activeElement;if(t&&"sc-tab"===t.tagName.toLowerCase()){let a=this.tabs.indexOf(t);"Home"===e.key?a=0:"End"===e.key?a=this.tabs.length-1:"ArrowUp"===e.key?a=Math.max(0,a-1):"ArrowDown"===e.key&&(a=Math.min(this.tabs.length-1,a+1)),this.tabs[a].triggerFocus({preventScroll:!0}),e.preventDefault()}}}setActiveTab(e,t){if(t=Object.assign({emitEvents:!0,scrollBehavior:"auto"},t),e&&e!==this.activeTab&&!e.disabled){const a=this.activeTab;this.activeTab=e,this.tabs.map((e=>e.active=e===this.activeTab)),this.panels.map((e=>e.active=e.name===this.activeTab.panel)),t.emitEvents&&(a&&this.scTabHide.emit(a.panel),this.scTabShow.emit(this.activeTab.panel))}}getActiveTab(){return this.getAllTabs().find((e=>e.active))}getAllChildren(){const e=this.el.shadowRoot.querySelectorAll("slot"),t=["sc-tab","sc-tab-panel"];return Array.from(e).map((e=>{var t;return null===(t=null==e?void 0:e.assignedElements)||void 0===t?void 0:t.call(e,{flatten:!0})})).flat().reduce(((e,t)=>{var a;return e.concat(t,[...(null===(a=null==t?void 0:t.querySelectorAll)||void 0===a?void 0:a.call(t,"*"))||[]])}),[]).filter((e=>{var a,s;return t.includes(null===(s=null===(a=null==e?void 0:e.tagName)||void 0===a?void 0:a.toLowerCase)||void 0===s?void 0:s.call(a))}))}getAllTabs(e=!1){return this.getAllChildren().filter((t=>e?"sc-tab"===t.tagName.toLowerCase():"sc-tab"===t.tagName.toLowerCase()&&!t.disabled))}getAllPanels(){return this.getAllChildren().filter((e=>"sc-tab-panel"===e.tagName.toLowerCase()))}render(){return h("div",{key:"4615c84a4e03e38e71f17d18ee83c881c3fa270e",part:"base",class:{"tab-group":!0},onClick:e=>this.handleClick(e),onKeyDown:e=>this.handleKeyDown(e)},h("div",{key:"129980bb4d68e7d3234ca8f0c538ecf88b072a64",class:"tab-group__nav-container",part:"nav"},h("div",{key:"5732db586ad42f62d019a67c72e5ca012a0a3899",class:"tab-group__nav"},h("div",{key:"e74e2bd5e5edd8ddb55b2b889e2d9fdcd3a134d8",part:"tabs",class:"tab-group__tabs",role:"tablist"},h("slot",{key:"e911d6c40c8c0d08fa8e2bbc161e65e4ada1d807",onSlotchange:()=>this.syncTabsAndPanels(),name:"nav"})))),h("div",{key:"17ef1d5e0e4007acfc2d807be1fe3aa322b9dd99",part:"body",class:"tab-group__body"},h("slot",{key:"c8e6d80081395a64b853810e0fb5a68a48552343",onSlotchange:()=>this.syncTabsAndPanels()})))}static get is(){return"sc-tab-group"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-tab-group.scss"]}}static get styleUrls(){return{$:["sc-tab-group.css"]}}static get states(){return{activeTab:{}}}static get events(){return[{method:"scTabHide",name:"scTabHide",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}},{method:"scTabShow",name:"scTabShow",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}}]}static get elementRef(){return"el"}}