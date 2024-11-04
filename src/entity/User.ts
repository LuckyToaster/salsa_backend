import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";
import { Contact } from "./Contact";

//@Index("users_contact_id_key", ["contactId"], { unique: true })
//@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" }) export class User {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "mail", length: 255 })
  mail: string;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("boolean", { name: "is_verified" })
  isVerified: boolean;

  //@Column("integer", { name: "contact_id", unique: true })
  //contactId: number;

  @Column("timestamp with time zone", {name: "created_at", nullable: true, default: () => "now()"})
  createdAt: Date | null;

  @Column("timestamp with time zone", {name: "updated_at", nullable: true, default: () => "now()"})
  updatedAt: Date | null;

  @OneToMany(() => Card, (card) => card.user)
  cards: Card[];

  @OneToOne(() => Contact, (contact) => contact.user, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "contact_id", referencedColumnName: "id" }])
  contact: Contact;
}
