const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const unirest = require("unirest");
const app = express();
const mongoose = require("./mongoose");
const Users = require("./models/users");
const Songs = require("./models/songs");
const Albums = require("./models/Album");
const Queue = require("./models/queue");
const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
  })
);

//User APIs
{
  //Get All Users
  app.get("/users", (req, res) => {
    Users.find({})
      .then((user) => res.send(user))
      .catch((err) => console.log(err));
  });

  //Add an User
  app.post("/users", (req, res) => {
    new Users({ name: req.body.name, password: req.body.password })
      .save()
      .then((user) => res.send(user))
      .catch((err) => console.log(err));
  });

  //Get 1 User
  app.get("/users/:name", (req, res) => {
    Users.find({ name: req.params.name })
      .then((user) => res.send(user))
      .catch((err) => console.log(err));
  });

  //Updating User
  app.patch("/users/:name", (req, res) => {
    Users.findOneAndUpdate({ name: req.params.name }, { $set: req.body })
      .then((user) => res.send(user))
      .catch((err) => console.log(err));
  });

  //delete User
  app.delete("/users/:name", (req, res) => {
    Users.findOneAndDelete({ name: req.params.name })
      .then((user) => res.send(user))
      .catch((err) => console.log(err));
  });
}

//Song APIs
{
  // Get All Songs
  app.get("/songs", (req, res) => {
    Songs.find({})
      .then((songs) => res.send(songs))
      .catch((err) => console.log(err));
  });

  // Add a Song
  app.post("/songs", (req, res) => {
    new Songs({
      name: req.body.name,
      id: req.body.id,
      artist: req.body.artist,
      link: req.body.link,
    })
      .save()
      .then((song) => res.send(song))
      .catch((err) => console.log(err));
  });

  // Get 1 Song
  app.get("/songs/:id", (req, res) => {
    Songs.find({ id: req.params.id })
      .then((song) => res.send(song))
      .catch((err) => console.log(err));
  });

  // Update Song
  app.patch("/songs/:id", (req, res) => {
    Songs.findOneAndUpdate({ id: req.params.id }, { $set: req.body })
      .then((song) => res.send(song))
      .catch((err) => console.log(err));
  });

  // Delete Song
  app.delete("/songs/:id", (req, res) => {
    Songs.findOneAndDelete({ id: req.params.id })
      .then((song) => res.send(song))
      .catch((err) => console.log(err));
  });
}

//Album APIs
{
  // Get All Albums
  app.get("/albums", (req, res) => {
    Albums.find({})
      .then((albums) => res.send(albums))
      .catch((err) => console.log(err));
  });

  // Add an Album
  app.post("/albums", (req, res) => {
    new Albums({ id: req.body.id, name: req.body.name, songs: req.body.songs })
      .save()
      .then((album) => res.send(album))
      .catch((err) => console.log(err));
  });

  // Get 1 Album
  app.get("/albums/:id", (req, res) => {
    Albums.find({ id: req.params.id })
      .then((album) => res.send(album))
      .catch((err) => console.log(err));
  });

  // Update Album
  app.patch("/albums/:id", (req, res) => {
    Albums.findOneAndUpdate({ id: req.params.id }, { $set: req.body })
      .then((album) => res.send(album))
      .catch((err) => console.log(err));
  });

  // Delete Album
  app.delete("/albums/:id", (req, res) => {
    Albums.findOneAndDelete({ id: req.params.id })
      .then((album) => res.send(album))
      .catch((err) => console.log(err));
  });
}

//Queue APIs
{
  // Get All Queue
  app.get("/queue", (req, res) => {
    Queue.find({})
      .then((queue) => res.send(queue))
      .catch((err) => console.log(err));
  });

  // Add to Queue
  app.post("/queue", (req, res) => {
    new Queue({
      id: req.body.id,
      name: req.body.name,
      link: req.body.link,
    })
      .save()
      .then((queueItem) => res.send(queueItem))
      .catch((err) => console.log(err));
  });

  // Get 1 Item from Queue
  app.get("/queue/:id", (req, res) => {
    Queue.find({ id: req.params.id })
      .then((queueItem) => res.send(queueItem))
      .catch((err) => console.log(err));
  });

  // Update Queue Item
  app.patch("/queue/:id", (req, res) => {
    Queue.findOneAndUpdate({ id: req.params.id }, { $set: req.body })
      .then((queueItem) => res.send(queueItem))
      .catch((err) => console.log(err));
  });

  // Delete Queue Item
  app.delete("/queue/:id", (req, res) => {
    Queue.findOneAndDelete({ id: req.params.id })
      .then((queueItem) => res.send(queueItem))
      .catch((err) => console.log(err));
  });

  app.delete("/queue", (req, res) => {
    Queue.deleteMany({})
      .then(user => res.send(user))
      .catch((err) => console.log(err));
  });
  app.post("/queue/populate", (req, res) => {
    const queueItems = req.body; // Assuming req.body contains an array of queue items
  
    Queue.insertMany(queueItems)
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  });
}

//Get song from Online
app.get("/songsearch/:name", async (req, res) => {
  onlineSongLink = [];
  await getURL(req.params.name);
  console.log(onlineSongLink[0]);
  res.set("Access-Control-Allow-Origin", "*");
  res.send(onlineSongLink);
  /*         Med.find({ id: req.params.id })
            .then(user => res.send(user))
            .catch((err) => console.log(err)) */
});

async function getURL(med) {
  med = med.replace(" ", "+");
  return unirest
    .get("https://www.google.com/search?q=" + med)
    .headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    })
    .then(async (response) => {
      let $ = cheerio.load(response.body);
      console.log(response.status);
      let titles = [];
      let links = [];

      $("h3").each((i, el) => {
        titles[i] = $(el).text();
      });
      $("span > a").each((i, el) => {
        links[i] = $(el).attr("href");
      });

      const organicResults = [];

      for (let i = 0; i < titles.length; i++) {
        organicResults[i] = {
          title: titles[i],
          links: links[i],
        };
      }
      console.log(organicResults[0]);
      onlineSongLink = organicResults;
    });
}

app.listen(process.env.port || 3000, function () {
  console.log("now listening for requests");
});
