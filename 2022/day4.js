// part1
document.body.innerText.trim().split('\n').map(line =>  line.split(',').map(a => a.split('-')).flat().map(v => +v)).filter(([a,b,c,d]) => {
return (a>=c&&a<=d&&b>=c&&b<=d)||(c>=a&&c<=b&&d>=a&&d<=b)
}).length

// part2
document.body.innerText.trim().split('\n').map(line =>  line.split(',').map(a => a.split('-')).flat().map(v => +v)).filter(([a,b,c,d]) => {
return (a>=c&&a<=d&&b>=c&&b<=d)||(c>=a&&c<=b&&d>=a&&d<=b)||(a>=c&&a<=d)||(b>=c&&b<=d)
}).length