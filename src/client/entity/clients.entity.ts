import {
  Column,
  Entity,
  Index,
  OneToMany
} from "typeorm";
// import { ClientClaims } from "./client-claims.entity";
import { ClientCorsOrigins } from "./client-cors-origins.entity";
import { ClientGrantTypes } from "./client-grant-types.entity";
import { ClientIdRestrictions } from "./client-id-restrictions.entity";
import { ClientPostLogoutRedirectUris } from "./client-post-logout-redirect-uris.entity";
import { ClientProperties } from "./client-properties.entity";
import { ClientRedirectUris } from "./client-redirect-uris.entity";
import { ClientScopes } from "./client-scopes.entity";
import { ClientSecrets} from "./client-secrets.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("ix_client_client_id", ["client_id"], { unique: true })
@Index("pk_client", ["id"], { unique: true })
@Entity("clients", { schema: "identity-server" })
export class Clients extends BaseEntity{

  @Column("boolean", { name: "enabled" })
  enabled: boolean;

  @Column("character varying", { name: "client_id", length: 200 })
  clientId: string;

  @Column("character varying", { name: "protocol_type", length: 200 })
  protocolType: string;

  @Column("boolean", { name: "require_client_secret" })
  requireClientSecret: boolean;

  @Column("character varying", {
    name: "client_name",
    nullable: true,
    length: 200
  })
  clientName: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 1000
  })
  description: string | null;

  @Column("character varying", {
    name: "client_uri",
    nullable: true,
    length: 2000
  })
  clientUri: string | null;

  @Column("character varying", {
    name: "logo_uri",
    nullable: true,
    length: 2000
  })
  logoUri: string | null;

  @Column("boolean", { name: "require_consent" })
  requireConsent: boolean;

  @Column("boolean", { name: "allow_remember_consent" })
  allowRememberConsent: boolean;

  @Column("boolean", { name: "always_include_user_claims_in_id_token" })
  alwaysIncludeUserClaimsInIdToken: boolean;

  @Column("boolean", { name: "require_pkce" })
  requirePkce: boolean;

  @Column("boolean", { name: "allow_plain_text_pkce" })
  allowPlainTextPkce: boolean;

  @Column("boolean", { name: "allow_access_tokens_via_browser" })
  allowAccessTokensViaBrowser: boolean;

  @Column("character varying", {
    name: "front_channel_logout_uri",
    nullable: true,
    length: 2000
  })
  frontChannelLogoutUri: string | null;

  @Column("boolean", { name: "front_channel_logout_session_required" })
  frontChannelLogoutSessionRequired: boolean;

  @Column("character varying", {
    name: "back_channel_logout_uri",
    nullable: true,
    length: 2000
  })
  backChannelLogoutUri: string | null;

  @Column("boolean", { name: "back_channel_logout_session_required" })
  backChannelLogoutSessionRequired: boolean;

  @Column("boolean", { name: "allow_offline_access" })
  allowOfflineAccess: boolean;

  @Column("integer", { name: "identity_token_lifetime" })
  identityTokenLifetime: number;

  @Column("integer", { name: "access_token_lifetime" })
  accessTokenLifetime: number;

  @Column("integer", { name: "authorization_code_lifetime" })
  authorizationCodeLifetime: number;

  @Column("integer", { name: "consent_lifetime", nullable: true })
  consentLifetime: number | null;

  @Column("integer", { name: "absolute_refresh_token_lifetime" })
  absoluteRefreshTokenLifetime: number;

  @Column("integer", { name: "sliding_refresh_token_lifetime" })
  slidingRefreshTokenLifetime: number;

  @Column("integer", { name: "refresh_token_usage" })
  refreshTokenUsage: number;

  @Column("boolean", { name: "update_access_token_claims_on_refresh" })
  updateAccessTokenClaimsOnRefresh: boolean;

  @Column("integer", { name: "refresh_token_expiration" })
  refreshTokenExpiration: number;

  @Column("integer", { name: "access_token_type" })
  accessTokenType: number;

  @Column("boolean", { name: "enable_local_login" })
  enableLocalLogin: boolean;

  @Column("boolean", { name: "include_jwt_id" })
  includeJwtId: boolean;

  @Column("boolean", { name: "always_send_client_claims" })
  alwaysSendClientClaims: boolean;

  @Column("character varying", {
    name: "client_claims_prefix",
    nullable: true,
    length: 200
  })
  clientClaimsPrefix: string | null;

  @Column("character varying", {
    name: "pair_wise_subject_salt",
    nullable: true,
    length: 200
  })
  pairWiseSubjectSalt: string | null;

  // @OneToMany(
  //   () => ClientClaims,
  //   clientClaims => clientClaims.client
  // )
  // clientClaims: ClientClaims[];

  @OneToMany(
    () => ClientCorsOrigins,
    clientCorsOrigins => clientCorsOrigins.client
  )
  clientCorsOrigins: ClientCorsOrigins[];

  @OneToMany(
    () => ClientGrantTypes,
    clientGrantTypes => clientGrantTypes.client
  )
  clientGrantTypes: ClientGrantTypes[];

  @OneToMany(
    () => ClientIdRestrictions,
    clientIdPRestrictions => clientIdPRestrictions.client
  )
  clientIdRestrictions: ClientIdRestrictions[];

  @OneToMany(
    () => ClientPostLogoutRedirectUris,
    clientPostLogoutRedirectUris => clientPostLogoutRedirectUris.client
  )
  clientPostLogoutRedirectUris: ClientPostLogoutRedirectUris[];

  @OneToMany(
    () => ClientProperties,
    clientProperties => clientProperties.client
  )
  clientProperties: ClientProperties[];

  @OneToMany(
    () => ClientRedirectUris,
    clientRedirectUris => clientRedirectUris.client
  )
  clientRedirectUris: ClientRedirectUris[];

  @OneToMany(
    () => ClientScopes,
    clientScopes => clientScopes.client
  )
  clientScopes: ClientScopes[];

  @OneToMany(
    () => ClientSecrets,
    clientSecrets => clientSecrets.client
  )
  clientSecrets: ClientSecrets[];
}
