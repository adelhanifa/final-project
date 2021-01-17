const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const session = require('express-session');

//DATABASE
const dbLink = process.env.DBLink;
mongoose.connect(dbLink, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=> {console.log('DB connected')})
.catch((err)=> {console.log('DB NOT connected',err)});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//setup a session
app.use(session({ secret: process.env.SESSION_SECRET }));


//Routers
const usersRouter = require('./routes/usersRouter.js');
const goalsRouter = require('./routes/goalsRouter.js');
const groupsRouter = require('./routes/groupsRouter.js');
const sendEmailRouter = require('./routes/sendEmailRouter.js');

app.use('/user', usersRouter);
app.use('/goal', goalsRouter);
app.use('/group', groupsRouter);
app.use('/send-email', sendEmailRouter);

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(dbLink, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
 .then(()=> app.listen(PORT, () => console.log(`server running on port : http://localhost:${PORT} and connected to database`)))
 .catch((error) => console.log(`${error} did not connect`))


