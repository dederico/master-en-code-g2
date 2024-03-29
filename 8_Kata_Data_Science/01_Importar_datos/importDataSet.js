require ('dotenv').config();
const mongoose = require('mongoose');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));

const ClientSession = require('./ClientSession');

fs.createReadStream('e.csv')
  .pipe(csv())
  .on('data', (data) => {
    const {
      device_mac,
      branch_office,
      month_tz,
      day_tz,
      day_of_week_tz,
      hour_tz,
      visitor,
      tiempodeses,
    } = data;

    const day = parseInt(day_tz);
    const dayString = day > 9 ? `${day}` : `0${day}`;
        
    const hour = parseInt(hour_tz)
    const hourString = hour > 9 ? `${hour}` : `0${hour}`;

    const newClientSession = {
      device_mac,
      branch_office: parseInt(branch_office),
      month_tz: parseInt(month_tz),
      day_tz: day,
      day_of_week_tz,
      hour_tz: hour,
      is_visitor: visitor === 'true',
      date_tz: new Date(`2016-${month_tz}-${dayString}T${hourString}:00:00Z`),
      // truthy - 1, [], 'acasd', true
      // falsy - 0, null, undefined, ''
      session_duration: parseInt(tiempodeses),
    }

    results.push(newClientSession);
  })
  .on('end', async () => {
    for (let index = 0; index < 20; index++) {
      console.log(`Row# ${index} inserted`);
      await ClientSession.create(results[index]);
    }
  });
