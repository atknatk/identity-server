import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_client_claims_client_id", ["client_id"], {})
@Index("pk_client_claims", ["id"], { unique: true })
@Entity("client_claims", { schema: "identity-server" })
export class ClientClaims extends BaseEntity{

  @Column("character varying", { name: "type", length: 250 })
  type: string;

  @Column("character varying", { name: "value", length: 250 })
  value: string;

  @Column("varchar", { name: "client_id" })
  clientId: string;

  @ManyToOne(
    () => Clients,
    clients => clients.clientClaims,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
