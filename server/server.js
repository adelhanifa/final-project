const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

//DATABASE
const dbLink = process.env.DBLink;
mongoose.connect(dbLink, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=> {console.log('DB connected')})
.catch((err)=> {console.log('DB NOT connected',err)});

app.use(cors());
app.use(express.json());


//Routers
const usersRouter = require('./routes/usersRouter.js');
const goalsRouter = require('./routes/goalsRouter.js');
const groupsRouter = require('./routes/groupsRouter.js');
const sendEmailRouter = require('./routes/sendEmailRouter.js');

app.use('/user', usersRouter);
app.use('/goal', goalsRouter);
app.use('/group', groupsRouter);
app.use('/send-email', sendEmailRouter);

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});