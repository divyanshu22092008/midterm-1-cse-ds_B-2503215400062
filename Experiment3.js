const fs = require("fs");

// CREATE
fs.writeFile("data.txt", "Hello World!", (err) => {
    if (err) throw err;
    console.log("File Created");

    // READ
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("Read:", data);

        // UPDATE
        fs.appendFile("data.txt", "\nNode.js FS Module", (err) => {
            if (err) throw err;
            console.log("File Updated");

            // DELETE
            fs.unlink("data.txt", (err) => {
                if (err) throw err;
                console.log("File Deleted");
            });
        });
    });
});
