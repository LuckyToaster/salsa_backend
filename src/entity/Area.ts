import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./Community";
import { Card } from "./Card";

//@Index("areas_pkey", ["id"], { unique: true })
@Entity("areas", { schema: "public" })
export class Area {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @ManyToOne(() => Community, (c) => c.areas)
  @JoinColumn([{ name: "community_id", referencedColumnName: "id" }])
  community: Community;

  @OneToMany(() => Card, (c) => c.area)
  cards: Card[];
}
