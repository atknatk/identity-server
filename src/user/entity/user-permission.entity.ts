import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Permission } from "src/permission/entity/permission.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_user_permission_permission_id", ["permission_id"], {})
//@Index("ix_user_permission_user_id", ["user_id"], {})
@Index("pk_user_permission", ["id"], { unique: true })
@Entity("user_permission", { schema: "identity-server" })
export class UserPermission extends BaseEntity {

  @Column("varchar", { name: "user_id" })
  userId: string;

  @Column("varchar", { name: "permission_id" })
  permissionId: string;

  @ManyToOne(
    () => Permission,
    permission => permission.userPermissions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: Permission;

  @ManyToOne(
    () => User,
    user => user.userPermissions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
