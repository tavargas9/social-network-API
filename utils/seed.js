const connection = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'tonyv9',
        email: 'tony@gmail.com',
        thoughts: [],
    },
    {
        username: 'mkultra',
        email: 'mckayla@gmail.com',
        thoughts: [],
    },
];

console.log(connection);

connection.once('open', async () => {
    console.log('you are now connected');
    // Drop existing Users
    await User.deleteMany({});
    // Add seed data to database
    await User.collection.insertMany(userData);

    console.table(userData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});