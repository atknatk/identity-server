import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { ClaimGroup } from "./claim-group.entity";
import { BaseEntity } from "src/entity/base.entity";
import { OrganizationClaim } from "src/organization/entity/organization-claim.entity";
import { RoleClaim } from "src/role/entity/role-claim.entity";
// import { OrganizationClaim } from "./organization-claim.entity";
// import { UserClaim } from "./user-claim.entity";

//@Index("ix_claim_type_claim_group_id", ["claim_group_id"], {})
@Index("pk_claim_type", ["id"], { unique: true })
@Entity("claim_type", { schema: "identity-server" })
export class ClaimType extends BaseEntity{

  @Column("varchar", { name: "claim_group_id" })
  claimGroupId: string;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @ManyToOne(
    () => ClaimGroup,
    claimGroup => claimGroup.claimTypes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "claim_group_id", referencedColumnName: "id" }])
  claimGroup: ClaimGroup;

  @OneToMany(
    () => OrganizationClaim,
    organizationClaim => organizationClaim.claimType
  )
  organizationClaims: OrganizationClaim[];

  @OneToMany(
    () => RoleClaim,
    roleClaim => roleClaim.claimType
  )
  roleClaims: RoleClaim[];

  // @OneToMany(
  //   () => UserClaim,
  //   userClaim => userClaim.claimType
  // )
  // userClaims: UserClaim[];
}
