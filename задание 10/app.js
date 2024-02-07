// class Person { 
//     name; 
//     age; 
 
//     constructor(pName, pAge) { 
//         this.name = pName; 
//         this.age = pAge; 
//     } 
 
//     print() { 
//         console.log(this.name); 
//     } 
// } 
 
 
// class Company extends Person { 
//     company; 
 
//     constructor(e, pName, pAge) { 
//         super(pName, pAge); 
//         this.company = e; 
//     } 
 
//     work() { 
//         console.log(`${this.name} работает в компании ${this.company}`); 
//     } 
// } 
 
 
// const tom = new Person("Tom", 28); 
// const work = new Company("Россети", "Tom", 28); 
 
// tom.print(); 
// work.work();
//2
class Aseet{
    constructor(name,price){
        this.name = name
        this.price = price

    }

}
class FinancialAsset extends Aseet{
constructor(name,price,stock,bonds,profitability, investments){
    super(name,price)
    this.stock = stock
    this.bonds = bonds
    this.profitability = profitability
    this.investments = investments
}

}
class RealAsset extends Aseet{
    constructor(name,price,realEstate,equipment){
    super(name,price)
    this.realEstate = realEstate
    this.quequipment = equipment
    }
}
//3
class Animal{

}
// class 