const mongoose = require("mongoose");
// Replace the uri string with your MongoDB deployment's connection string
const uri = "mongodb://localhost:27017/CS312";
mongoose.connect(uri, { useNewUrlParser: true });

async function Update() {
    try {
        const database = client.db("ExpenseTracker");
        const expenses = database.collection("expenses");

        const query = { _id: Object_Id };

        const updateDoc = {}

        const result = await expenses.updateOne(query, updateDoc);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } finally {
        await client.close();  
    }
}

module.exports = {Update};  