//Class

//Old constructor example
// function OldConstructor(fieldValue) {
//   this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function () {
//   return this.field
// }

// const instance = new OldConstructor();
// instance.method()

//New constructor  

class Constructor {
  public field: number = 123;

  /*privat| public | protected
  *is acces modificator 
  */

  contructor(arg: number) {
    this.field = arg
  }

  public publicMethod(): number {
    return this.field
  }

  protected protectedMethod() {
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }

} 

class Child extends Constructor{
  /*in typescript we cant modifies acces modificator in down leve
   * 1 public
   * 2 protected
   * 3 privat
   * if class field is protected || privat we can modified to public
   * but cant modify if field is public to protected || privat
   */

  constructor() {
    super()
  }
}



//Abstract Class

abstract class AbstractClass {
  // abstact classes is a template for other classes 
  // contain description of field and methodes but dont 
  // have implementation
  public abstract abstractField: number;

  public abstract abstractMethod(): number;
  //abstract method cant have a implementation

  protected protectedMethod() {
    return this.abstractField + 10;
  }
}

//For implementattion a field an methodes of abstract
// classes we need create a new class which are extends

class NewChild extends AbstractClass{
  //here we implement all field and methodes
  public abstractField: number = 12;
  public abstractMethod(): number {
    throw new Error("Method not implemented.");
  }

}


interface MyInterface<T> {
  field: string,
  method(): string
}

class NewClass<T> implements MyInterface<T>{
  //with keyword implement we can obligate to implement Interface
  //keyword implement work similar with abstract classes
  //Class can be a generic \
  //We can send generic in implemented interface
  field: string = '1';
  method(): string {
    throw new Error("Method not implemented.");
  }
  
}


//React Class component is a generic