export { };

// arrow-parens:always
k => k;

// comma-dangle:always-multiline
const my_obj = {
  a: 1,
  b: 2
};

// curly:all
if (console) console.log('ok');

// dot-notation
const foo = { bar: 1 };
foo['bar'];

// eqeqeq:always
0 == 0;

// new-parens:always
new String;

// no-cond-assign
const a = 1;
const b = a + 1;
if (a = b) {
  //
}

// no-constant-condition
if (true) {
  //
}

// no-eval
eval('var a = 0');

// no-multiple-empty-lines


// no-shadow
() => {
  const foo = 10;
};
// no-shadow:builtinGlobals
const Object = 1;

// no-var
var my_var = 1;
my_var = 2;

// object-shorthand
const o = { my_obj: my_obj, foo2: foo };

// one-var
let var1: number | undefined, var2: number | undefined;

// prefer-const
let my_const = 1;

// quotes:single
"hello";

// radix:as-needed
parseInt('071', 10);

// @typescript-eslint/array-type:array-simple
const at1: Array<string> = [];
const at2: (string | number)[] = [];

// object-curly-spacing
const object_without_curly_spacing = {var1, var2};
// space-infix-ops
const infix=1+2;
// comma-spacing
const array_without_comma_spacing = [var1,var2];
// semi
const statement_without_semi = 1
// semi-spacing
for (let i = 0;i < 10;i++) { /**/ }
// arrow-spacing
const arrow_function = ()=>{
  return 1;
};
// space-before-blocks
function normal_function(){
  return 1;
}
