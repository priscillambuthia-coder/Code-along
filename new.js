et dog ={
    age:['4 months'],
    color:['black','white' ,'grey']
}
console.log(dog.age)
console.log(dog.color)
console.log(Object.values(dog))
console.log(Object.keys(dog))

function Dog(age,color){
    this.age=age
    this.color=color
    this.eat = function(){
        return this.age + 'eats'
    }

}
let dog1=( '6months', 'brown' )
let dog2=('1year', 'black')
let dog3=('2years', 'grey')

const contact=[
    {id:1 , name:'Bryan' , phonenumber: '0798654234'},
    {id:2, name:'Bryan' , phonenumber:'0798654234'},
    {id:3, name:'Bryan', phonenumber:'0798654234'},
]


let currentid=1

function Addressbook(name,age){
    this.name=name
    this.age=age
    this.id = currentid++

}


let u1= new Addressbook('Bryan', '24')
let u2 = new Addressbook('Bryan', '34')
let u3= new Addressbook('Bryan', '15')


u1.id
Addressbook.prototype.find=function(id){
    return this.id
}

u1.name = 'Ronoh'
u1.find()


function Task(name){
    this.id = Date.new();
    this.name = name;
    this.completed=false;

}

function Alltasks(){
    this.alltasks=new Map()
}

Alltasks.prototype.addtasks=function(task){
    this.t.set(task.id .task);
    this.render()
}


Alltasks.prototype.deletetasks=function(id){
    this.t.delete(id);
    this.render()
}

Alltasks.prototype.updatetask=function(id){
    let x= this.get(id)
    if (x) {
        x.completed=!x.completed
        this.render();
    }
}

let y=5;







function Human(name){
    this. x=name;
    this.y=age;
    this.dob=Date.now
}
    


class Book{
    constructor(name){
        this.x=name;
        this.y=age;
        this.id=Date.now
    }