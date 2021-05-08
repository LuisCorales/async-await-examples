async function requestHandler(req, res) { //Create an async function
    try {
        const user = await User.findById(req.userId); //Await for the function to complete to continue requestHandler
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send("Task completed!");
    }
    catch(e) {
        res.send(e);
    }
}