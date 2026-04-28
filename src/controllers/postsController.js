const store = require('../data/store');

// --- UPDATED FOR DAY 3 ---
const getAllPosts = (req, res) => {
    let result = [...store.posts];
    const { author, search, sort } = req.query;

    // 1. Filter by author (?author=john)
    if (author) {
        result = result.filter(post => 
            post.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    // 2. Search in title (?search=node)
    if (search) {
        result = result.filter(post => 
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    // 3. Sorting (?sort=newest)
    if (sort === 'newest') {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    res.json(result);
};

// --- KEEP THESE AS THEY WERE ---
const getPostById = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
};

const createPost = (req, res) => {
    const { title, content, author } = req.body;
    const newPost = {
        id: store.nextId++,
        title, content, author,
        createdAt: new Date().toISOString(),
        likes: 0
    };
    store.posts.push(newPost);
    res.status(201).json(newPost);
};

const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = store.posts.findIndex(p => p.id === id);
    if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
    
    const { title, content } = req.body;
    store.posts[postIndex] = {
        ...store.posts[postIndex],
        title: title || store.posts[postIndex].title,
        content: content || store.posts[postIndex].content,
        updatedAt: new Date().toISOString()
    };
    res.json(store.posts[postIndex]);
};

const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = store.posts.findIndex(p => p.id === id);
    if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
    
    store.posts.splice(postIndex, 1);
    res.status(204).send(); 
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
