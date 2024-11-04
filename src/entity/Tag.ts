import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


//@Index("tags_pkey", ["id"], { unique: true })
@Entity("tags", { schema: "public" })
export class Tag {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "tag", length: 255 })
  tag: string;
}
