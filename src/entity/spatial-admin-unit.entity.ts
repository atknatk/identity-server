import { Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "src/entity/base.entity";
import { OrganizationSpatialAdminUnit } from "src/organization/entity/organization-spatial-admin-unit.entity";
import { UserSpatialAdminUnit } from "src/user/entity/user-spatial-admin-unit.entity";

@Index("pk_spatial_admin_unit", ["id"], { unique: true })
@Entity("spatial_admin_unit", { schema: "identity-server" })
export class SpatialAdminUnit extends BaseEntity{

  @OneToMany(
    () => OrganizationSpatialAdminUnit,
    organizationSpatialAdminUnit =>
      organizationSpatialAdminUnit.spatialAdminUnit
  )
  organizationSpatialAdminUnits: OrganizationSpatialAdminUnit[];

  @OneToMany(
    () => UserSpatialAdminUnit,
    userSpatialAdminUnit => userSpatialAdminUnit.spatialAdminUnit
  )
  userSpatialAdminUnits: UserSpatialAdminUnit[];
}
