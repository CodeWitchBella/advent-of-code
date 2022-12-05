// part 1, ze original
document.body.innerText.trim().split('\n').map(v => v.split('')).map(v => {
  let a = new Set(v.slice(v.length/2))
  for (const i of v.slice(0, v.length/2)) if(a.has(i)) return i
}).map(v => v.charCodeAt(0)).map(v => {
  if(v <= 'Z'.charCodeAt(0)) return 27+v-'A'.charCodeAt(0)
  return 1+v-'a'.charCodeAt(0)
}).reduce((a,b) => a+b)

// part 2
document.body.innerText.trim().split('\n').map(v => v.split('')).map((a, i, arr) => i%3===0?arr.slice(i,i+3):null).filter(Boolean).map(arr => {
  let a = new Set(arr[0])
  let b = new Set()
  for(let itm of arr[1]) if(a.has(itm)) b.add(itm)
  for(let itm of arr[2]) if(b.has(itm)) return itm
}).map(v => v.charCodeAt(0)).map(v => {
  if(v <= 'Z'.charCodeAt(0)) return 27+v-'A'.charCodeAt(0)
  return 1+v-'a'.charCodeAt(0)
}).reduce((a,b) => a+b)
