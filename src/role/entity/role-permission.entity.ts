import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Permission } from "../../permission/entity/permission.entity";
import { Role } from "./role.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("pk_role_permission", ["id"], { unique: true })
//@Index("ix_role_permission_permission_id", ["permission_id"], {})
//@Index("ix_role_permission_role_id", ["role_id"], {})
@Entity("role_permission", { schema: "identity-server" })
export class RolePermission extends BaseEntity{

  @Column("varchar", { name: "role_id" })
  roleId: string;

  @Column("varchar", { name: "permission_id" })
  permissionId: string;

  @ManyToOne(
    () => Permission,
    permission => permission.rolePermissions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: Permission;

  @ManyToOne(
    () => Role,
    role => role.rolePermissions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Role;
}
