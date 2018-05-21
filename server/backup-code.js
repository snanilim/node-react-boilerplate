  // const promises = routes.reduce((acc, route) => {
  //   if (matchPath(req.url, route) && route.component && route.component.initialAction) {
  //     acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
  //   }
  //   return acc;
  // }, []);

  // Promise.all(promises)
  //   .then(() => {
  //     const context = {
  //       messages: {msg:"message"}
  //     };
  //     const markup = renderToString(
  //       <Provider store={store}>
  //         <StaticRouter location={req.url} context={context}>
  //           <App />
  //         </StaticRouter>
  //       </Provider>
  //     );

  //     var initialData = store.getState();

  //     res.render('layouts/main', {
  //       markup: markup,
  //       initialData: initialData
  //     });

  //   })
  //   .catch(next);

  {/* 
        {
          routes.map((route, i) => (
          route.isAuthenticated ? (
            <Route key={i} {...route} />
          ) : (
            <Redirect  key={i} to={{
              pathname: '/login',
              state: { }
            }}/>
          )
          
          // <Route key={i} {...route} />
        ))
        
        } */}

// Connect with redis 
// var redisClient = require('redis').createClient;
// var redis = redisClient(6379, 'localhost');

    // redis.get(payload.sub, function (err, redisUser) {
    //   if(err){
    //     console.log(err);
    //   }else if(redisUser){
    //     var redUser = JSON.parse(redisUser);
    //     console.log(typeof redUser);
    //     req.user = redUser;
    //     next();
    //   }else{
    //     User.findById(payload.sub, function(err, user) {
    //       req.user = user;
    //       redis.set(payload.sub, JSON.stringify(user), function () {
    //         next();
    //       });
          
    //     });
    //   }
    // })
