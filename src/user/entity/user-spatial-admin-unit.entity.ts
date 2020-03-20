import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";
import { BaseEntity } from "src/entity/base.entity";
import { SpatialAdminUnit } from "src/shared/entity/spatial-admin-unit.entity";

@Index("pk_user_spatial_admin_unit", ["id"], { unique: true })
//@Index("ix_user_spatial_admin_unit_spatial_admin_unit_id", ["spatial_admin_unit_id"], {})
//@Index("ix_user_spatial_admin_unit_user_id", ["user_id"], {})
@Entity("user_spatial_admin_unit", { schema: "identity-server" })
export class UserSpatialAdminUnit extends BaseEntity{

  @Column("varchar", { name: "user_id" })
  userId: string;

  @Column("varchar", { name: "spatial_admin_unit_id" })
  spatialAdminUnitId: string;

  @ManyToOne(
    () => SpatialAdminUnit,
    spatialAdminUnit => spatialAdminUnit.userSpatialAdminUnits,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "spatial_admin_unit_id", referencedColumnName: "id" }])
  spatialAdminUnit: SpatialAdminUnit;

  @ManyToOne(
    () => User,
    user => user.userSpatialAdminUnits,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
