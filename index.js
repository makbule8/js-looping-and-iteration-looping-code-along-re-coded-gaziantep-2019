// Code your solutions in this file
function printBadges(badges) {
  badges.forEach((name, i) => {
    console.log(`Welcome ${name}! You are employee #${i + 1}.`)
  })
  return badges
}

function tailsNeverFails() {
  tailsCount = 0

  flip = Math.random()

  while (flip >= 0.5) {
    tailsCount ++
    flip = Math.random()
  }

  return `You got ${tailsCount} tails in a row!`
}
© 2019 GitHub, Inc.