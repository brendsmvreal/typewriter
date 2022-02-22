const sentence = "hello there from lighthouse labs";
let inicialTime = 0;
for (const char of sentence) {
  inicialTime += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, inicialTime)
};
setTimeout(() => {
  console.log("");
}, inicialTime + 50);