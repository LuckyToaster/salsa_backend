import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";

//@Index("pictures_pkey", ["id"], { unique: true })
@Entity("pictures", { schema: "public" })
export class Picture {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "picture_path", length: 255 })
  picturePath: string;

  @ManyToOne(() => Card, (card) => card.pictures, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "card_id", referencedColumnName: "id" }])
  card: Card;
}
