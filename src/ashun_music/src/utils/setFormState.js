export function setFormState(name, stateArr, newVal) {
  const index = stateArr.findIndex((val) => val.name === name);
  if (index === -1) return;
  stateArr[index].setState(newVal);
}
