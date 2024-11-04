import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Area } from "./Area";
import { Card } from "./Card";

//@Index("communities_pkey", ["id"], { unique: true })
@Entity("communities", { schema: "public" })
export class Community {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => Area, (area) => area.community)
  areas: Area[];

  @OneToMany(() => Card, (card) => card.community)
  cards: Card[];
}
