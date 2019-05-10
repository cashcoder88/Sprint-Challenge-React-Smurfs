1.  Explain the differences between `client-side routing` and `server-side routing`.
    1a. With server-side routing, when a change or adjustment is made on the application, this triggers a new GET request, and refreshes the page, discarding the previous old page. With client side, when a change or adjustment is made by the user, the GET request will not be called, but the internal state of the app will change. This means the entire app must be loaded upon first opening it, which is not the case for server side.

2.  What does HTTP stand for? 
    2a. Hypertext Transfer Protocol

3.  What does CRUD stand for? 
    3a. create, read, update, and delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers. 
    4a. Post (c), Get (r), Put(u), Delete(d)
5.  Mention three tools we can use to make AJAX requests
Axios, fetch, superagent