import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { OrganizationType } from "./organization-type.entity";
import { OrganizationAdministrativeUnit } from "./organization-administrative-unit.entity";
import { OrganizationClaim } from "./organization-claim.entity";
import { OrganizationSpatialAdminUnit } from "./organization-spatial-admin-unit.entity";
import { OrganizationUser } from "./organization-user.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("pk_organization", ["id"], { unique: true })
//@Index("ix_organization_organization_type_id", ["organization_type_id"], {})
//@Index("ix_organization_super_organization_id", ["super_organization_id"], {})
@Entity("organization", { schema: "identity-server" })
export class Organization extends BaseEntity{
  @Column("text", { name: "Name", nullable: true })
  name: string | null;

  @Column("varchar", { name: "super_organization_id", nullable: true })
  superOrganizationId: string | null;

  @Column("varchar", { name: "organization_type_id" })
  organizationTypeId: string;

  @Column("text", { name: "tax_no", nullable: true })
  taxNo: string | null;

  @Column("text", { name: "organization_code", nullable: true })
  organizationCode: string | null;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @ManyToOne(
    () => OrganizationType,
    organizationType => organizationType.organizations,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "organization_type_id", referencedColumnName: "id" }])
  organizationType: OrganizationType;

  @ManyToOne(
    () => Organization,
    organization => organization.organizations,
    { onDelete: "RESTRICT" }
  )
  @JoinColumn([{ name: "super_organization_id", referencedColumnName: "id" }])
  superOrganization: Organization;

  @OneToMany(
    () => Organization,
    organization => organization.superOrganization
  )
  organizations: Organization[];

  @OneToMany(
    () => OrganizationAdministrativeUnit,
    organizationAdministrativeUnit =>
      organizationAdministrativeUnit.organization
  )
  organizationAdministrativeUnits: OrganizationAdministrativeUnit[];

  @OneToMany(
    () => OrganizationClaim,
    organizationClaim => organizationClaim.organization
  )
  organizationClaims: OrganizationClaim[];

  @OneToMany(
    () => OrganizationSpatialAdminUnit,
    organizationSpatialAdminUnit => organizationSpatialAdminUnit.organization
  )
  organizationSpatialAdminUnits: OrganizationSpatialAdminUnit[];

  @OneToMany(
    () => OrganizationUser,
    organizationUser => organizationUser.organization
  )
  organizationUsers: OrganizationUser[];
}
