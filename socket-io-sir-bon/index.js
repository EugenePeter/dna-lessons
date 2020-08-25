const server = require("http").createServer();

const io = require("socket.io")(server);

// User table
const users = {
    "35c322ee-14d4-40ac-bda4-a9df2bd5f4ad": {
        first_name: "Kevin",
        last_name: "Guevarra",
        email: "kevin@dnamicro.com",
        token_id: "",
    },
};

const rooms = {
    "456": {
        roomName: "test",
        messages: {
            "35c322ee-14d4-40ac-bda4-a9df2bd5f4ad": {
                messageContent: [
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "hallo",
                    },
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "how are you",
                    },
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "Im fine thank you",
                    },
                ],
            },
        },
    },
    "457": {
        roomName: "test2",
        messages: {
            "35c322ee-14d4-40ac-bda4-a9df2bd5f4ad": {
                messageContent: [
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "hallo",
                    },
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "how are you",
                    },
                    {
                        sender: "Eugene",
                        date: new Date(),
                        message: "Im fine thank you",
                    },
                ],
            },
        },
    },
};

const ArrOfRooms = Object.entries(rooms).map((tupleEntry) => {
    const [id, object] = tupleEntry;

    return {
        ...object,

        id,
    };
});

console.log("------------- Looping through an object");
console.log(ArrOfRooms);

// Tokens table
const tokens = {
    "9c7c410a-3c1f-4964-9890-aab20459b7d9": {
        user_id: "35c322ee-14d4-40ac-bda4-a9df2bd5f4ad",
        expiry: "",
    },
};

const clients = {};

io.on("connection", (client) => {
    console.log("////////////// --start");
    console.log("------------------------");
    console.log(`${client.id} has connected.`);
    console.log("------------------------");

    client.timeout = setTimeout(() => {
        client.disconnect(true);
    }, 5000);

    client.on("introduce", (token_id) => {
        console.log(`token id: ${token_id}`);

        // Use the token_id sent from client.
        // Then traverse the tokens table and get the user_id.
        // Assign it in a variable named user_id
        const user_id = tokens[token_id].user_id;
        console.log(` user id: ${user_id}`);

        // Use the user_id variable.
        // Find the object with key of user_id value.
        // Return the properties i.e. first_name, _last_name,email, token.
        // Assign it a variable named user.
        const user = users[user_id];
        console.log("user details: ");
        console.log(user);

        console.log("----------- client");
        clients[client.id] = { token_id };
        console.log(clients);

        console.log("Username: ");
        const { first_name, last_name } = user;
        console.log(`${first_name} ${last_name} has logged in`);
        console.log("////////////// --end");

        console.log(" ----------------userMessages");
        const userMessages = rooms["456"].messages[user_id];
        usr;
        console.log(userMessages);
        clearTimeout(client.timeout);
    });

    client.on("event", (data) => {
        /* … */
    });
    client.on("disconnect", () => {
        if (clients[client.id]) {
            const token_id = clients[client.id].token_id;
            const user_id = tokens[token_id].user_id;
            const { first_name, last_name } = users[user_id];
            console.log(`${first_name} ${last_name} has logged out`);
        } else {
            console.log(`${client.id} has been kicked`);
        }
    });
});

server.listen(3030);
