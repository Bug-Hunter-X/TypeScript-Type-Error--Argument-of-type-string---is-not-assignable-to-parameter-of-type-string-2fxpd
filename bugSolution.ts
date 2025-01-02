function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return "Hello, " + people.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct usage with array handling

let userName = user.join(" ");
console.log(greeter(userName));// Correct usage with single string