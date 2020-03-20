import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Organization } from "./organization.entity";
import { BaseEntity } from "src/entity/base.entity";
import { SpatialAdminUnit } from "src/shared/entity/spatial-admin-unit.entity";
//import { SpatialAdminUnit } from "./spatial-admin-unit.entity";

// @Index("ix_organization_spatial_admin_unit_organization_id", ["organization_id"], {})
// @Index(
//   "ix_organization_spatial_admin_unit_spatial_admin_unit_id",
//   ["spatial_admin_unit_id"],
//   {}
// )
@Index("pk_organization_spatial_admin_unit", ["id"], { unique: true })
@Entity("organization_spatial_admin_unit", { schema: "identity-server" })
export class OrganizationSpatialAdminUnit extends BaseEntity{


  @Column("varchar", { name: "organization_id", nullable: true })
  organizationId: string | null;

  @Column("varchar", { name: "spatial_admin_unit_id" })
  spatialAdminUnitId: string;

  @ManyToOne(
    () => Organization,
    organization => organization.organizationSpatialAdminUnits,
    { onDelete: "RESTRICT" }
  )
  @JoinColumn([{ name: "organization_id", referencedColumnName: "id" }])
  organization: Organization;

  @ManyToOne(
    () => SpatialAdminUnit,
    spatialAdminUnit => spatialAdminUnit.organizationSpatialAdminUnits,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "spatial_admin_unit_id", referencedColumnName: "id" }])
  spatialAdminUnit: SpatialAdminUnit;
}
