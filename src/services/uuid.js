function uuid() {
  const timestampPart = "" + new Date().getTime();
  const serialPart = "" + parseInt(Math.random() * 10000);
  const otherNumber = "" + parseInt(Math.random() * 10000);

  const uuid =
    timestampPart.substring(8) +
    serialPart.padStart(3, "0") +
    otherNumber.padStart(3, "0");

  return uuid;
}

export { uuid };
