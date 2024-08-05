async function Create(Project, nameIn, valueIn, categoryIn, period) {
    try {
        let today = new Date();

        let options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };

        let day = today.toLocaleDateString("en-US", options);

        const project = new Project ({ 
            name: nameIn,
            value: valueIn,
            category: categoryIn,
            Date: String(day),
            periodicity: period
        });

        await project.save();
        console.log("Success");
    }
    catch {
        console.log("error, no upload");
    }
}

module.exports = {Create}; 
