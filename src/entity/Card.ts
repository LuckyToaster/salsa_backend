import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Area } from "./Area";
import { Community } from "./Community";
import { User } from "./User";
import { Picture } from "./Picture";


//@Index("cards_pkey", ["id"], { unique: true })
@Entity("cards", { schema: "public" })
export class Card {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("timestamp with time zone", {name: "created_at", nullable: true, default: () => "now()"})
  createdAt: Date | null;

  @Column("timestamp with time zone", {name: "updated_at", nullable: true, default: () => "now()"})
  updatedAt: Date | null;

  @ManyToOne(() => Area, (areas) => areas.cards)
  @JoinColumn([{ name: "area_id", referencedColumnName: "id" }])
  area: Area;

  @ManyToOne(() => Community, (communities) => communities.cards)
  @JoinColumn([{ name: "community_id", referencedColumnName: "id" }])
  community: Community;

  @ManyToOne(() => User, (users) => users.cards, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @OneToMany(() => Picture, (pictures) => pictures.card)
  pictures: Picture[];
}
