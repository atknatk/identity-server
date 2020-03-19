import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Organization } from "./organization.entity";
import { BaseEntity } from "src/entity/base.entity";

// @Index(
//   "ix_organization_type_super_organization_type_id",
//   ["super_organization_type_id"],
//   {}
// )
@Index("pk_organization_type", ["id"], { unique: true })
@Entity("organization_type", { schema: "identity-server" })
export class OrganizationType extends BaseEntity{

  @Column("varchar", { name: "super_organization_type_id", nullable: true })
  superOrganizationTypeId: string | null;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("uuid", { name: "unique_id" })
  uniqueId: string;

  @OneToMany(
    () => Organization,
    organization => organization.organizationType
  )
  organizations: Organization[];

  @ManyToOne(
    () => OrganizationType,
    organizationType => organizationType.organizationTypes,
    { onDelete: "RESTRICT" }
  )
  @JoinColumn([{ name: "super_organization_type_id", referencedColumnName: "id" }])
  superOrganizationType: OrganizationType;

  @OneToMany(
    () => OrganizationType,
    organizationType => organizationType.superOrganizationType
  )
  organizationTypes: OrganizationType[];
}
