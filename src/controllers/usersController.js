const store = require('../data/store');

const getAllUsers = (req, res) => {
    res.json(store.users);
};

const getUserById = (req, res) => {
    const user = store.users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid name and email are required' });
    }

    const newUser = {
        id: store.nextUserId++,
        name,
        email
    };

    store.users.push(newUser);
    res.status(201).json(newUser);
};

module.exports = { getAllUsers, getUserById, createUser };
