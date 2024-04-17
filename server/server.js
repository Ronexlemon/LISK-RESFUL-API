const express = require('express');
const getItemsRequests = require("./routes/getRoutes")
const writeItemRequests = require("./routes/writeroutes")

const app = express();

app.use(express.json());

const PORT = 3000;
app.use("/api/read",getItemsRequests);
app.use("/api/write",writeItemRequests);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
