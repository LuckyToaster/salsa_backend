import { 
    Column, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    ManyToOne,
    OneToOne, 
    ManyToMany,
    PrimaryGeneratedColumn 
} from "typeorm";


@Entity() 
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", { name: "email", length: 255 })
    mail: string;

    @Column("character varying", { name: "password", length: 255 })
    password: string; // should be stored as hash

    @Column()
    isVerified: boolean;

    @OneToMany(() => Card, (card) => card.user)
    cards: Card[];

    @OneToOne(() => Contact, (contact) => contact.user, { onDelete: "CASCADE" })
    @JoinColumn([{ name: "contact_id", referencedColumnName: "id" }])
    contact: Contact;

    @Column("timestamp with time zone", {name: "created_at", nullable: true, default: () => "now()"})
    createdAt: Date | null;

    @Column("timestamp with time zone", {name: "updated_at", nullable: true, default: () => "now()"})
    updatedAt: Date | null;
}



@Entity("contacts", { schema: "public" })
class Contact {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @OneToOne(() => User, (user) => user.contact)
    user: User;

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
}



@Entity("cards", { schema: "public" })
class Card {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ManyToOne(() => User, (u) => u.cards, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;

    @ManyToOne(() => Area, (a) => a.cards)
    @JoinColumn()
    area: Area;

    @ManyToOne(() => Community, (c) => c.cards)
    @JoinColumn()
    community: Community;

    @OneToMany(() => Picture, (p) => p.card)
    pictures: Picture[];

    @OneToMany(() => Price, (p) => p.card)
    prices: Price[];

    @ManyToMany(() => Tag, (t) => t.cards)
    @JoinColumn()
    tags: Tag[];

    @Column("character varying", { name: "title", length: 50 })
    title: string;

    @Column("text", { name: "description" })
    description: string;

    @Column("timestamp with time zone", {name: "created_at", nullable: true, default: () => "now()"})
    createdAt: Date | null;

    @Column("timestamp with time zone", {name: "updated_at", nullable: true, default: () => "now()"})
    updatedAt: Date | null;
}



@Entity("communities", { schema: "public" })
class Community {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @OneToMany(() => Area, (area) => area.community)
    areas: Area[];

    @OneToMany(() => Card, (card) => card.community)
    cards: Card[];

    @Column("character varying", { name: "name", length: 255 })
    name: string;
}



@Entity("areas", { schema: "public" })
class Area {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ManyToOne(() => Community, (c) => c.areas)
    @JoinColumn()
    community: Community;

    @OneToMany(() => Card, (c) => c.area)
    cards: Card[];

    @Column("character varying", { name: "name", length: 255 })
    name: string;
}



@Entity("pictures", { schema: "public" })
class Picture {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ManyToOne(() => Card, (card) => card.pictures, { onDelete: "CASCADE" })
    @JoinColumn()
    card: Card;

    @Column("character varying", { name: "picture_path", length: 255 })
    picturePath: string;
}



@Entity("prices", { schema: "public" })
class Price {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ManyToOne(() => Card, (c) => c.prices)
    card: Card

    @Column("numeric", { name: "price", nullable: true })
    price: string | null;

    @Column("character varying", {name: "description", nullable: true, length: 50})
    description: string | null;
}



@Entity("tags", { schema: "public" })
class Tag {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToMany(() => Card, (c) => c.tags)
  cards: Card[]

  @Column("character varying", { name: "tag", length: 255 })
  tag: string;
}

export { User, Contact, Card, Picture, Community, Area, Tag, Price };

