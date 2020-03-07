export { };

// arrow-parens:always
(k) => k

// comma-dangle:always-multiline
const my_obj = {
  a: 1,
  b: 2,
};

// curly:all
if (console) {
  console.log('ok');
}

// dot-notation
const foo: any = {};
foo.bar;

// eqeqeq:always
0 === 0;

// new-parens:always
new String();

// no-cond-assign
const a = 1;
const b = a + 1;
if (a === b) {
  //
}

// no-multiple-empty-lines

// no-shadow
() => {
  const foo_inner = 10;
}

// no-var
let my_var = 1;
my_var = 2;

// object-shorthand
const o = { my_obj, foo2: foo };

// one-var
let var1: any;
let var2: any;

// prefer-const
const my_const = 1;

// quotes:single
const my_str = 'hello';

// radix:as-needed
parseInt('071');
