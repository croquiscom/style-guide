/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-expressions */

export {};

// @typescript-eslint/explicit-function-return-type:off
function fun_rt() {
  //
}

// @typescript-eslint/no-explicit-any:off
const var_any: any = 1;

// @typescript-eslint/no-inferrable-types
const var_nit: number = 1;

// @typescript-eslint/no-non-null-assertion:off
const var_nna = { prop: 1 } as { prop: number } | null;
console.log(var_nna!.prop);

// @typescript-eslint/type-annotation-spacing
const var_tas1: number = Math.random();
const var_tas2: () => number = Math.random;
const var_tas3: new () => Error = Error;

// @typescript-eslint/no-use-before-define:functions
function f1(): number {
  return f2();
}
function f2(): number {
  return f1();
}

// quotes:allowTemplateLiterals
`abcd`;
