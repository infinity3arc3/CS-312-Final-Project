//try to just use objectID for query so you dont update multiple items
async function Update(modelName, query, updateDoc) {
    await modelName.updateOne(query, updateDoc);
}

module.exports = {Update};  