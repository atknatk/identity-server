import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { RoleClaim } from "./role-claim.entity";
import { RolePermission } from "./role-permission.entity";
import { UserRole } from "src/user/entity/user-role.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("pk_role", ["id"], { unique: true })
@Entity("role", { schema: "identity-server" })
export class Role extends BaseEntity{

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @OneToMany(
    () => RoleClaim,
    roleClaim => roleClaim.role
  )
  roleClaims: RoleClaim[];

  @OneToMany(
    () => RolePermission,
    rolePermission => rolePermission.role
  )
  rolePermissions: RolePermission[];

  @OneToMany(
    () => UserRole,
    userRole => userRole.role
  )
  userRoles: UserRole[];
}
