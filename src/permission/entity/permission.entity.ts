import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { RolePermission } from "../../role/entity/role-permission.entity";
import { Application } from "src/user/entity/application.entity";
import { BaseEntity } from "src/entity/base.entity";
import { UserPermission } from "src/user/entity/user-permission.entity";

//@Index("ix_permission_application_id", ["application_id"], {})
@Index("pk_permission", ["id"], { unique: true })
@Entity("permission", { schema: "identity-server" })
export class Permission extends BaseEntity {

  @Column("varchar", { name: "application_id" })
  applicationId: string;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "code", nullable: true })
  code: string | null;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @ManyToOne(
    () => Application,
    application => application.permissions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "application_id", referencedColumnName: "id" }])
  application: Application;

  @OneToMany(
    () => RolePermission,
    rolePermission => rolePermission.permission
  )
  rolePermissions: RolePermission[];

  @OneToMany(
    () => UserPermission,
    userPermission => userPermission.permission
  )
  userPermissions: UserPermission[];
}
