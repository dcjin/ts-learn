let a = 3;

a = 'str'; // error

let b;

b = 3;
b = false;
b = 'str'; // work

let c = null;

c = 3;
c = true;
c = 'str'; // work

let d = undefined;

d = 3;
d = true;
d = {};
d = 'str'; // work