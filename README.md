# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

An Express.js and MongoDB based API for a social network web appilcation where users can share their thoughts, react to friends thoughts, and create a friends list.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Technologies Used](#Technologies-Used)
- [Questions](#Questions)
- [Credits](#Credits)

## Installation

Fork or clone this git repository to your local machine and open it in your IDE of choice. Navigate to the terminal and run ```npm install``` to install the dependencies for the project. 

## Usage

To see this application in action, check out the [Walkthrough Video!](https://drive.google.com/file/d/1J_0leBw5A9wDMRu2pHkyb4szPy_nepDx/view)

Once your local repository is set up, go to the terminal and run ```npm run seed``` to seed the database with starter user data. To start the server, run ```npm run start``` in the terminal. The server should now be running and is read for CRUD operations. I suggest using Insomnia to make requests to the API. 

Here is a list of the different routes and their corresponding crud operations:

```/api/users ```
- GET all users
- POST a new user

```/api/users/:userId```
- GET a single user by its ```_id``` and populated thought and friend data.
- PUT to update a user by its ```_id```
- DELETE to remove a user by its ```_id```

```/api/users/:userId/friends/:friendId```
- POST to ass a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

```/api/thoughts```
- GET to get all thoughts
- POST to create a new thought

```/api/thoughts/:thoughtId```
- GET to get a single thought by its ```_id```
- PUT to update a thought by its ```_id```
- DELETE to remove a thought by its ```_id```

```/api/thoughts/:thoughtId/reactions```
- POST to create a reaction stored in a single thought's reactions array field

```/api/thoughts/:thoughtId/reactions/:reactionId```
- DELETE to pull and remove a reaction by the reaction's ```reactionId``` value

## License 

This project is available under the MIT license. See [LICENSE](./LICENSE) for more info.

## Contributing

This project is open to contribution! To make any contributions, go ahead and fork the repo and create a new branch. Open a GitHub issue describing all updates/changes that you plan to make. When ready, push the changes to your branch and sumbit a pull request and wait for approval before merging.

## Tests

N/A

## Technologies Used

JavaScript, Node.js, Express.js, MongoDB, Mongoose, DayJs, Insomnia (for making requests to the server)

## Questions

If there are any questions, feel free to reachout to me on [GitHub](https://github.com/tavargas9), or send me an [email](mailto:tavargas9@gmail.com).

## Credits

This README was generated using [README Generator](https://github.com/tavargas9/README-generator) created by [Tomas Vargas](https://github.com/tavargas9).
