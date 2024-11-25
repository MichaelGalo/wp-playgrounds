import{newSpecPage}from"@stencil/core/testing";import{ScSubscriptionReactivate}from"../sc-subscription-reactivate";import{h}from"@stencil/core";describe("sc-subscription-reactivate",(()=>{it("renders",(async()=>{const t=await newSpecPage({components:[ScSubscriptionReactivate],html:"<sc-subscription-reactivate open></sc-subscription-reactivate>"});expect(t.root).toMatchSnapshot()})),it("displays the correct subscription information",(async()=>{const t=await newSpecPage({components:[ScSubscriptionReactivate],template:()=>h("sc-subscription-reactivate",{open:!0,subscription:{id:"test",current_period_end_at:1696157610,price:{amount:100},currency:"USD"}})});expect(t.root).toMatchSnapshot()}))}));