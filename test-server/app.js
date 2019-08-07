const express = require('express')
const app = express()
const port = 3000
const Datastore = require('nedb')
let db = new Datastore();//{ filename: './events.db' }
let event = {
  id: 1,
  title: "new Event",
  description: "whatever",
  timeStart: "07:00H"
}

db.insert(event)
console.log(db);
 

app.get('/', (req, res) => {
    db.find({id: 1}, function (err, docs) {
     if(err) { 
      console.log(err) 
     }
  // docs is an array containing documents Mars, Earth, Jupiter
  // If no document is found, docs is equal to []
    res.json(docs);
})
 
})


app.get('/event/:event_id', (req, res) => {
  db.events.findOne({ id: req.params.event_id }, (err, evt) => {
    if (err) { throw(err); }
    return res.json('event', {
      title: evt.title, 
        signupURL: evt.signupURL, 
        description: evt.Description,
        timeStart: evt.timeStart, 
        timeEnd: evt.timeEnd, 
        date: evt.date,
     })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
