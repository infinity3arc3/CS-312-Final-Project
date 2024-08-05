async function Delete(Project, nameIn) {
    try {
        const database = client.db("CS312");
        const expenses = database.collection("Project");

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