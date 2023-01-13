//Generic

const myArray: MyArray<number> = [1, 2, 3]
// here MyArray is a generic which we tipified in interface under

interface MyArray<T> {
  //T Generic is similar with a function argument but T is entery type
  [N: number]: T
  //Here we typified a map method for array
  map<U>(fn:(el:T, index: number, arr: MyArray<T>)=> U):MyArray<U> 
}


function identity<T>(arg: T): T {
  //<T> declare that function can receive any variable type and typescript auto identify this type
  return arg //this function will retrun a type what be included in argument
}

let result = identity(12) //return number type
let result2 = identity('dscs') //return string type


function getLen<T extends Array<any>>(arr: T): number{
  //<T extends Array<any>>
  //declare than function can receive any types which associated with array type
  return arr.length
}

getLen('ssss')// return type error even if string type have a .length method
getLen([1, '2', 3])// return type error even if string type have a .length method


//typisation with interface  + generic
interface IValueWithType<T> {
  type: string;
  value: T;
}

function withType<U>(arg: U): IValueWithType<U>{
  return {
    type: typeof arg,
    value: arg,
  }
}


const result34 = withType(123)

//Included generics

interface IExample<T> { 
  type: string,
  value: T,
  isEmpty: boolean,
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  //Omit<IExample<string>, 'isEmpty'> will be omited field isEmpty from IExample interface
  type: 'sdn'
}


const picked: Pick<IExample<number>, 'isEmpty'> = {
  //Pick<IExample<number>, 'isEmpty'> will pick only selected field from Interface 
  isEmpty: true
}


const partial: Partial<IExample<Object>> = {
  // Make all field in interface optional
  //Similar with 
  //type?: string
  //value?: arg
}











