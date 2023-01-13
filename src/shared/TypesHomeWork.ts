//1
function concat(first: string, second: string): string {
  return first + second
}
//2
const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
//Need to write a interface to describe a data

interface IMyHometask{
  howIDoIt: string,
  simeArray: [number | string]
  withData: [{
    howIDoIt: string,
    simeArray: [string | number]
  }]
}


//3
//With generic typysate method reduce

