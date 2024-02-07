// class sum{
//     x
//     y
//     z
//     result
//     constructor(varX,varY,varZ){
//         this.x = varX
//         this.y = varY
//         this.z = varZ
//     }
//     print(){
//         this.result = this.x + (this.y * this.z)
//         console.log(`ваш результат - ${this.result}`)

//     }
// }
// const result = new sum(2,3,4)
// result.print()
// //dz
// class ZXC{
//     a
//     b
//     c
//     r
//     m
//     d

//     constructor(AA,BB){
//         this.a=AA
//         this.b=BB
//     }
//     name() {
//         this.c = this.a + this.b;
//          this.r = this.a - this.b;
//          this.m = this.a * this.b;
//          this.d = this.a / this.b;
      
//          if(c> (r && mul && d)){
//            return sum;
//         }
//          if(r > (c&& m && d)){
//            return  razn;
//         }
//         if(m > (c && r && d)){
//            return mul;
//         }
//         if(d > (c && r&& m)){
//            return d;
//         }
//     }
// }
//let abr = new ZXC(1,2)
// //4


//5
    // const fagg =[1,4,-1,7,8,3,6]
    // class qwerty{
    //     arr
    //     constructor(mass){
    //         this.arr = mass
    //     }
    // leet(){
    //         for (let index = 0; index < this.arr.length; index++) {
    //         let zxc = this.arr[index]
    //             if(zxc <=0){
    //             console.log("Welcome to Programiz2!");
    //             }else{
    //                 console.log("Welcome to Programiz1!");
    //             }
    //         }
    //     }
    // }
    // let zxc = new qwerty(fagg)
    // zxc.leet()
//5
    const fagg =[1,4,-1,7,8,3,6]
    class qwerty{
        arr
        constructor(mass){
            this.arr = mass
        }
    leet(){
            for (let index = 0; index <this.arr.langhyt; index++) {
             let  element = this.arr[index];
               
            }
            if(zxc <=0){
                            console.log("Welcome to Programiz2!");
                            }else{
                                console.log("Welcome to Programiz1!");
                            }
    }
    }
    let zxc = new qwerty(fagg)
    zxc.leet()

    //1

    //2
    let foo=[]
    class Two{
        aboba
        constructor(jkl){
            this.aboba = jkl;
        }
        star(){
        for (let i = 1; i <= 100; i++){
            this.aboba .push() 
            if(i%3 ===0 && i % 5 ===0 && i %7=== 0){
                console.log(i);
            }
        }
        console.log(this.aboba );
}
}
let balkan = new Two(foo)
balkan.star()
//idk
class FilterArrays{
    inputNumber
    resultFlter
    constructor(numbers){
        this.inputNumber = numbers
    }
    filter(){
        return this.inputNumber.filter(number=>(number%3==0&& number%5==0&& number%7==0))
    }
    print(){
        this.resultFlter=this.filter()
        console.log(this.resultFlter)
    }
}
let qwe = [1,2,3,4,5,6,7,8,9,10,11]
let res = new FilterArrays(qwe)
res.print()
//6
//1
// function factorial(n){
//     var result = 1;
//   while(n){
//       result *= n--;
//   }
//   return result;

//       }
// let a = factorial(5)
//2
// function fn(n){
//         for(var s=i=1;i<n;s+=(i+=3)){};
//     return s;
//     }  
//     alert(fn(7));
    
//3
//y = ax^2 + bx + c
let quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
console.log(quadraticEquation(1,12,36));