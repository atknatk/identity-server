import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_id_restrictions_client_id", ["client_id"], {})
@Index("pk_client_id_restrictions", ["id"], { unique: true })
@Entity("client_id_restrictions", { schema: "identity-server" })
export class ClientIdRestrictions extends BaseEntity{

  @Column("character varying", { name: "provider", length: 200 })
  provider: string;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientIdRestrictions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
