const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

const arr = [];

for (var i=0;i<countries.length;i++){
  arr.push([countries[i],countries[i].slice(0,3),countries[i].length ])
}

console.table(arr);