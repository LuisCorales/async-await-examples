function requestHandler(req,res) {
    User.findById(req.userId) //This will return something
    .then((user) => {       //Then, this will put that something into the parameter of the arrow function
        return Tasks.findById(user.tasksId); //return something
    })
    .then((tasks) => { //Something into the parameter and so on
        tasks.completed = true;
        return tasks.save();
    })
    .then(() => {
        res.send("Tasks completed!")
    })
    .catch((errors) => { //If any of the functions fails, catch the errors easily
        res.send(errors);
    })
}