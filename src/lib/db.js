import lowdb from "lowdb"
import FileSync from "lowdb/adapters/FileSync.js"

let db

const createConnection = () => {
  const adapter = new FileSync("db.json")
  db = lowdb(adapter)
  db.defaults({ articles: [] }).write()
}

export const connect = () => {
  createConnection()
  return db
}