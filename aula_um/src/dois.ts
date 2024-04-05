function converter(array:number) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    res[i] = "" + array[i];
  }
  return res;
}
const vetor = [5, 3, 1, 8, 2];
console.log("Resultado:", converter(vetor));
