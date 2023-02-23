<section align="center">
  <h1>Express CRUD demo</h1>
  <p>A demonstration of CRUD operations with <code style="color: blue;">Express</code> and <code style="color: blue;">Prisma</code></p>
  <div>
    <img 
      src="https://img.shields.io/github/issues/dMaisnam/express-demo" 
      alt="Open issues"
    />
    <img 
      src="https://img.shields.io/github/stars/dMaisnam/express-demo" 
      alt="Github stars"
    />
    <img 
      src="https://img.shields.io/github/forks/dMaisnam/express-demo" 
      alt="Total forks"
    />
    <img 
      src="https://img.shields.io/github/license/dMaisnam/express-demo" 
      alt="Github license"
    />
  </div>
</section>

#### How to run in local environment
- Clone project
```sh
git clone https://github.com/dMaisnam/express-demo.git
```
- Go to project directory
```sh
cd express-demo
```
- Install dependencies
```sh
npm install
# If you use yarn
yarn install
```
- Create a file called `.env` in your project root and define the `DATABASE_URL` below to the file
```sh
echo DATABASE_URL="file:./dev.db" > .env
```
- Apply migrations
```sh
npx prisma db pull
```
- Run server
```sh
# In development
npm run dev
# in production
npm run start
```

#### Available endpoints 
API_URL = http://127.0.0.1:3001
- GET     `{{API_URL}}/api/v1/_check`        - Check server status
- GET     `{{API_URL}}/api/v1/todos`      - Get all todos
- POST    `{{API_URL}}/api/v1/todos`      - Create new todo
- GET     `{{API_URL}}/api/v1/todos/:id`  - Get todo by id
- PUT     `{{API_URL}}/api/v1/todos/:id`  - Update todo by id
- DELETE  `{{API_URL}}/api/v1/todos/:id`  - Delete todo by id

#### Data schemas
##### Request
```json
{
  "title": string,
  "completed": boolean
}
```
##### Response
```json
{
  "success": boolean,
  "data": {
    "id": string,
    "title": string,
    "completed": boolean,
    "created": string,
  }
}
```

#### Notes
```sh
# Get all
curl http://127.0.0.1:3001/api/v1/todos
# Get by id
curl http://127.0.0.1:3001/api/v1/todos/:id
# Post
curl -X POST -H "Content-Type:application/json" --data "{\"title\": \"Your title\", \"completed\": false}" http://127.0.0.1:3001/api/v1/todos
# Put by id
curl -X PUT -H "Content-Type:application/json" --data "{\"title\": \"Your title updated\", \"completed\": true}" http://127.0.0.1:3001/api/v1/todos/:id
# Delete by id
curl -X DELETE http://127.0.0.1:3001/api/v1/todos/:id
```

Created by [Deba Maisnam](https://twitter.com/debamaisnam) :link: