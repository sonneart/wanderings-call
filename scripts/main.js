console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function () {
  console.log(
    "This code runs once the Foundry VTT software begins its initialization workflow."
  );
});

Hooks.on("ready", async function () {
  // Construct the Roll instance
  let r = new Roll("2d20kh + @prof + @strMod", { prof: 2, strMod: 4 });

  // The parsed terms of the roll formula
  console.log(r.terms); // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]

  // Execute the roll
  await r.evaluate();

  // The resulting equation after it was rolled
  console.log(r.result); // 16 + 2 + 4

  // The total resulting from the roll
  console.log(r.total); // 22
});
