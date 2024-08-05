async function Create(Project, nameIn, valueIn, categoryIn, period) {
    try {
        // let today = new Date();

        // let options = {
        //     weekday: "long",
        //     day: "numeric",
        //     month: "long"
        // };

        // let day = today.toLocaleDateString("en-US", options);

        //ms -> s
        let today = new Date();

        today.setHours(0,0,0,0);

        todayTimestamp = today.valueOf();

        const project = new Project ({ 
            name: nameIn,
            value: valueIn,
            category: categoryIn,
            Date: todayTimestamp,
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
