import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string
const uri = "";

const client = new MongoClient(uri);

async function Delete(nameIn) {
    try {
        const database = client.db("ExpenseTracker");
        const expenses = database.collection("expenses");

        const query = { name: nameIn };
        const result = await expenses.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } finally {
        await client.close();  
    }
}

export default Delete;  