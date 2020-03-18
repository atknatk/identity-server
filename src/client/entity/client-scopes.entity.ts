import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("IX_ClientScopes_ClientId", ["clientId"], {})
@Index("PK_ClientScopes", ["id"], { unique: true })
@Entity("ClientScopes", { schema: "identity-server" })
export class ClientScopes extends BaseEntity{

  @Column("character varying", { name: "scope", length: 200 })
  scope: string;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientScopes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
