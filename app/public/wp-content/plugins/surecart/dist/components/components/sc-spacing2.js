import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";const scSpacingCss=":host{display:block}::slotted(*:not(:last-child)){margin-bottom:var(--spacing)}",ScSpacingStyle0=scSpacingCss,ScSpacing=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return h(Host,{key:"5f3c4a8928871fd96d152719324e577f423583dc"},h("slot",{key:"7bde8828c21dfd2711ebc5364b1c7dda7d1773a5"}))}static get style(){return ScSpacingStyle0}},[1,"sc-spacing"]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-spacing"].forEach((e=>{"sc-spacing"===e&&(customElements.get(e)||customElements.define(e,ScSpacing))}))}export{ScSpacing as S,defineCustomElement as d};