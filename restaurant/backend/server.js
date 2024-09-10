// import app from "./app.js";

// app.listen(process.env.PORT, () => {
//     console.log(`Server started at Port ${process.env.PORT}`);
// });

import app from "./app.js";

app.listen(process.env.PORT, () =>{
    console.log(`server running on port ${process.env.PORT}`);
});