import {fizzbuzz} from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia geneerar el mismo num si no sigue la regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("deberia geneerar otro num que no sige una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  it("deberia geneerar otro num que sige una regla", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});


