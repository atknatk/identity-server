import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_client_scopes_client_id", ["client_id"], {})
@Index("pk_client_scopes", ["id"], { unique: true })
@Entity("client_scopes", { schema: "identity-server" })
export class ClientScopes extends BaseEntity{

  @Column("character varying", { name: "scope", length: 200 })
  scope: string;

  @Column("varchar", { name: "client_id" })
  clientId: string;

  @ManyToOne(
    () => Clients,
    clients => clients.clientScopes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
