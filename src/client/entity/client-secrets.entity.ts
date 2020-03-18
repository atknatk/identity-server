import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_secret_client_id", ["client_id"], {})
@Index("pk_client_secret", ["id"], { unique: true })
@Entity("client_secret", { schema: "identity-server" })
export class ClientSecrets extends BaseEntity{
  
  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 2000
  })
  description: string | null;

  @Column("character varying", { name: "value", length: 2000 })
  value: string;

  @Column("timestamp without time zone", { name: "expiration", nullable: true })
  expiration: Date | null;

  @Column("character varying", { name: "type", nullable: true, length: 250 })
  type: string | null;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientSecrets,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
