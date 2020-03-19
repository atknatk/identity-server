import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_client_cors_origins_clientId", ["client_id"], {})
@Index("pk_client_cors_origins", ["id"], { unique: true })
@Entity("client_cors_origins", { schema: "identity-server" })
export class ClientCorsOrigins extends BaseEntity{
 
  @Column("character varying", { name: "origin", length: 150 })
  origin: string;

  @Column("varchar", { name: "client_id" })
  clientId: string;

  @ManyToOne(
    () => Clients,
    clients => clients.clientCorsOrigins,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
