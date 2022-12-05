// I got lazy with the parsing part...

// part 1.
(() => {
let stacks = [
 'TFVZCWSQ',
 "BRQ",
 'SMPQTZB',
 'HQRFVD',
 'PTSBDLGJ',
 'ZTRW',
 'JRFSNMQH',
 'WHFNR',
 'BRPQTZJ',
]

let lines = document.body.innerText.trim().split('\n').slice(10)
for(const line of lines) {
  let [a,b,c] = line.replace(/[^0-9]+/g, ' ').trim().split(' ').map(v => +v)
  b-=1
  c-=1
  stacks[c] = stacks[b].slice(0, a).split('').reverse().join('') + stacks[c]
  stacks[b] = stacks[b].slice(a)
  if(stacks.join('').includes('e')) return stacks
}
return stacks.map(v => v[0]).join('')
})()

// part 2.
// heh, turns out it was simpler than part one, because I can't read and solved
// this one already, before I solved part 1 correctly
(() => {
let stacks = [
 'TFVZCWSQ',
 "BRQ",
 'SMPQTZB',
 'HQRFVD',
 'PTSBDLGJ',
 'ZTRW',
 'JRFSNMQH',
 'WHFNR',
 'BRPQTZJ',
]

let lines = document.body.innerText.trim().split('\n').slice(10)
for(const line of lines) {
  let [a,b,c] = line.replace(/[^0-9]+/g, ' ').trim().split(' ').map(v => +v)
  b-=1
  c-=1
  stacks[c] = stacks[b].slice(0, a) + stacks[c]
  stacks[b] = stacks[b].slice(a)
  if(stacks.join('').includes('e')) return stacks
}
return stacks.map(v => v[0]).join('')
})()
