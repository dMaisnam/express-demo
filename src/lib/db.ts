import lowdb from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
import type { Schema } from "./types"

let db: lowdb.LowdbSync<Schema>

const createConnection = () => {
  const adapter = new FileSync<Schema>("db.json")
  db = lowdb(adapter)
  db.defaults({ articles: [] }).write()
}

export const connect = () => {
  createConnection()
  return db
}