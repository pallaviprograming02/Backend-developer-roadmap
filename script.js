        // MCQ Questions Database
        const mcqQuestions = {
            http: [
                {
                    question: "Which HTTP status code means 'Not Found'?",
                    options: ["200 OK", "201 Created", "404 Not Found", "500 Internal Server Error"],
                    correct: 2,
                    explanation: "404 is the standard HTTP status code for 'Not Found' - when the server cannot find the requested resource."
                },
                {
                    question: "What is the difference between HTTP and HTTPS?",
                    options: ["HTTP is faster", "HTTPS uses SSL/TLS encryption", "HTTP is more secure", "They are the same"],
                    correct: 1,
                    explanation: "HTTPS (HTTP Secure) uses SSL/TLS encryption to encrypt data between client and server, making it more secure than HTTP."
                },
                {
                    question: "Which HTTP method is idempotent?",
                    options: ["POST", "PATCH", "PUT", "GET and PUT are both idempotent"],
                    correct: 3,
                    explanation: "GET, PUT, and DELETE are idempotent (calling them multiple times has the same effect). POST and PATCH are not idempotent."
                },
                {
                    question: "What does REST stand for?",
                    options: ["Representational State Transfer", "Remote Execution State Technology", "RESTful API Standard Template", "Representational Server Transfer"],
                    correct: 0,
                    explanation: "REST stands for Representational State Transfer, an architectural style for designing networked applications."
                },
                {
                    question: "Which header is used for authentication?",
                    options: ["Content-Type", "Authorization", "Cache-Control", "Accept"],
                    correct: 1,
                    explanation: "The Authorization header is used to send credentials or tokens for authentication to the server."
                },
                {
                    question: "What is CORS?",
                    options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Central Object Request System", "Cross-Origin Request Standard"],
                    correct: 0,
                    explanation: "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain."
                },
                {
                    question: "Which status code indicates a successful creation?",
                    options: ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently"],
                    correct: 1,
                    explanation: "201 Created is used when a new resource has been successfully created, typically in response to a POST request."
                },
                {
                    question: "What is an API?",
                    options: ["Application Programming Interface", "Automated Program Integration", "Application Process Integration", "Advanced Programming Interface"],
                    correct: 0,
                    explanation: "API stands for Application Programming Interface - a set of rules and protocols that allows different software applications to communicate."
                }
            ],
            node: [
                {
                    question: "What is Node.js?",
                    options: ["A database", "A JavaScript runtime built on Chrome's V8 engine", "A frontend framework", "A CSS preprocessor"],
                    correct: 1,
                    explanation: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows running JavaScript on the server side."
                },
                {
                    question: "Which of the following is true about the Event Loop?",
                    options: ["It blocks the main thread", "It handles async operations", "It's only used for file operations", "It doesn't exist in Node.js"],
                    correct: 1,
                    explanation: "The Event Loop is a core concept in Node.js that allows non-blocking I/O operations by handling callbacks and async operations."
                },
                {
                    question: "What is NPM?",
                    options: ["Node Package Manager", "New Programming Module", "Node Program Manager", "Network Package Manager"],
                    correct: 0,
                    explanation: "NPM (Node Package Manager) is the default package manager for Node.js, used to install, share, and manage JavaScript packages."
                },
                {
                    question: "What is the output of console.log(typeof null)?",
                    options: ["'null'", "'undefined'", "'object'", "'string'"],
                    correct: 2,
                    explanation: "This is a known JavaScript quirk - typeof null returns 'object' due to a legacy bug in the language."
                },
                {
                    question: "What is the purpose of __dirname?",
                    options: ["To get the current function name", "To get the directory name of the current module", "To create directories", "To set environment variables"],
                    correct: 1,
                    explanation: "__dirname returns the absolute path of the directory containing the current JavaScript file."
                },
                {
                    question: "What is the difference between require() and import?",
                    options: ["They are the same", "require() is synchronous, import is asynchronous", "import is ES6 module syntax, require() is CommonJS", "require() is faster"],
                    correct: 2,
                    explanation: "require() is CommonJS syntax (synchronous), while import is ES6 module syntax (asynchronous). Modern Node.js supports both."
                },
                {
                    question: "What will be the output of Promise.resolve(1)?",
                    options: ["A resolved promise with value 1", "An error", "A pending promise", "undefined"],
                    correct: 0,
                    explanation: "Promise.resolve(1) creates a promise that is immediately resolved with the value 1."
                },
                {
                    question: "What is the purpose of process.env?",
                    options: ["To access environment variables", "To change Node.js process priority", "To get system information", "To manage child processes"],
                    correct: 0,
                    explanation: "process.env is an object that contains the environment variables of the current process."
                },
                {
                    question: "What is clustering in Node.js?",
                    options: ["Database clustering", "Using multiple CPU cores to handle load", "Load balancing", "File clustering"],
                    correct: 1,
                    explanation: "Clustering in Node.js allows you to create child processes (workers) that share the server port to utilize multiple CPU cores."
                },
                {
                    question: "What is the correct way to read a file asynchronously?",
                    options: ["fs.readFileSync()", "fs.readFile() with callback", "fs.readFileSync() with try-catch", "require('fs').read()"],
                    correct: 1,
                    explanation: "fs.readFile() is the asynchronous method for reading files in Node.js, which takes a callback function."
                }
            ],
            express: [
                {
                    question: "What is Express.js?",
                    options: ["A database", "A frontend framework", "A minimalist Node.js web framework", "A testing library"],
                    correct: 2,
                    explanation: "Express.js is a minimalist, flexible Node.js web application framework that provides robust features for building web and mobile applications."
                },
                {
                    question: "What does app.use() do in Express?",
                    options: ["Starts the server", "Defines a route", "Mounts middleware functions", "Creates an API endpoint"],
                    correct: 2,
                    explanation: "app.use() is used to mount middleware functions at the specified path, which are executed before route handlers."
                },
                {
                    question: "What is middleware in Express?",
                    options: ["A database connection", "Functions that have access to request and response", "A template engine", "A routing method"],
                    correct: 1,
                    explanation: "Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function."
                },
                {
                    question: "How do you extract query parameters in Express?",
                    options: ["req.params", "req.query", "req.body", "req.headers"],
                    correct: 1,
                    explanation: "req.query is used to access the query string parameters from the URL (e.g., /users?name=John)."
                },
                {
                    question: "What is the MVC pattern?",
                    options: ["Model View Controller", "Model View Component", "Module View Controller", "Multiple View Controller"],
                    correct: 0,
                    explanation: "MVC stands for Model-View-Controller, an architectural pattern that separates an application into three interconnected components."
                },
                {
                    question: "How do you handle 404 errors in Express?",
                    options: ["app.error(404)", "app.use((req, res) => res.status(404).send())", "app.catch(404)", "app.routes.notFound"],
                    correct: 1,
                    explanation: "You handle 404 by adding a middleware at the end of all routes that sends a 404 response when no route matches."
                },
                {
                    question: "What is CORS middleware used for?",
                    options: ["Database connection", "Enabling cross-origin requests", "Authentication", "File uploads"],
                    correct: 1,
                    explanation: "CORS middleware is used to enable Cross-Origin Resource Sharing, allowing APIs to be accessed from different domains."
                },
                {
                    question: "What is the correct way to define a GET route?",
                    options: ["app.get('/', function(req, res) {})", "app.post('/', function(req, res) {})", "app.put('/', function(req, res) {})", "app.delete('/', function(req, res) {})"],
                    correct: 0,
                    explanation: "app.get() is the method used to define routes that respond to GET HTTP requests."
                }
            ],
            database: [
                {
                    question: "What does CRUD stand for?",
                    options: ["Create, Read, Update, Delete", "Connect, Retrieve, Upload, Download", "Create, Review, Upload, Delete", "Cache, Read, Update, Deploy"],
                    correct: 0,
                    explanation: "CRUD represents the four basic operations: Create, Read, Update, and Delete - the fundamental database operations."
                },
                {
                    question: "What is the difference between SQL and NoSQL?",
                    options: ["SQL is only for Windows", "NoSQL uses SQL syntax", "SQL is relational, NoSQL is non-relational", "NoSQL is faster than SQL"],
                    correct: 2,
                    explanation: "SQL databases are relational (table-based) with structured schema, while NoSQL databases are non-relational with flexible schemas."
                },
                {
                    question: "What is MongoDB?",
                    options: ["A SQL database", "A document-based NoSQL database", "A graph database", "A key-value store"],
                    correct: 1,
                    explanation: "MongoDB is a document-based NoSQL database that stores data in flexible JSON-like documents with dynamic schemas."
                },
                {
                    question: "What is an index in databases?",
                    options: ["A backup of data", "A data structure that improves query speed", "A type of database", "A table relationship"],
                    correct: 1,
                    explanation: "An index is a data structure (like B-tree) that improves the speed of data retrieval operations on a database table."
                },
                {
                    question: "What is a foreign key?",
                    options: ["The primary key of another table", "A key for encryption", "A backup key", "An index key"],
                    correct: 0,
                    explanation: "A foreign key is a field in one table that references the primary key in another table, establishing a relationship between tables."
                },
                {
                    question: "What does JOIN do in SQL?",
                    options: ["Connects two tables", "Backs up data", "Creates a new database", "Deletes records"],
                    correct: 0,
                    explanation: "JOIN is used to combine rows from two or more tables based on a related column between them."
                },
                {
                    question: "What is MongoDB aggregation?",
                    options: ["Database backup", "A pipeline for processing data", "User authentication", "Data encryption"],
                    correct: 1,
                    explanation: "Aggregation in MongoDB is a way to process data records and return computed results, using an aggregation pipeline."
                },
                {
                    question: "What is normalization in databases?",
                    options: ["Making databases faster", "Organizing data to reduce redundancy", "Encrypting data", "Backing up data"],
                    correct: 1,
                    explanation: "Database normalization is the process of organizing data to minimize redundancy and improve data integrity."
                },
                {
                    question: "What is Mongoose?",
                    options: ["A database server", "An ORM for MongoDB in Node.js", "A SQL client", "A testing tool"],
                    correct: 1,
                    explanation: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing schema validation and relationship management."
                },
                {
                    question: "What is a database transaction?",
                    options: ["A database backup", "A sequence of operations as a single unit", "A type of query", "A table relationship"],
                    correct: 1,
                    explanation: "A transaction is a sequence of operations performed as a single logical unit of work that either all succeed or all fail (ACID)."
                }
            ],
            auth: [
                {
                    question: "What is JWT?",
                    options: ["Java Web Token", "JSON Web Token", "JavaScript Web Token", "JSON Web Transport"],
                    correct: 1,
                    explanation: "JWT (JSON Web Token) is a compact, URL-safe token format used for securely transmitting information between parties."
                },
                {
                    question: "What is password hashing?",
                    options: ["Encrypting passwords", "Converting passwords to a secure irreversible format", "Compressing passwords", "Validating passwords"],
                    correct: 1,
                    explanation: "Password hashing is the process of converting passwords into a secure, irreversible format using algorithms like bcrypt, argon2, or scrypt."
                },
                {
                    question: "What is the purpose of a refresh token?",
                    options: ["To access protected resources", "To get a new access token when it expires", "To refresh the page", "To validate user session"],
                    correct: 1,
                    explanation: "A refresh token is used to obtain a new access token when the current access token expires, without requiring fresh credentials."
                },
                {
                    question: "What is CORS?",
                    options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Central Object Request System", "Cross-Origin Request Standard"],
                    correct: 0,
                    explanation: "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain."
                },
                {
                    question: "What is SQL injection?",
                    options: ["A database backup method", "A type of attack where malicious SQL is inserted", "A SQL query optimization", "A database migration technique"],
                    correct: 1,
                    explanation: "SQL injection is a code injection technique that exploits security vulnerabilities in a website's database layer by inserting malicious SQL code."
                },
                {
                    question: "What is XSS?",
                    options: ["Cross-Site Scripting", "Extra Security System", "XML Security Standard", "Cross-Server Transfer"],
                    correct: 0,
                    explanation: "XSS (Cross-Site Scripting) is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users."
                },
                {
                    question: "What is rate limiting?",
                    options: ["A caching mechanism", "Limiting the number of requests from a user", "A database feature", "A load balancing technique"],
                    correct: 1,
                    explanation: "Rate limiting is a technique to control the number of requests a user can make to an API within a specified time period."
                },
                {
                    question: "What is the purpose of HTTPS?",
                    options: ["To make websites load faster", "To encrypt data between client and server", "To cache website data", "To compress files"],
                    correct: 1,
                    explanation: "HTTPS (HTTP Secure) uses SSL/TLS encryption to securely transmit data between the client and server, protecting sensitive information."
                }
            ],
            devops: [
                {
                    question: "What is Git?",
                    options: ["A database", "A distributed version control system", "A programming language", "An IDE"],
                    correct: 1,
                    explanation: "Git is a distributed version control system for tracking changes in source code during software development."
                },
                {
                    question: "What is a Git branch?",
                    options: ["A type of database", "A parallel version of the repository", "A backup system", "A code editor feature"],
                    correct: 1,
                    explanation: "A Git branch is a pointer to a commit, representing an independent line of development in a repository."
                },
                {
                    question: "What is Docker?",
                    options: ["A programming language", "A containerization platform", "A database", "An operating system"],
                    correct: 1,
                    explanation: "Docker is a platform that enables developers to package applications into containers—standardized units containing code and dependencies."
                },
                {
                    question: "What is CI/CD?",
                    options: ["Continuous Integration/Continuous Deployment", "Code Intensive/Code Development", "Computer Interface/Computer Design", "Configuration Item/Configuration Distribution"],
                    correct: 0,
                    explanation: "CI/CD stands for Continuous Integration/Continuous Deployment - practices that enable development teams to deliver code changes more frequently and reliably."
                },
                {
                    question: "What is a .gitignore file?",
                    options: ["A backup file", "Specifies files to be ignored by Git", "A configuration file", "A log file"],
                    correct: 1,
                    explanation: "The .gitignore file specifies intentionally untracked files that Git should ignore, such as build artifacts or node_modules."
                },
                {
                    question: "What is environment variable?",
                    options: ["A variable in code", "A value that changes based on environment", "A system configuration value", "Both B and C"],
                    correct: 3,
                    explanation: "Environment variables are dynamic values that affect how processes behave on a computer, typically used for configuration without changing code."
                },
                {
                    question: "What is the purpose of package.json?",
                    options: ["To style the application", "To manage project metadata and dependencies", "To configure the server", "To create database connections"],
                    correct: 1,
                    explanation: "package.json is the manifest file for Node.js projects that contains metadata and manages project dependencies, scripts, and configuration."
                },
                {
                    question: "What is a load balancer?",
                    options: ["A database tool", "Distributes network traffic across multiple servers", "A security tool", "A code formatter"],
                    correct: 1,
                    explanation: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving reliability and performance."
                }
            ]
        };

        // Projects Data
        const projects = [
            {
                id: 1,
                title: "User Registration API",
                difficulty: "beginner",
                description: "Build a complete user registration and login system with JWT authentication",
                tech: ["Node.js", "Express", "MongoDB", "JWT"],
                features: ["User Signup", "User Login", "JWT Authentication", "Password Hashing"],
                code: `// User Model (models/User.js)
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

// Routes (routes/auth.js)
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ message: 'User created', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;`,
                databaseSchema: {
                    users: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "username", type: "String", description: "Unique username" },
                            { name: "email", type: "String", description: "Unique email" },
                            { name: "password", type: "String", description: "Hashed password" },
                            { name: "createdAt", type: "Date", description: "Creation timestamp" }
                        ]
                    }
                }
            },
            {
                id: 2,
                title: "Notes API",
                difficulty: "beginner",
                description: "Create a CRUD API for managing personal notes",
                tech: ["Node.js", "Express", "MongoDB"],
                features: ["Create Note", "Read Notes", "Update Note", "Delete Note"],
                code: `// routes/notes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
});

// Get single note
router.get('/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(401).json({ error: 'Note not found' });
    res.json(note);
});

// Create note
router.post('/', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
});

// Update note
router.put('/:id', async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
});

// Delete note
router.delete('/:id', async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
});

module.exports = router;`,
                databaseSchema: {
                    notes: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "title", type: "String", description: "Note title" },
                            { name: "content", type: "String", description: "Note content" },
                            { name: "userId", type: "ObjectId", description: "Reference to User" },
                            { name: "createdAt", type: "Date", description: "Creation timestamp" }
                        ]
                    }
                }
            },
            {
                id: 3,
                title: "Blog Backend API",
                difficulty: "intermediate",
                description: "Build a complete blog system with posts, comments, and categories",
                tech: ["Node.js", "Express", "MongoDB", "JWT"],
                features: ["CRUD Posts", "Comments System", "Categories", "Search & Filter"],
                code: `// Blog Post Model
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, enum: ['tech', 'lifestyle', 'tutorial'], default: 'tech' },
    tags: [String],
    comments: [commentSchema],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    published: { type: Boolean, default: false },
    publishedAt: { type: Date }
}, { timestamps: true });

postSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Post', postSchema);`,
                databaseSchema: {
                    posts: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "title", type: "String", description: "Post title" },
                            { name: "content", type: "String", description: "Full content" },
                            { name: "author", type: "ObjectId", description: "User reference" },
                            { name: "category", type: "String", description: "Post category" },
                            { name: "tags", type: "Array", description: "Tag array" },
                            { name: "published", type: "Boolean", description: "Publish status" }
                        ]
                    },
                    comments: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "postId", type: "ObjectId", description: "Post reference" },
                            { name: "userId", type: "ObjectId", description: "User reference" },
                            { name: "text", type: "String", description: "Comment text" }
                        ]
                    }
                }
            },
            {
                id: 4,
                title: "E-commerce Backend",
                difficulty: "advanced",
                description: "Complete e-commerce API with products, orders, payments",
                tech: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
                features: ["Products Catalog", "Shopping Cart", "Orders", "Payments", "Inventory"],
                code: `// Order Model
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    name: String,
    price: Number,
    quantity: { type: Number, required: true, min: 1 }
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    paymentMethod: { type: String, enum: ['stripe', 'paypal'], required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    subtotal: Number,
    tax: Number,
    shipping: Number,
    total: Number,
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);`,
                databaseSchema: {
                    products: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "name", type: "String", description: "Product name" },
                            { name: "description", type: "String", description: "Product details" },
                            { name: "price", type: "Number", description: "Product price" },
                            { name: "stock", type: "Number", description: "Inventory count" },
                            { name: "category", type: "ObjectId", description: "Category reference" }
                        ]
                    },
                    orders: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "userId", type: "ObjectId", description: "Customer reference" },
                            { name: "items", type: "Array", description: "Order items" },
                            { name: "total", type: "Number", description: "Order total" },
                            { name: "status", type: "String", description: "Order status" }
                        ]
                    },
                    users: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "email", type: "String", description: "User email" },
                            { name: "role", type: "String", description: "user/admin" },
                            { name: "addresses", type: "Array", description: "Saved addresses" }
                        ]
                    }
                }
            },
            {
                id: 5,
                title: "File Upload API",
                difficulty: "intermediate",
                description: "API for uploading and managing files with cloud storage",
                tech: ["Node.js", "Express", "Multer", "Cloudinary"],
                features: ["Single Upload", "Multiple Upload", "File Types", "Size Limits"],
                code: `const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'png', 'gif', 'pdf', 'mp4']
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Single file upload
router.post('/single', upload.single('file'), async (req, res) => {
    res.json({
        message: 'File uploaded successfully',
        file: {
            url: req.file.path,
            publicId: req.file.filename,
            size: req.file.size,
            type: req.file.mimetype
        }
    });
});

// Multiple files upload
router.post('/multiple', upload.array('files', 5), async (req, res) => {
    const files = req.files.map(file => ({
        url: file.path,
        publicId: file.filename
    }));
    res.json({ message: 'Files uploaded', files });
});

module.exports = router;`,
                databaseSchema: {
                    files: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "filename", type: "String", description: "Original name" },
                            { name: "url", type: "String", description: "Cloud URL" },
                            { name: "publicId", type: "String", description: "Cloud storage ID" },
                            { name: "size", type: "Number", description: "File size in bytes" },
                            { name: "type", type: "String", description: "MIME type" },
                            { name: "uploadedBy", type: "ObjectId", description: "User reference" }
                        ]
                    }
                }
            },
            {
                id: 6,
                title: "Chat Application Backend",
                difficulty: "advanced",
                description: "Real-time chat backend with WebSocket support",
                tech: ["Node.js", "Socket.io", "MongoDB", "Redis"],
                features: ["Real-time Messaging", "Rooms", "Online Status", "Message History"],
                code: `const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

// Online users map
const onlineUsers = new Map();

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Authentication error'));
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = decoded.userId;
        next();
    } catch (err) {
        next(new Error('Authentication error'));
    }
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.userId);
    onlineUsers.set(socket.userId, socket.id);
    
    // Join user's personal room
    socket.join(socket.userId);
    
    // Join chat room
    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
    });
    
    // Send message
    socket.on('sendMessage', async ({ roomId, content }) => {
        const message = {
            senderId: socket.userId,
            content,
            timestamp: new Date()
        };
        
        // Save to database here
        
        // Broadcast to room
        io.to(roomId).emit('newMessage', message);
    });
    
    // Typing indicator
    socket.on('typing', ({ roomId }) => {
        socket.to(roomId).emit('userTyping', socket.userId);
    });
    
    socket.on('disconnect', () => {
        onlineUsers.delete(socket.userId);
        console.log('User disconnected:', socket.userId);
    });
});

module.exports = { app, server };`,
                databaseSchema: {
                    messages: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "roomId", type: "String", description: "Chat room ID" },
                            { name: "senderId", type: "ObjectId", description: "Sender reference" },
                            { name: "content", type: "String", description: "Message content" },
                            { name: "readBy", type: "Array", description: "Read by users" },
                            { name: "createdAt", type: "Date", description: "Timestamp" }
                        ]
                    },
                    rooms: {
                        fields: [
                            { name: "_id", type: "ObjectId", description: "Primary Key" },
                            { name: "name", type: "String", description: "Room name" },
                            { name: "participants", type: "Array", description: "User IDs" },
                            { name: "type", type: "String", description: "private/group" }
                        ]
                    }
                }
            }
        ];

        // State Management
        let currentMcqCategory = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let answered = false;
        let userAnswers = [];

        // Navigation
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-indigo-500');
            });
            document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('bg-indigo-500');

            // Load projects when opening projects section
            if (sectionId === 'projects') {
                filterProjects('all');
            }
        }

        // Dark Mode Toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark');
            const icon = document.getElementById('darkModeIcon');
            if (document.body.classList.contains('dark')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }

        // Run Code in Playground
        function runCode() {
            const code = document.getElementById('codeEditor').value;
            const output = document.getElementById('outputTerminal');

            // Capture console.log output
            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.map(arg =>
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' '));
            };

            try {
                // Evaluate code safely
                const result = new Function(code)();
                if (logs.length === 0 && result !== undefined) {
                    logs.push(typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result));
                }
                output.innerHTML = logs.map(log => `<div class="text-green-400">> ${log}</div>`).join('');
            } catch (error) {
                output.innerHTML = `<div class="text-red-400">Error: ${error.message}</div>`;
            }

            // Restore console.log
            console.log = originalLog;
        }

        // Clear Output
        function clearOutput() {
            document.getElementById('outputTerminal').innerHTML = '<div class="text-slate-500">// Output will appear here...</div>';
        }

        // Load Code Template
        function loadTemplate() {
            const template = document.getElementById('codeTemplate').value;
            const templates = {
                hello: `// Hello World Example
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Backend Developer!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
                async: `// Async/Await Example
const fetchData = async () => {
    try {
        // Simulating async operation
        const data = await new Promise(resolve => {
            setTimeout(() => resolve({ users: ['John', 'Jane'] }), 1000);
        });
        
        console.log('Data received:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData().then(data => console.log('Done!'));`,
                promise: `// Promise Example
const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId) {
            resolve({ id: userId, name: 'John Doe' });
        } else {
            reject(new Error('User not found'));
        }
    });
};

fetchUser(1)
    .then(user => console.log('User:', user))
    .catch(error => console.error(error));

console.log('Fetching user...');`,
                api: `// API Call Example (Node.js)
const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        console.log('Total users:', users.length);
        users.forEach(user => {
            console.log(\`- \${user.name} (\${user.email})\`);
        });
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
};

fetchUsers();`
            };

            document.getElementById('codeEditor').value = templates[template] || templates.hello;
        }

        // Test API
        async function testApi() {
            const method = document.getElementById('httpMethod').value;
            const url = document.getElementById('apiUrl').value;
            const body = document.getElementById('requestBody').value;
            const responseDiv = document.getElementById('apiResponse');

            responseDiv.innerHTML = '<div class="text-yellow-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>';

            try {
                const options = {
                    method,
                    headers: { 'Content-Type': 'application/json' }
                };

                if (method !== 'GET' && method !== 'HEAD') {
                    options.body = body;
                }

                const response = await fetch(url, options);
                const data = await response.json();

                const statusClass = response.ok ? 'text-green-400' : 'text-red-400';
                responseDiv.innerHTML = `
                    <div class="mb-2 ${statusClass}">
                        Status: ${response.status} ${response.statusText}
                    </div>
                    <pre class="text-purple-300">${JSON.stringify(data, null, 2)}</pre>
                `;
            } catch (error) {
                responseDiv.innerHTML = `<div class="text-red-400">Error: ${error.message}</div>`;
            }
        }

        // JSON Functions
        function formatJson() {
            const input = document.getElementById('jsonInput').value;
            const output = document.getElementById('jsonOutput');
            try {
                const parsed = JSON.parse(input);
                output.innerHTML = `<span class="text-purple-300">${JSON.stringify(parsed, null, 2)}</span>`;
            } catch (e) {
                output.innerHTML = `<span class="text-red-400">Invalid JSON: ${e.message}</span>`;
            }
        }

        function validateJson() {
            const input = document.getElementById('jsonInput').value;
            const output = document.getElementById('jsonOutput');
            try {
                JSON.parse(input);
                output.innerHTML = '<span class="text-green-400"><i class="fas fa-check-circle mr-2"></i>Valid JSON ✓</span>';
            } catch (e) {
                output.innerHTML = `<span class="text-red-400"><i class="fas fa-times-circle mr-2"></i>Invalid JSON: ${e.message}</span>`;
            }
        }

        function minifyJson() {
            const input = document.getElementById('jsonInput').value;
            const output = document.getElementById('jsonOutput');
            try {
                const parsed = JSON.parse(input);
                output.innerHTML = `<span class="text-purple-300">${JSON.stringify(parsed)}</span>`;
            } catch (e) {
                output.innerHTML = `<span class="text-red-400">Invalid JSON: ${e.message}</span>`;
            }
        }

        // MCQ Functions
        function startMcq(category) {
            currentMcqCategory = category;
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            answered = false;

            document.getElementById('mcqTestArea').classList.remove('hidden');
            document.getElementById('resultsArea').classList.add('hidden');

            const titles = {
                http: 'HTTP & Web Basics',
                node: 'Node.js Fundamentals',
                express: 'Express.js Mastery',
                database: 'Database Concepts',
                auth: 'Authentication & Security',
                devops: 'DevOps & Deployment'
            };

            document.getElementById('mcqCategoryTitle').textContent = titles[category];
            document.getElementById('totalQuestions').textContent = mcqQuestions[category].length;

            loadQuestion();
        }

        function loadQuestion() {
            const questions = mcqQuestions[currentMcqCategory];
            const question = questions[currentQuestionIndex];

            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('questionText').textContent = question.question;
            document.getElementById('score').textContent = score;
            document.getElementById('mcqProgress').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const div = document.createElement('div');
                div.className = 'mcq-option bg-slate-700 rounded-lg p-4 cursor-pointer hover:bg-slate-600 border-2 border-transparent';
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-sm font-bold">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `;
                div.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(div);
            });

            document.getElementById('explanationContainer').classList.add('hidden');
            document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
            document.getElementById('nextBtn').textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';

            answered = false;
        }

        function selectAnswer(index) {
            if (answered) return;
            answered = true;

            const questions = mcqQuestions[currentMcqCategory];
            const question = questions[currentQuestionIndex];
            const options = document.querySelectorAll('.mcq-option');

            options.forEach((opt, i) => {
                opt.onclick = null;
                if (i === question.correct) {
                    opt.classList.add('correct');
                } else if (i === index && index !== question.correct) {
                    opt.classList.add('incorrect');
                }
            });

            if (index === question.correct) {
                score++;
                document.getElementById('score').textContent = score;
            }

            userAnswers.push({ questionIndex: currentQuestionIndex, selected: index, correct: question.correct });

            document.getElementById('explanationText').textContent = question.explanation;
            document.getElementById('explanationContainer').classList.remove('hidden');
        }

        function nextQuestion() {
            const questions = mcqQuestions[currentMcqCategory];

            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                showResults();
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        }

        function showResults() {
            document.getElementById('mcqTestArea').classList.add('hidden');
            document.getElementById('resultsArea').classList.remove('hidden');

            const questions = mcqQuestions[currentMcqCategory];
            const wrong = questions.length - score;

            document.getElementById('finalScore').textContent = `${Math.round((score / questions.length) * 100)}%`;
            document.getElementById('finalCorrect').textContent = score;
            document.getElementById('finalWrong').textContent = wrong;
        }

        function restartMcq() {
            startMcq(currentMcqCategory);
        }

        // Projects Functions
        function filterProjects(filter) {
            const grid = document.getElementById('projectsGrid');
            grid.innerHTML = '';

            const filtered = filter === 'all' ? projects : projects.filter(p => p.difficulty === filter);

            filtered.forEach(project => {
                const colors = {
                    beginner: 'from-green-500 to-emerald-600',
                    intermediate: 'from-yellow-500 to-amber-600',
                    advanced: 'from-red-500 to-rose-600'
                };

                const diffLabels = {
                    beginner: '🟢 Beginner',
                    intermediate: '🟡 Intermediate',
                    advanced: '🔴 Advanced'
                };

                const div = document.createElement('div');
                div.className = 'bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 transition-all cursor-pointer';
                div.onclick = () => openProjectModal(project);
                div.innerHTML = `
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br ${colors[project.difficulty]} rounded-xl flex items-center justify-center">
                            <i class="fas fa-code text-white"></i>
                        </div>
                        <span class="text-xs px-3 py-1 bg-slate-700 rounded-full">${diffLabels[project.difficulty]}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-slate-400 text-sm mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tech.map(t => `<span class="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs">${t}</span>`).join('')}
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${project.features.map(f => `<span class="text-xs text-slate-500">• ${f}</span>`).join('')}
                    </div>
                `;
                grid.appendChild(div);
            });
        }

        function openProjectModal(project) {
            const modal = document.getElementById('projectModal');
            document.getElementById('modalProjectTitle').textContent = project.title;

            let schemaHTML = '';
            for (const [table, schema] of Object.entries(project.databaseSchema)) {
                schemaHTML += `
                    <div class="mb-6">
                        <h4 class="text-lg font-bold mb-2 capitalize">${table} Collection</h4>
                        <div class="db-table">
                            <div class="bg-indigo-500/30 px-4 py-2 grid grid-cols-3 text-sm font-semibold">
                                <span>Field</span>
                                <span>Type</span>
                                <span>Description</span>
                            </div>
                            ${schema.fields.map(f => `
                                <div class="db-field px-4 py-2 grid grid-cols-3 text-sm">
                                    <span class="text-indigo-400">${f.name}</span>
                                    <span class="text-yellow-400">${f.type}</span>
                                    <span class="text-slate-400">${f.description}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            document.getElementById('modalProjectContent').innerHTML = `
                <p class="text-slate-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tech.map(t => `<span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">${t}</span>`).join('')}
                </div>
                
                <h4 class="text-lg font-bold mb-4">Database Schema</h4>
                ${schemaHTML}
                
                <h4 class="text-lg font-bold mb-4">Code Implementation</h4>
                <div class="terminal">
                    <div class="terminal-header">
                        <div class="terminal-dot bg-red-500"></div>
                        <div class="terminal-dot bg-yellow-500"></div>
                        <div class="terminal-dot bg-green-500"></div>
                        <span class="text-slate-400 text-sm ml-2">project-code.js</span>
                    </div>
                    <pre class="p-4 text-green-400 code-block text-sm overflow-x-auto">${escapeHtml(project.code)}</pre>
                </div>
            `;

            modal.classList.remove('hidden');
        }

        function closeProjectModal() {
            document.getElementById('projectModal').classList.add('hidden');
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Toggle Answer in Interview Section
        function toggleAnswer(element) {
            const answer = element.querySelector('.answer');
            const icon = element.querySelector('.fa-chevron-down');

            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                answer.classList.add('hidden');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }

        // Generate Certificate
        function generateCertificate() {
            const name = document.getElementById('certName').value || 'Your Name';
            const course = document.getElementById('certCourse').value;
            const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            alert(`🎉 Certificate Generated!\n\nName: ${name}\nCourse: ${course}\nDate: ${issueDate}\n\nCertificate ID: BM-2024-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            showSection('home');
        });

        // Close modal on outside click
        document.getElementById('projectModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('projectModal')) {
                closeProjectModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
            if (e.ctrlKey && e.key === 'Enter') {
                if (!document.getElementById('playground').classList.contains('hidden')) {
                    runCode();
                }
            }
        });
