import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Organization } from "./organization.entity";
import { User } from "src/user/entity/user.entity";
import { BaseEntity } from "src/entity/base.entity";

//@Index("ix_organization_user_organization_id", ["organization_id"], {})
//@Index("ix_organization_user_user_id", ["user_id"], {})
@Index("pk_organization_user", ["id"], { unique: true })
@Entity("organization_user", { schema: "identity-server" })
export class OrganizationUser extends BaseEntity{

  @Column("varchar", { name: "organization_id" })
  organizationId: string;

  @Column("varchar", { name: "user_id" })
  userId: string;

  @Column("boolean", { name: "is_constant" })
  isConstant: boolean;

  @ManyToOne(
    () => Organization,
    organization => organization.organizationUsers,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "organization_id", referencedColumnName: "id" }])
  organization: Organization;

  @ManyToOne(
    () => User,
    user => user.organizationUsers,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
