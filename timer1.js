const args = process.argv.slice(2);

for (const arg of args) {
  setTimeout(() => {
    if (args >= 0)
      process.stdout.write('\x07');
  }, arg * 1000);
}