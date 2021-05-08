const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

    function addUser(user){
        if(users.find(users => users.name === user.name)==null) //getting result of user by name who has similar name to new added user.... if this is not true then new object will be pushed into array of objects
        users.push(user);
    }
    let user = {
        name: "Sara",
        scores: 85,
        skills: ['HTM', 'CSS', 'JS'],
        age: 23
       }
    addUser(user);
    console.table(users)