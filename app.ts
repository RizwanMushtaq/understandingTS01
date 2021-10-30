const person = {
    name: 'Rizwan',
    age: 30,
    hobbies: ['Sports', 'cooking']
}

let favoriteActivities: string[]
favoriteActivities = ['Sports', 'cooking']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    //console.log(hobby.map())  //!!! error Typescipt shows error as map does not exit for string
}