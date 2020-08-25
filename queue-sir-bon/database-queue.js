const Database = {
    queues: {
        "1": {
            enqueued: 0,
            dequeued: 0,
            name: "MyQueue",
        },
        "2": {
            enqueued: 0,
            dequeued: 0,
            name: "MyQueue2",
        },
    },
    queue_data: {},
};

class DatabaseQueue {
    async enqueue(queue_id, data) {
        // Get Queue by ID
        const queue = Database.queues[queue_id];

        if (!queue) {
            throw new Error(`Queue Does not Exist`);
        }

        const { enqueued, dequeued } = queue;

        Database.queue_data[`${queue_id}-${enqueued}`] = {
            data,
            id: queue_id,
        };

        queue.enqueued++;
    }

    async dequeue(queue_id) {
        // Get Queue by ID
        const queue = Database.queues[queue_id];

        if (!queue) {
            throw new Error(`Queue Does not Exist`);
        }

        const { enqueued, dequeued } = queue;

        if (enqueued === dequeued) {
            return null;
        }

        const data_id = `${queue_id}-${dequeued}`;
        queue.dequeued++;

        console.log(data_id);

        return Database.queue_data[data_id].data;
    }
}

async function main() {
    const QueueInstance = new DatabaseQueue();

    console.log("----------------DATABASE");
    console.log(Database);
    console.log("----------------");

    // console.log(Database);
    // await QueueInstance.enqueue("1", 1);

    console.log("-----------first enqueue");
    await QueueInstance.enqueue("1", 1);
    console.log(Database);

    console.log("-----------1.2 enqueue");
    await QueueInstance.enqueue("1", 1);
    console.log(Database);

    console.log("-----------second enqueue");
    await QueueInstance.enqueue("2", 1);
    console.log(Database);

    console.log("-----------third enqueue");
    await QueueInstance.enqueue("2", 10);
    console.log(Database);

    console.log("-----------fourth enqueue");
    await QueueInstance.enqueue("2", 30);
    console.log(Database);

    console.log(`Dequeued: `, await QueueInstance.dequeue("2"));
    console.log(Database);

    console.log(`Dequeued: `, await QueueInstance.dequeue("2"));
    console.log(Database);

    console.log(`Dequeued: `, await QueueInstance.dequeue("1"));
    console.log(Database);

    // console.log(`Dequeued: `, await QueueInstance.dequeue("1"));
    // console.log(Database);

    // console.log(`Dequeued: `, await QueueInstance.dequeue("1"));
    // console.log(Database);
}

main();
