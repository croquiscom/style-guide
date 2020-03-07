export { };

// arrow-parens:always
k => k

// comma-dangle:always-multiline
const my_obj = {
  a: 1,
  b: 2
};

// curly:all
if (console) console.log('ok');

// dot-notation
const foo: any = {};
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

// no-eval
eval('var a = 0');

// no-multiple-empty-lines


// no-shadow
() => {
  const foo = 10;
}
// no-shadow:builtinGlobals
const Object = 1;

// no-var
var my_var = 1;
my_var = 2;

// object-shorthand
const o = { my_obj: my_obj, foo2: foo };

// one-var
let var1: any, var2: any;

// prefer-const
let my_const = 1;

// quotes:single
const my_str = "hello";

// radix:as-needed
parseInt('071', 10);
