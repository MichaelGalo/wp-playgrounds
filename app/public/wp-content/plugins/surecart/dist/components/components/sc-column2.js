import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";const scColumnCss=":host{display:block}::slotted(:not(.wp-block-spacer):not(:last-child):not(.is-empty):not(style)){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(:not(.wp-block-spacer):not(:last-child):not(.is-empty):not(style):not(.is-layout-flex)){display:block}",ScColumnStyle0=scColumnCss,ScColumn=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return h(Host,{key:"4d2fbfccbbc7e61957bc56aff3390796b49cfb7a"},h("slot",{key:"b7955e331c730811c6787d5d99d1846ac39c4459"}))}static get style(){return ScColumnStyle0}},[1,"sc-column"]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-column"].forEach((t=>{"sc-column"===t&&(customElements.get(t)||customElements.define(t,ScColumn))}))}export{ScColumn as S,defineCustomElement as d};