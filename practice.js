
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return data['number']
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
  return data['people'].map( (person) => {
      return person['name']
  });


}
console.log("names of people in space: ", astroNames(peopleInSpace))
    

const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
    var first_craft = data['people'][0]['craft']
    var is_the_same = true
    data.people.forEach( (person) => {
        if (person['craft'] != first_craft) {
            is_the_same = false
        }
    })

    return is_the_same
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
    return data["message"] == "success"
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
    var saw_joe = false
    data.people.forEach( (person) => {
        if (person.name == "Joe Acaba") {
            saw_joe = true
        }
    })
    return saw_joe ? "in space!" : "dunno"
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
