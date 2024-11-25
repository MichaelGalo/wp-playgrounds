"use strict";const watchers=require("./watchers-cb566474.js"),mutations$1=require("./mutations-19357660.js"),mutations=require("./mutations-6484d4a1.js"),addQueryArgs=require("./add-query-args-49dcb630.js"),submitCartForm=async e=>{var t,o,r,d,i,a;const s=watchers.state[e];if(s&&(null===(t=s.selectedPrice)||void 0===t?void 0:t.id)&&(!(null===(o=s.selectedPrice)||void 0===o?void 0:o.ad_hoc)||null!==s.adHocAmount&&void 0!==s.adHocAmount))try{watchers.setProduct(e,{busy:!0}),await mutations.addCheckoutLineItem({price:null===(r=s.selectedPrice)||void 0===r?void 0:r.id,quantity:Math.max((null===(d=s.selectedPrice)||void 0===d?void 0:d.ad_hoc)?1:s.quantity,1),...(null===(i=s.selectedPrice)||void 0===i?void 0:i.ad_hoc)?{ad_hoc_amount:s.adHocAmount}:{},variant:null===(a=s.selectedVariant)||void 0===a?void 0:a.id}),mutations$1.toggleCart(!0),watchers.setProduct(e,{dialog:null})}catch(e){throw console.error(e),watchers.state.error=e,e}finally{watchers.setProduct(e,{busy:!1})}},getProductBuyLink=(e,t,o={})=>{var r,d,i,a,s,c,l;const u=watchers.state[e];if(u&&(null===(r=u.selectedPrice)||void 0===r?void 0:r.id)&&(!(null===(d=u.selectedPrice)||void 0===d?void 0:d.ad_hoc)||u.adHocAmount||0===u.adHocAmount))return addQueryArgs.addQueryArgs(t,{line_items:[{price:null===(i=u.selectedPrice)||void 0===i?void 0:i.id,quantity:Math.max((null===(a=u.selectedPrice)||void 0===a?void 0:a.ad_hoc)?1:u.quantity,1),...(null===(s=u.selectedPrice)||void 0===s?void 0:s.ad_hoc)?{ad_hoc_amount:u.adHocAmount}:{},...(null===(c=u.selectedVariant)||void 0===c?void 0:c.id)?{variant:null===(l=u.selectedVariant)||void 0===l?void 0:l.id}:{}}],...o})},getAdditionalErrorMessages=e=>((null==e?void 0:e.additional_errors)||[]).map((e=>e.message)),getTopLevelError=e=>{var t;return"checkout.invalid"===(null==e?void 0:e.code)&&(null===(t=getAdditionalErrorMessages(e))||void 0===t?void 0:t.length)?"":null==e?void 0:e.message};exports.getAdditionalErrorMessages=getAdditionalErrorMessages,exports.getProductBuyLink=getProductBuyLink,exports.getTopLevelError=getTopLevelError,exports.submitCartForm=submitCartForm;