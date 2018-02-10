import express from "express";
import cors from "cors";
import path from 'path';
import logger from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import exphbs from'express-handlebars';
import mongoose from'mongoose';
import jwt from'jsonwebtoken';
import moment from'moment';
import request from'request';

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../app/routes";
import configureStore from "../app/shared/store/configureStore";
import App from "../app/shared/App";
import "source-map-support/register";

// Load environment variables from .env file
dotenv.load();

const app = express();


// Connect With Mongodb
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});



var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
});


app.use(cors());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join('public')));
// app.use(express.static("public"));

app.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      upvotes: 130,
      title: "Fianto Duri, the complete tutorial",
      author: "RubeusH",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 2,
      upvotes: 126,
      title: "Ordinary Wizarding Levels study guide",
      author: "BathBabb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 3,
      upvotes: 114,
      title: "Is muggle-baiting ever acceptable?",
      author: "Falco",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 4,
      upvotes: 97,
      title: "Untransfiguration classes to become compulsory at Hogwarts",
      author: "Baddock",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 5,
      upvotes: 85,
      title: "Cracking the Aurologist Interview ",
      author: "Hetty",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 6,
      upvotes: 74,
      title: "Conserving waterplants cheatsheet.",
      author: "Otto",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 7,
      upvotes: 66,
      title: "The Pragmatic Dragon Feeder",
      author: "Baruffio",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 8,
      upvotes: 50,
      title: "The complete quidditch statistics",
      author: "Hbeery",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 9,
      upvotes: 34,
      title: "Cracking the Aurologist Interview ",
      author: "Marcusb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 10,
      upvotes: 29,
      title: "Could wizards prevent WW3?",
      author: "Cuthbert",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 11,
      upvotes: 20,
      title: "ASK WN: What do you use to digitalize your scrolls?",
      author: "Alphard",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 12,
      upvotes: 16,
      title: "Show WN: Wand-Extinguishing Protection",
      author: "Humphrey22",
      date: new Date("2017-04-14T15:30:00.000Z")
    }
  ]);
});

app.use(function(req, res, next) {

  var initialState = {
    messages: {msg:"messagesssssss"}
  };

  var store = configureStore(initialState);

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {
        messages: {msg:"message"}
      };
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      var initialData = store.getState();

      console.log('------------------initialData start-----------------');
      console.log(initialData);
      console.log('----------------initialData end--------------');

      res.render('layouts/main', {
        markup: markup,
        initialData: initialData
      });

    })
    .catch(next);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Server Start On Port ' + app.get('port'));
});

export default app;
