export const register = ( req, res) => {
    res.send("registering");
    const {username, email, password} = req.body;
    console.log(username, email, password);
};

export const login = ( req, res) => {
    res.send("login");
};