// part 1, reconstructed from memory since
// I could not find the original. Might be less hacky than original
document.body.innerText.trim().split('\n').map(v => ({
    'A X': 1+3,
    'A Y': 2+6,
    'A Z': 3+0,
    'B X': 1+0,
    'B Y': 2+3,
    'B Z': 3+6,
    'C X': 1+6,
    'C Y': 2+0,
    'C Z': 3+3,
})[v]).reduce((a,b)=>a+b)
// part 2
document.body.innerText.trim().split('\n').map(v => ({
    'A X': 0+3,
    'A Y': 3+1,
    'A Z': 6+2,
    'B X': 0+1,
    'B Y': 3+2,
    'B Z': 6+3,
    'C X': 0+2,
    'C Y': 3+3,
    'C Z': 6+1,
})[v]).reduce((a,b)=>a+b)
