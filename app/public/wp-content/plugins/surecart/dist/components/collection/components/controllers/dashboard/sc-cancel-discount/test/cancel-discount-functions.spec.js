import{getFormattedDiscount}from"../../../../../functions/price";import{replaceAmount}from"../functions";describe("sc-cancel-dialog",(()=>{it("Replaces the amount",(()=>{expect(replaceAmount("this is a {{ test }}.","result","test")).toBe("this is a result."),expect(replaceAmount("Take {{ amount }} off your next payment?",getFormattedDiscount({amount_off:200,currency:"usd"}))).toBe("Take $2.00 off your next payment?"),expect(replaceAmount("this is a {{test}}.","result1","test")).toBe("this is a result1.")}))}));