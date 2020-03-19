import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity";
import { BaseEntity } from "src/entity/base.entity";
import { Role } from "src/role/entity/role.entity";

//@Index("ix_user_role_role_id", ["role_id"], {})
//@Index("ix_user_role_user_id", ["user_id"], {})
@Index("pk_user_role", ["id"], { unique: true })
@Entity("user_role", { schema: "identity-server" })
export class UserRole extends BaseEntity{
  @Column("varchar", { name: "user_id" })
  userId: string;

  @Column("varchar", { name: "role_id" })
  roleId: string;

  @Column("timestamp without time zone", {
    name: "starting_date",
    nullable: true
  })
  startingDate: Date | null;

  @Column("timestamp without time zone", {
    name: "expiring_date",
    nullable: true
  })
  expiringDate: Date | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @ManyToOne(
    () => Role,
    role => role.userRoles,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Role;

  @ManyToOne(
    () => User,
    user => user.userRoles,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
