# Petful Server

<a href="https://petful-client-git-master.donotle98.vercel.app/">Link to Live App!!!</a><br/>
<a href="https://github.com/donotle98/Petful-Client">Link to Client Code!!!</a><br/>

<span>The server side was built using Node.js, Express, Queues, Service Objects, Express routers</span>
<span>To run the local server, run 'npm run dev'</span>

<h1>API Documentation</h1>
> GET 'http://localhost:8080/'
<p>Route is the base route for entire api</p>
> GET 'http://localhost:8080/people'
<p>Route will retrieve an array of all the people in the queue</p>
> POST 'http://localhost:8080/people'
<p>Route will post a user to the queue only needing a name</p>
> DELETE 'http://localhost:8080/people'
<p>Route will dequeue the first user</p>
> GET 'http://localhost:8080/pets'
<p>Route will return the entire queue of pets, both cats and dogs</p>
> GET 'http://localhost:8080/pets/dogs'
<p>Route will return only the queue with dogs</p>
> GET 'http://localhost:8080/pets/cats'
<p>Route will return only the queue with cats</p>
> DELETE 'http://localhost:8080/pets/dogs'
<p>Route will dequeue the first dog</p>
> DELETE 'http://localhost:8080/pets/cats'
<p>Route will dequeue the first cat</p>

# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
