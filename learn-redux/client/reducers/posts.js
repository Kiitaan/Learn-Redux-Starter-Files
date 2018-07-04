// a reducer takes in two things:

//1. The action (info about what happened)
//2. copy of current state

const posts = (state = [], action) => {
	console.log("The post will change");
	console.log(state, action);
	return state;
}

export default posts;