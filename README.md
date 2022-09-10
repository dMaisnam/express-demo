<section align="center">
  <h1>Express CRUD demo</h1>
  <p>A demonstration of CRUD operations with <code style="color: blue;">express</code> and <code style="color: blue;">lowdb</code></p>
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

##### This project is meant for demonstration and teaching purposes and not ideal for real world applications

##### How to run in local environment
- Clone project
```bash
git clone https://github.com/dMaisnam/express-demo.git
```
- Go to project directory
```bash
mkdir express-demo
```
- Install dependencies
```bash
npm install
# If you use yarn
yarn install
```
- Run server
```bash
# In development
npm run dev
# in production
npm run start
```

##### Available endpoints 
- GET     `/_check`      - Check server status
- GET     `/v1/articles`      - Get all articles
- POST    `/v1/articles`      - Create new article
- GET     `/v1/articles/:id`  - Get article by id
- PUT     `/v1/articles/:id`  - Update article by id
- DELETE  `/v1/articles/:id`  - Delete article by id

##### Data schemas
```js
// Request
{
  title: string,
  excerpt: string
}
// Response
{
  id: string,
  title: string,
  excerpt: string,
  created: string
}
```

##### Notes
- The project uses `lowdb` version 1 for a reason. The current version does not support `PUT` and `DELETE` requests
- The "type" is set as "module" in `package.json` due to some issues. So your imports will have to include the file extensions when importing files
- The project also uses ES6 for easier conversion to TypeScript in the future
- Ideally the json file serving as the database should be replaced with a real database

Created by [Deba Maisnam](https://twitter.com/debamaisnam) :link: