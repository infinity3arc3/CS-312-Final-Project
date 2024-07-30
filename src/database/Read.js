import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string
const uri = "";

const client = new MongoClient(uri);

async function Query(nameIn, valueIn, categoryIn, nextDueDateIn, daysIn, monthsIn) {
    try {
        const database = client.db("ExpenseTracker");
        const expenses = database.collection("expenses");

        // const query = { 
        //     name: nameIn,
        //     value: valueIn,
        //     category: categoryIn,
        //     nextDueDate: nextDueDateIn,
        //     periodicity: {days: daysIn, months: monthsIn} 
        // };

        const query = {name: nameIn}

        const result = await expenses.find(query);
        
        return result

    } finally {
        await client.close();
    }
}

export default Query;  