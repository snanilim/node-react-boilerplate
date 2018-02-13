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