// part 1, paste this into browser console, reconstructed from memory since
// I could not find the original. Might be less hacky than original
document.body.innerText.split('\n\n').map(v => v.split('\n').reduce((a,b) => a+(+b),0)).reduce((a,b)=>Math.max(a,b))
// part 2
document.body.innerText.split('\n\n').map(v => v.split('\n').reduce((a,b) => a+(+b),0)).sort().slice(-3).reduce((a,b)=>a+b)
