const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser');
// Use middleware to parse JSON request bodies
server.use(bodyParser.json());

//LOGIN
server.post('/login',(req,res)=>{
    const {username,password} = req.body;

    const user = router.db.get('users').find({username}).value();

    if(password === user.password){
        const token = "Valid User"
        res.json({token})
    }
    else{
        return res.status(401).json({message:'Invalid credentials'})
    }
})

// Register
server.post('/register',(req,res) =>{
    const {username,password} = req.body;

    const existingUser = router.db.get('users').find({username}).value();
    if(existingUser){
        return res.status(400).json({message: 'User exists'});
    }
    const lastUserId = router.db.get('users').value().reduce((maxId,user) =>Math.max(maxId,user.id),0);
    const newUserId = lastUserId +1;
    const newUser = {
        id:newUserId,
        username,password
    }
    router.db.get('users').push(newUser).write();
    res.json({message: 'User Registered'});
})
server.use(middlewares)
server.use(router)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
