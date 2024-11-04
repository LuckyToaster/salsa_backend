import { AppDataSource } from "./data-source"
import {
    User,
    Contact,
} from './orm'


AppDataSource.initialize().then(async () => {

    const contact = new Contact();
    contact.phoneNum = '1234567890';
    contact.hasWhatsapp = true;
    contact.hasTelegram = false;
    contact.instagramHandle = '@example';
    contact.facebookHandle = null;
    contact.emailHandle = 'user@example.com';
    contact.linkedinHandle = 'linkedin.com/in/example';
    contact.createdAt = new Date();
    contact.updatedAt = new Date();

    const savedContact = await AppDataSource.manager.save(contact)

    console.log("Inserting a new user into the database...")

    const user = new User();
    user.mail = 'fudge@packer.com';
    user.password = 'user123'; 
    user.isVerified = false; 
    user.contact = savedContact; 
    user.createdAt = new Date();
    user.updatedAt = new Date();

    await AppDataSource.manager.save(user)

    console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...")

    const users = await AppDataSource.manager.find(User)

    console.log("Loaded users: ", users)

    const express = require('express')
    const server = express()
    server.get('/', (req, res) => { res.send("hello world") })
    server.listen(3000, () => console.log('=> Server running'))

}).catch(error => console.log(error))
