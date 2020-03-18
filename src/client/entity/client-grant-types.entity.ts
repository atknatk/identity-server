import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_grant_types_client_id", ["client_id"], {})
@Index("pk_client_grant_types", ["id"], { unique: true })
@Entity("client_grant_types", { schema: "identity-server" })
export class ClientGrantTypes extends BaseEntity{

  @Column("character varying", { name: "grant_type", length: 250 })
  grantType: string;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientGrantTypes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
