// ActionTypes
/* Create an ActionType called 'SET_USERS'                               TODO */

//ActionCreators
/* Create an ActionCreator called 'setUsers' with a type of 
   'SET_USERS' and a payload of the data from
   your API.                                                             TODO */

//ThunkActionCreators
/* Create and export a ThunkActionCreator called 
   getUsersByInstructor that...
      1. Intakes an Instructor's id,
      2. Makes a fetch to '/api/groups/:id'
      3. Parses the data from the response
      4. Dispatches the ActionCreator 'setUsers' 
         passing in the data from your API                               TODO */

// Initial state
/* Define your initial state. You are going to be using normalized state
   meaning that you will have an object that has id's as keys, and the 
   the data as values.                                                   TODO */

const initState = {};

//Reducer
/* Add a case to userReducer that looks for the action.type 
   of SET_USERS that...
    1. Iterates over the users and adds a key value pair to newState
        a. key - the user's id
        b. value - the user object
    2. Returns newState                                                  TODO */

const userReducer = (state = initState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
