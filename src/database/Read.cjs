async function Query(modelname, query={}) {
    const foundArray = await modelname.find(query).exec();
    return foundArray;
}

module.exports = {Query}; 