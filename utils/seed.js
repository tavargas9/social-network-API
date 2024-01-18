const connection = require('../config/connection');
const { User, Thought } = require('../models');

const userData = [
    {
        username: 'tonyv9',
        email: 'tony@gmail.com',
    },
    {
        username: 'mkultra',
        email: 'mckayla@gmail.com',
    },
];

console.log(connection);

connection.once('open', async () => {
    console.log('you are now connected');
    // Drop existing Users and Thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});
    // Add seed data to database
    await User.collection.insertMany(userData);

    console.table(userData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});