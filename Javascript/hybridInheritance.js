/* 
Hybrid Inheritance is a combination of two or more inheritance types, 
such as hierarchical and multilevel inheritance. 
JavaScript class inheritance does not directly support hybrid inheritance 
because it does not support multiple inheritance, 
although similar designs can be achieved using mixins or composition.
*/

//Ex:

class Animal // Parent Class
{
    eat(){
        console.log("Eating")
    }
    sleep(){
        console.log("Sleeping")
    }
}

class dog extends Animal 
{
    bark()
    {
        console.log("Barking")
    }
}

class cat extends Animal
{
    meow()
    {
        console.log("Meow Sound")
    }
}

class lion extends Animal
{
    roar()
    {
        console.log("Roaring")
    }
}

class puppy extends dog
{
    play()
    {
        console.log("playing")
    }
}

let p1 = new puppy() 
p1.eat()
p1.sleep()
p1.bark()
p1.play()

console.log("-----------")

let l1 = new lion()
l1.eat()
l1.sleep()
l1.roar()

/*                 
                 Animal
            /       |       \
           ▼        ▼        ▼
         Dog       Cat      Lion
          │
          ▼
       Puppy 
*/