// declaring an object with asnyc functions 
const API = {
  // async functions take the return value and automatically resolves it as a promise 
  // also sets up the ability to use the "await" keyword 
  async getLastWorkout() {
    let res;
    // wrapping the code in a try block 
    try {
      // await pauses the execution of the function 
      // fetch - is a browser based API that allows to hit an http endpoint and have the response return a promise of the response 
      res = await fetch("/api/workouts");
      // if an error occurs - log the error to the console
    } catch (err) {
      console.log(err)
    }
    // can have the value of a promise assigned to a variable 
    // mapping to json is also a promise - return that promise from the original callback 
    const json = await res.json();

    // return value is resolved as a promise 
    return json[json.length - 1];
  },
  // async functions take the return value and automatically resolves it as a promise 
  // also sets up the ability to use the "await" keyword 
  async addExercise(data) {
    // location.search returns the querystring part of the URL 
    const id = location.search.split("=")[1];

    // fetching the /api/workouts/${id} endpoint to make an update 
    const res = await fetch(`/api/workouts/${id}`, {
      // making a PUT request 
      method: "PUT",
      // setting the content-type to json 
      headers: { "Content-Type": "application/json" },
      // body data type must match "Content-Type" header
      // To extract the JSON body content from the response, we use the json() method (defined on the Body mixin
      body: JSON.stringify(data)
      // JSON.stringify converts a an object or value to json format 
    });

    // parses JSON response into JavaScript objects
    const json = await res.json();

    // returning the JavaScript objects (the promise)
    return json;
  },
  // by default - data is equal to an empty object 
  async createWorkout(data = {}) {
    // making a post request to /api/workouts endpoint
    const res = await fetch("/api/workouts", {
      // making a POST request 
      method: "POST",
      // setting the content-type to json 
      headers: { "Content-Type": "application/json" },
      // JSON.stringify converts a an object or value to json format 
      body: JSON.stringify(data),
    });

    // parses JSON response into JavaScript objects
    const json = await res.json();
    
    // returning the JavaScript objects (the promise)
    return json;
  },
  // async functions take the return value and automatically resolves it as a promise 
  // also sets up the ability to use the "await" keyword 
  async getWorkoutsInRange() {
    // await pauses the execution of the function 
    // fetch - is a browser based API that allows to hit an http endpoint and have the response return a promise of the response 
    const res = await fetch(`/api/workouts/range`);

    // parses JSON response into JavaScript objects
    const json = await res.json();

    // returning the JavaScript objects (the promise)
    return json;
  },
};
