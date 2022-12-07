// part 1
(() => {const cmds = document.body.innerText.trim().split('$').filter(Boolean).map(v => v.trim())
let dirs = []
let dir = mkdir()
for(const cmd of cmds) {
 if(cmd.startsWith('ls')) {
   dir.directSize = cmd.split(/[ \n]/).map(v => +v).filter(v => !Number.isNaN(v)).reduce((a,b) => a+b, 0)
 } else if(cmd === 'cd ..') {
   dir = dir.parent
 } else {
   dir = mkdir(dir)
   dirs.push(dir)
 }
}
function mkdir(parent) {
 return { directSize: 0, size: 0, parent }
}
for(const dir of dirs.reverse()) {
  dir.size += dir.directSize
  if(dir.parent) {
    dir.parent.size += dir.size
  }
}
return dirs.map(d => d.size).filter(v => v <= 100000).reduce((a,b) => a+b)
       })()

// part 2
(() => {const cmds = document.body.innerText.trim().split('$').filter(Boolean).map(v => v.trim())
let dirs = []
let dir = mkdir()
for(const cmd of cmds) {
 if(cmd.startsWith('ls')) {
   dir.directSize = cmd.split(/[ \n]/).map(v => +v).filter(v => !Number.isNaN(v)).reduce((a,b) => a+b, 0)
 } else if(cmd === 'cd ..') {
   dir = dir.parent
 } else {
   dir = mkdir(dir)
   dirs.push(dir)
 }
}
function mkdir(parent) {
 return { directSize: 0, size: 0, parent }
}
for(const dir of dirs.reverse()) {
  dir.size += dir.directSize
  if(dir.parent) {
    dir.parent.size += dir.size
  }
}
let sum = dirs.slice(-1)[0].size
let maxSize = 40000000
let minDelete = sum - maxSize
return dirs.map(d => d.size).filter(v => v >= minDelete).sort((a,b) => a-b)[0]
       })()