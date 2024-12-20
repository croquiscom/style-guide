/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-expressions */

export {};

// arrow-parens:always
(k: number) => k;

// comma-dangle:always-multiline
const my_obj = {
  a: 1,
  b: 2,
};

// curly:all
if (console) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
  console.log('ok');
}

// dot-notation
const foo = { bar: 1 };
foo.bar;

// eqeqeq:always
0 === 0; // eslint-disable-line @typescript-eslint/no-unnecessary-condition

// new-parens:always
new String();

// no-cond-assign
const a = 1;
const b = a + 1;
if (a === b) {
  //
}

// no-constant-condition
const x = 1;
if (x === 1) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
  //
}

// no-multiple-empty-lines

// no-shadow
() => {
  const foo_inner = 10;
};

// no-var
let my_var = 1;
my_var = 2;

// object-shorthand
const o = { my_obj, foo2: foo };

// one-var
let var1: number | undefined;
let var2: number | undefined;

// prefer-const
const my_const = 1;

// quotes:single
('hello');
// quotes:avoidEscape
("my 'single' string");

// radix:as-needed
parseInt('071');

// @typescript-eslint/array-type:array-simple
const at1: string[] = [];
const at2: Array<string | number> = [];

// object-curly-spacing
const object_without_curly_spacing = { var1, var2 };
// space-infix-ops
const infix = 1 + 2;
// comma-spacing
const array_without_comma_spacing = [var1, var2];
// semi
const statement_without_semi = 1;
// semi-spacing
for (let i = 0; i < 10; i++) {
  /**/
}
// arrow-spacing
const arrow_function = () => {
  return 1;
};
// space-before-blocks
function normal_function() {
  return 1;
}

// @typescript-eslint/no-unnecessary-condition
function fooFn(arg: string) {
  // Necessary, since foo might be ''.
  if (arg) {
    //
  }
}

/* eslint-enable @typescript-eslint/no-unused-vars */
function _unusedFunc(_unused_arg: number) {
  const _unused_var: number = 1;
}
