// part 1
(() => {
  let input = document.body.innerText.trim()
  for(let i = 0; i < input.length - 3; ++i)
    if(new Set(input.slice(i, i+4).split('')).size === 4) return i+4
})()
// part 2
(() => {
  let input = document.body.innerText
  for(let i = 0; i < input.length - 13; ++i)
    if(new Set(input.slice(i, i+14).split('')).size === 14) return i+14
})()