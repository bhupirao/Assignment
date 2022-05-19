// 1. Object.create() method
const autoMoblies ={
    name:"Tata",
    wheels:4,
    sunroof: true,
    fuelCapacity:60,
    gear:6,
};
const t1= Object.create(autoMoblies,{name:{value: "safari"}})
const t2=Object.create(autoMoblies,{name:{value: "harrier"}})
const t3=Object.create(autoMoblies,{name:{value: "punch"}})
console.log(t1,t2,t3)


// Constructor functions()
function AutoMoblies(name) {
    this.carName = name;
    this.wheels = 4;
    this.sunroof = true;
    this.fuelCapacity = 60;
    this.gear = 6;
}

let ta1= new AutoMoblies("safari")
let ta2 =new AutoMoblies("harrier")
let ta3 =new AutoMoblies("punch")
console.log(ta1,ta2,ta3)
