import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string
const uri = "";

const client = new MongoClient(uri);

async function Create(nameIn, valueIn, categoryIn, nextDueDateIn, daysIn, monthsIn) {
    try {
        const database = client.db("ExpenseTracker");
        const expenses = database.collection("expenses");

        const doc = { 
            name: nameIn,
            value: valueIn,
            category: categoryIn,
            nextDueDate: nextDueDateIn,
            periodicity: {days: daysIn, months: monthsIn} 
        };

        const result = await expenses.insertOne(doc);
        
        console.log("A document was inserted with the _id: %s", result.insertedId);

    } finally {
        await client.close();
    }
}

export default Create;  
