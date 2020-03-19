import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_clientRedirect_uris_client_id", ["client_id"], {})
@Index("pk_client_redirect_uris", ["id"], { unique: true })
@Entity("client_redirect_uris", { schema: "identity-server" })
export class ClientRedirectUris extends BaseEntity{
  
  @Column("character varying", { name: "redirect_uri", length: 2000 })
  redirectUri: string;

  @Column("varchar", { name: "client_id" })
  clientId: string;

  @ManyToOne(
    () => Clients,
    clients => clients.clientRedirectUris,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
