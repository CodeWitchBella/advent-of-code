// part 1
(() => {
let map = document.body.innerText.trim().split('\n').map(v => v.split('').map(v => +v))
let map2 = map.map(v => v.map((v) => ' '))

let visible = 0
for(let y = 0; y < map.length; ++y) {
	for(let x = 0; x <  map.length; ++x) {
    const v = isVisible(x,y,map[y][x])
    if(v) {
      visible++
      map2[y][x] = v
    }
  }
}
function isVisible(x,y,val) {
	for(let i = 0;; i++) {
    if(i === x) return '<'
    if(map[y][i] >= val) break
	}
  for(let i = x+1;; i++) {
    const test = map[y][i]
    if(test === undefined) return '>'
    if(test >= val) break
	}
  for(let i = 0;; i++) {
    if(i === y) return '^'
    if(map[i][x] >= val) break
	}
  for(let i = y+1;; i++) {
    const test = map[i]?.[x]
    if(test === undefined) return 'v'
    if(test >= val) break
	}
  return false
}
console.log(map2.map(v => v.join('')).join('\n'))
return visible
})()
// part 2
(() => {
let map = document.body.innerText.trim().split('\n').map(v => v.split('').map(v => +v))
let map2 = map.map(v => v.map((v) => ' '))

let max = 0
for(let y = 0; y < map.length; ++y) {
	for(let x = 0; x <  map.length; ++x) {
    const v = score(x,y,map[y][x])
    map2[y][x] = v
    max = Math.max(max, v)
  }
}
console.log(map2.map(v => v.join('\t')).join('\n'))
return max
function score(x,y,val) {
  let score = 1
	for(let i = x-1;; i--) {
    const test = map[y][i]
    if(test === undefined) {
      score *= Math.max(1, x)
      break
    }
    if(test >= val) {
      score *= x-i
      break
    }
	}
  if(score <= 0) {
    console.log(x,y,score)
    throw 'fuck1'
  }
  for(let i = x+1;; i++) {
    const test = map[y][i]
    if(test === undefined) {
      score *= Math.max(1, i-x-1)
      break
    }
    if(test >= val) {
      score *= i-x
      break
    }
	}
  if(score <= 0) {
    console.log(x,y,score)
    throw 'fuck2'
  }
  for(let i = y-1;; i--) {
    const test = map[i]?.[x]
    if(test === undefined) {
      score *= Math.max(1, y)
      break
    }
    if(test >= val) {
      score *= y-i
      break
    }
	}
  if(score <= 0) {
    console.log(x,y,score)
    throw 'fuck3'
  }
  for(let i = y+1;; i++) {
    const test = map[i]?.[x]
    if(test === undefined) {
      score *= Math.max(1, i-y-1)
      break
    }
    if(test >= val) {
      score *= i-y
      break
    }
	}
  if(score <= 0) {
    console.log(x,y,score)
    throw 'fuck4'
  }
  return score
}
})()