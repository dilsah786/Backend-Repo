BACKEND CRUD WITH ACTUAL AUTHENTICATION I (BLOGS)
Build only the Backend part of the application considering the following pointers:

It should have the following endpoints:

POST /signup
POST /login
GET /blogs
POST /blogs/create
PUT /blogs/:blogID
DELETE /blogs/:blogID
It should have the following custom middleware:

Logger Middleware

a) The request method, b) URL, c) current time when the request happened, d) the time it took for that particular request to be processed and the response to be sent, should be stored in a logs collection.

This middleware should work for all the endpoints.

Authentication Middleware

This middleware should work only for all the /blogs endpoints and not for /signup and /login endpoints.
It should check if the request query has a valid JWT. If the request has the correct JWT token, allow performing the CRUD operations on the /blogs endpoint; otherwise, send the response as "Not Authorized".
Note:

Use MongoDB Database to store the data.

For the /signup endpoint, take name, age, email, city, phone_no, password, and store that in the Users collection.

For the /login endpoint, take email and password. Check if this email and password exist in our Database. If they exist (which basically means that the user has signed up before and now logging in with the correct password) - send JWT token as the API response along with "login successful".

If the email and password are not correct (they don't exist in our database) - send "login failed" and don't send the jwt token.

Now once the user has signed up and logged in successfully, for any request to any of the /blogs endpoints, the user has to pass the JWT token (which they got when they logged in) as a query.

Authentication middleware will check if the jwt token is present in the query and if it is valid one. If it is valid, it will allow doing the CRUD operation on any of the /blogs endpoints. Otherwise, it will send "Not Authorized" as a response.

For example, /blogs should send a response as "Not Authorized," /blogs?token=actualjwttoken should send all blogs as a response, and so on for other blog endpoints too.

In the blog schema have:

Title
Content
Author
Category
Timestamp
GET /blogs - Should get all the blogs. Consider all the possible queries as well. For example /blogs?category=Technology should return only blogs under the "Technology" category, and so on for all the other possible queries.

POST /blogs/create - Create a blog, have validation in place to ensure all the required fields and values are present.

PUT /blogs/:blogID - Should modify a blog by the blog ID.

DELETE /blogs/:blogID - Should delete a blog by the blog ID.

Logger Middleware will log everything as mentioned above in detail.

Follow all the best practices - Commit code regularly, follow the proper structure of routes (like all the /blogs endpoints can be in blog routes, etc.), send proper status codes, clean code, etc. There are marks for all this also.

Make sure you are using MongoDB Atlas.

Feel free to refer to any official documentation or cheatsheet whenever required.