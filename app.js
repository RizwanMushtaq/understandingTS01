var person = {
    name: 'Rizwan',
    age: 30,
    hobbies: ['Sports', 'cooking']
};
var favoriteActivities;
favoriteActivities = ['Sports', 'cooking'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
