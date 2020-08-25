const users = {
    "1": {
        full_name: "Bob Ross",
    },

    "2": { full_name: "john doe" },

    "3": { full_name: "Saging Banana" },
};

const ArrOfTuples = Object.entries(users).map((tupleEntry) => {
    const [id, object] = tupleEntry;

    return {
        ...object,

        id,
    };
});

console.log(ArrOfTuples);
