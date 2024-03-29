
// // create a class called user
// class User {
//     constructor(options){
//         this.firstName = options.name.first
//         this.lastName = options.name.last
//         this.email = options.email
//         this.dob = options.dob
//     }
// }


// //create a function to call the random user generator
// function callRandomGen() {
//     let http = new XMLHttpRequest();
//     http.open('GET', 'https://randomuser.me/api/')
    
//     http.onreadystatechange = function () {
//         if(http.readyState != XMLHttpRequest.DONE){
//             return;
//         } else if (http.status == 200){
//             let parsed = JSON.parse(http.responseText);
            
//             console.log(parsed);
//             console.log('first');
//         } else {
//             console.log('error occurred' + http.status);
//         }
//     }
//     http.send()

// }

// callRandomGen();


// //call function to get one random profile - make a user instance with Class User
// function callRandomGenUser() {
//     let http = new XMLHttpRequest();
//     http.open('GET', 'https://randomuser.me/api/')
    
//     http.onreadystatechange = function () {
//         if(http.readyState != XMLHttpRequest.DONE){
//             return;
//         } else if (http.status == 200){
//             let parsed = JSON.parse(http.responseText);

//             // find a better way to explain what is happening in this pattern
//             let people = parsed.results.map(function(user){
//                 console.log('second');

//                 return new User(user);

//             });
//             console.log(people);
//         } else {
//             console.log('error occurred' + http.status);
//         }
//     }
//     http.send()

// }

// callRandomGenUser();


// //refactor code to call 5 random profiles and map them over the Class User, creating five new instances, five users

// function generateThePeople() {
//     let http = new XMLHttpRequest();
//     http.open('GET', 'https://randomuser.me/api/?results=5')    
    
//     http.onreadystatechange = function () {
//         if(http.readyState != XMLHttpRequest.DONE){
//             return;
//         } else if (http.status == 200){
//             let p = document.getElementById("randomUsers");
//             console.log('third');
//             let parsed = JSON.parse(http.responseText);
//             let people = parsed.results.map(function(user){
//                 return new User(user);
//             });
//             console.log(people);
//             // can take this our or style it nicely. 
//             p.innerHTML = JSON.stringify(people);
//         } else {
//             console.log('error occurred' + http.status);
//         }
//     }
//     http.send()

// }

// generateThePeople();


// // use callbacks to access the data from the response

// function generateThePeople2(callback) { //define function with a callback
//     let http = new XMLHttpRequest();
//     http.open('GET', 'https://randomuser.me/api/?results=5') //target the file that you want to access/read
    
//     http.onreadystatechange = function () {
//         if(http.readyState != XMLHttpRequest.DONE){ //check to see if the function has finished.
//             return;
//         } else if (http.status == 200){

//             console.log('fourth');

//             let parsed = JSON.parse(http.responseText); //parse the response data and store it in a variable

//             callback(parsed.results.map(function(user){ //store the data in a callback
//                 return new User(user); //return each new user and store in callback
//             }));
//         } else {
//             console.log('error occurred' + http.status);
//         }
//     }
//     http.send()

// }

// generateThePeople2(function(data){// access data in callback
//     console.log(data)//console.log callback data
// });


// function generateThePeople2(callback) { //define function with a callback
//         let http = new XMLHttpRequest();
//         http.open('GET', 'https://randomuser.me/api/?results=5') //target the file that you want to access/read
        
//         http.onreadystatechange = function () {
//             if(http.readyState != XMLHttpRequest.DONE){ //check to see if the function has finished.
//                 return;
//             } else if (http.status == 200){
    
//               callback(http.responseText)
               
//             } else {
//                 console.log('error occurred' + http.status);
//             }
//         }
//         http.send()
//     }

//     generateThePeople2(function(data){
//         console.log('working?');
//         let parsed = JSON.parse(data);
//         console.log(parsed);
//         let unpackedParsed = parsed.results
//         console.log(unpackedParsed);
//         console.log(unpackedParsed[3].name.first)
// userArray = [];

//         unpackedParsed.map((user)=>{
//             userArray.push(new Person(user))
//         });

//         console.log(userArray);
//     });

//     class Person{
//         constructor(option){
//             this.fName = option.name.first;
//             this.lName = option.name.last;
//             this.email = option.email;
//             this.dob = option.dob.date;
//         }

//         introduce(){
//             return `Hello my name is ${this.fName} ${this.lName}, I was born on  ${this.dob} contact me at this email: ${this.email}.`
//         }
//     }

const makePeople =  (number, callback) => {
    const getData =  fetch(`https://randomuser.me/api/?results=${number}`)
        .then(response => response.json())
        .then(data => callback(data));
}

makePeople(5, function(data){
    console.log(data)

    class Person{
                constructor(option){
                    this.fName = option.name.first;
                    this.lName = option.name.last;
                    this.email = option.email;
                    this.dob = option.dob.date;
                }
        
                introduce(){
                    return `Hello my name is ${this.fName} ${this.lName}, I was born on  ${this.dob} contact me at this email: ${this.email}.`
                }
            }

            const personArray = [];

            data.results.map((person)=>{
                personArray.push(new Person(person))
            })

            console.log(personArray)
            console.log(personArray[0].introduce());
})

const makeUser = (data) => {
    class Person{
        constructor(option){
            this.fName = option.name.first;
            this.lName = option.name.last;
            this.email = option.email;
            this.dob = option.dob.date;
        }

        introduce(){
            return `Hello my name is ${this.fName} ${this.lName}, I was born on  ${this.dob} contact me at this email: ${this.email}.`
        }
    }

    const personArray = [];

    data.results.map((person)=>{
        personArray.push(new Person(person))
    })

    console.log(personArray)
    console.log(personArray[0].introduce());

} 

makePeople(10, makeUser);