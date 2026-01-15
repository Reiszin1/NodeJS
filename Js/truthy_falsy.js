const x = ''; // False
const y = 0; // False
const z = null; // False
const a = undefined; // False
const b = NaN; // False
const c = false; // False
const d = true; // True
const e = '0'; // True
const f = 'false'; // True
const g = 'true'; // True
const h = 'null'; // True

const list = []; // False
const object = {}; // False

console.log(!!list);
console.log(!!object);
console.log(!!x);