import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


//@Index("contacts_pkey", ["id"], { unique: true })
@Entity("contacts", { schema: "public" })
export class Contact {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {name: "phone_num", nullable: true, length: 15})
  phoneNum: string | null;

  @Column("boolean", { name: "has_whatsapp", nullable: true })
  hasWhatsapp: boolean | null;

  @Column("boolean", { name: "has_telegram", nullable: true })
  hasTelegram: boolean | null;

  @Column("character varying", {name: "instagram_handle", nullable: true, length: 255})
  instagramHandle: string | null;

  @Column("character varying", {name: "facebook_handle", nullable: true, length: 255})
  facebookHandle: string | null;

  @Column("character varying", {name: "email_handle", nullable: true, length: 255})
  emailHandle: string | null;

  @Column("character varying", {name: "linkedin_handle", nullable: true, length: 255})
  linkedinHandle: string | null;

  @Column("timestamp with time zone", {name: "created_at", nullable: true, default: () => "now()"})
  createdAt: Date | null;

  @Column("timestamp with time zone", {name: "updated_at", nullable: true, default: () => "now()"})
  updatedAt: Date | null;

  @OneToOne(() => User, (user) => user.contact)
  user: User;
}
