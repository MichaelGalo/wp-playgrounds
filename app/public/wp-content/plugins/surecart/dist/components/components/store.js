import{g as getSerializedState}from"./utils.js";import{c as createStore}from"./index3.js";const{upsell:upsell}=getSerializedState(),store=createStore({upsell:null,product:null,line_item:null,checkout_id:null,checkout:null,form_id:null,busy:!1,disabled:!1,success_url:null,text:{success:{title:"",description:"",button:""}},...upsell},((e,t)=>JSON.stringify(e)!==JSON.stringify(t))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store;export{on as a,dispose as d,forceUpdate as f,onChange as o,state as s};