import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


//@Index("prices_pkey", ["id"], { unique: true })
@Entity("prices", { schema: "public" })
export class Price {

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;

  @Column("character varying", {name: "description", nullable: true, length: 50})
  description: string | null;
}
