import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_properties_client_id", ["client_id"], {})
@Index("pk_client_properties", ["id"], { unique: true })
@Entity("client_properties", { schema: "identity-server" })
export class ClientProperties extends BaseEntity {


  @Column("character varying", { name: "key", length: 250 })
  key: string;

  @Column("character varying", { name: "value", length: 2000 })
  value: string;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientProperties,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
