import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("counter contract", () => {
  it("should increment counter", () => {
    const result = simnet.callPublicFn("counter", "increment", [], wallet1);
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("should decrement counter", () => {
    simnet.callPublicFn("counter", "increment", [], wallet1);
    const result = simnet.callPublicFn("counter", "decrement", [], wallet1);
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("should prevent underflow", () => {
    const result = simnet.callPublicFn("counter", "decrement", [], wallet1);
    expect(result.result).toBeErr(Cl.uint(1));
  });
});
