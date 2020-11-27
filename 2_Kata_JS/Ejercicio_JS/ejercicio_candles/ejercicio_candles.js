const candles = (candle, age) => {
  if (candle > age) {
    console.log("There are more candles on the cake than the age of the kid");
  } else if (candle === age) {
    console.log("You have the correct amount of candles, for the kid's age.");
  } else {
    console.log("You should get more candles for the cake.");
  }
  const done = console.log("Done");
  return done;
};

candles(5, 3);
