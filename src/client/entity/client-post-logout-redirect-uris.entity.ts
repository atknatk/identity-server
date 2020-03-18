import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Clients } from "./clients.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_post_logout_redirect_uris_client_id", ["client_id"], {})
@Index("pk_client_post_logout_redirect_uris", ["id"], { unique: true })
@Entity("ClientPostLogoutRedirectUris", { schema: "identity-server" })
export class ClientPostLogoutRedirectUris extends BaseEntity {

  @Column("character varying", { name: "post_logout_redirect_uri", length: 2000 })
  postLogoutRedirectUri: string;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @ManyToOne(
    () => Clients,
    clients => clients.clientPostLogoutRedirectUris,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;
}
