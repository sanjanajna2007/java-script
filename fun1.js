
const users = [
  { email: "user0@gmail.com" },
  { email: "user1@gmail.com" },
  { email: "user2@gmail.com" }
];

console.log(users[1].email);   // Output: user1@gmail.com


// ----------------------
// 2. Tinder User Object
// ----------------------
const tinderUser = {
  id: "123abc",
  name: "Sam",
  isLoggedIn: true
};

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// ----------------------
// 3. Course Object & Destructuring
// ----------------------
const course = {
  coursename: "Js in hindi",
  price: "234",
  courseInstructor: "hitesh"
};

// Destructuring
const { courseInstructor: instructor } = course;

console.log(instructor);   // Output: hitesh


// ----------------------
// 4. JSON Object Example
// ----------------------
const courseJSON = {
  name: "hitesh",
  coursename: "js in hindi",
  price: "free"
};

console.log(courseJSON);


// ----------------------
// 5. Array of Objects
// ----------------------
const emptyArray = [{}, {}, {}];
console.log(emptyArray);



// 6. API Response Object

const apiResponse = {
  results: [
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols"
      },
      email: "jennie.nichols@example.com",
      phone: "(272) 790-0888",
      nat: "US"
    }
  ],
  info: {
    seed: "56d27f4a53bd5441",
    results: 1,
    page: 1,
    version: "1.4"
  }
};

// Accessing email from API response
console.log(apiResponse.resu)
