async function Delete(modelName, element_id) {
    await modelName.deleteOne({_id: element_id});
}
module.exports = { Delete }; 