async function Query(modelname) {
    const foundArray = await modelname.find({}).exec();
    return foundArray;
}

module.exports = {Query}; 