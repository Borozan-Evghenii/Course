//JS Type                    //typeof

import { Type } from "typescript";

const str = 'string';        //typeof str      -> 'string'
const num = 2;               //typeof num      -> 'number'
const nan = NaN;             //typeof nan      -> 'number'
const obj = {};              //typeof obj      -> 'object'
const arr = [];              //typeof arr      -> 'object'
const nul = null;            //typeof nul      -> 'object'
const sym = Symbol();        //typeof sym      -> 'symbol'
const und = undefined;       //typeof und      -> 'undefined'
const _void = void 0;        //typeof _void    -> 'undefined'
const bool = true;           //typeof bool     -> 'boolean'
const fn = () => { };        //typeof fn       -> 'sunction'




//variable have only one type
let tsStr: string = 'string'

//Union Type const will have 2 types
const strOrNumber: string | number = '2'

//Type Alias was used when have many variable with same type or union type
type strOrNumberAlias = string | number;

const strOrNumber2: strOrNumberAlias = '2'; //using 1 alias for many var
const strOrNumber3: strOrNumberAlias = '2';
const strOrNumber4: strOrNumberAlias = '2';

//Array 

//Declare var wich contain only infinite array with number 
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [1, 2, 3];// declare with generic
//Declare union for infinite array
const unionArray: (string | number)[] = [1, 2, '3']
const unionArrayGeneric: Array<string | number> = [1, 2, '3']
//Declare type for finite array ( Tupple )
const myTuple: [number, string] = [1, '2']//tuple array can contain finit number of elements for wich will be declared type
 
//Class
//We can declare type with alias
const myObject: { a: number, b: string } = {
  a: 1,
  b: 'string'
} 

type myObjectAlias = {
  a: number, b: string
}

const myObject2: myObjectAlias = {
  a: 1,
  b: 'string'
} 

//but we can use interface
interface MyIterface {
  readonly a: number; //readonly does not allow modification
  b: string;
  c?: number[]; // optional type ( ? ) declaration is nor obligatory
}

const myObj: MyIterface = {
  a: 2,
  b: 'strind',
  c: [1,2]
}


//Index Signature can be created with interface

const ApiAnswer: IndexInterface = {
  key: 'ssss',
  key1: 'dcsc'
}

const val3 = ApiAnswer.randomkey

interface IndexInterface {
  [N: string]: string // declarate a index signature
}



//Function
//enum can be uset without value
enum Methods {
  add,
  sub
}
//enum can be uset with value
enum Methods2 {
  add = 'add',
  sub = 'sub'
}

function calculate(method: Methods, left : number, right: number): number{
  switch (method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
}

//arrow function type

//type arrow function with alias
type TypeFn = () => number; //most be used for function
const arrowFn: TypeFn = () => 'sd'
//type with interface
interface FnInterface {
  (a: number): void;
}
const arrowFn2: FnInterface = () => 'sd'


//typscript special type

type StrangeTsType = any | unknown | never

const any: any = 2 //type any require any types
const unknown: unknown = 2 //variable type is uncknoun and wait typisation

function neverFn(): never { // never declare a function wich dont be finnalyse
  throw new Error("my exception");
}







