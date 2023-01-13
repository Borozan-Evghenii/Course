const array = [] as Array<number>; // array initial was any type
//with construction "as Array<number>" we forced retypisation to number Array
array.push(1);
array.push('1');


const bigObject = {
  'commit': {
    'id': '435789765fvbjknkmlkjbhvgcjfd',
    'short_id': '1234fdvsc2345',
    'title': 'Js Fix',
    'author_name': 'Example_user',
    'author_email': 'user@example.com',
    'created_at': '2014-02-27T10:27:00',
  },
  'commits': [{
    'id': '435789765fvbjknkmlkjbhvgcjfd',
    'short_id': '1234fdvsc2345',
    'title': 'Js Fix',
    'author_name': 'Example_user',
    'author_email': 'user@example.com',
    'created_at': '2014-02-27T10:27:00',
  }],
  'diffs': [{
    'old_path': 'files/js/application.js',
    'new_path': 'files/js/application.js',
    'a_mode': null,
    'new_file': false,
    
  }],
      'a_mode': null,
    'new_file': false,

}


type autoTypisation = typeof bigObject
//we save type alias from constant
//in typescript typeof return all tupes from object

const typeBigObject: Readonly<autoTypisation> = bigObject
//here we make all types field from bigObject readonly
//now we cant modify field value from bigObject
//now readonly is just commit | commits | diffs beacause up described readonly dont work recursive

type MyReadonly = {
  readonly [N in keyof autoTypisation]: autoTypisation[N]
  //[N in keyof autoTypisation]  autoTypisation here return union types from bigObject keyfield
  //autoTypisation[N] return union types from value type of keyfield

}


type CommitType = autoTypisation['commits']
//we can require only one needed type from bigObject
//here type alias return a type of field commit

//We can realise MyReadonly with generic


type MyReadonly2<T> = {
  readonly [N in keyof T]: T[N] // mapped types
  //[N in keyof autoTypisation]  autoTypisation here return union types from bigObject keyfield
  //autoTypisation[N] return union types from value type of keyfield
}

const some: MyReadonly2<autoTypisation> = {
  a_mode: null 
} 


//Analog of partial type

type MyPartial <T> = {
  [N in keyof T]? : T[N]
}

//Analog of pick type

type MyPick<T, K extends keyof T> = { 
  //Then we add "K extends keyof T" we limit keys for K with keys wich includes in T ( our interface )
  //now we cant add other value than the one interface contain
  //T require our interface
  //K is field name
  [N in K]: T[N]
  //N in cycle of K 
}

type picked = MyPick<autoTypisation, 'commit'| 'diffs'> 
type picked2 = MyPick<autoTypisation, 'sgvhb'>  // sgvhb dont contains in bigOlbject when return error


type ReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? ReadonlyDeep<T[N]> : T[N]
  //WE REQUIRE ALL TYPES FROM BIGobject if one field is extended( contain object ) with
  //object we require all them field else return all have field
}

//Remove readonly
type TSomeType = ReadonlyDeep<autoTypisation>;

//type inference
type RemoveReadonly<T> = T extends ReadonlyDeep<infer E> ? E : T;
//with infer we pray typescript to identify the generic argument and if argument is required return them else return readonly generic
