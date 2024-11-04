import "reflect-metadata"
import { DataSource } from "typeorm"
import { User, Card, Contact, Area, Community, Picture, Price, Tag } from './orm'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test_user",
    password: "test_user",
    database: "test_db",
    synchronize: true,
    logging: false,
    entities: [User, Card, Contact, Area, Community, Picture, Price, Tag],
    migrations: [],
    subscribers: [],
})
