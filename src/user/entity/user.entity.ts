import {
  Column,
  Entity,
  Index,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "src/entity/base.entity";
import { UserPermission } from "./user-permission.entity";
import { UserRole } from "./user-role.entity";
import { OrganizationUser } from "src/organization/entity/organization-user.entity";
// import { UserApplicationAdministrativeUnit } from "./user-application-administrative-unit.entity";
// import { UserClaim } from "./user-claim.entity";
// import { UserRole } from "./user-role.entity";
// import { UserSpatialAdminUnit } from "./user-spatial-admin-unit.entity";

@Index("pk_user", ["id"], { unique: true })
@Entity("users", { schema: "identity-server" })
export class User extends BaseEntity {

  @Column("text", { name: "username", nullable: true })
  username: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("text", { name: "identity_number", nullable: true })
  identityNumber: string | null;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "surname", nullable: true })
  surname: string | null;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @OneToMany(
    () => OrganizationUser,
    organizationUser => organizationUser.user
  )
  organizationUsers: OrganizationUser[];

  // @OneToMany(
  //   () => UserApplicationAdministrativeUnit,
  //   userApplicationAdministrativeUnit => userApplicationAdministrativeUnit.user
  // )
  // userApplicationAdministrativeUnits: UserApplicationAdministrativeUnit[];

  // @OneToMany(
  //   () => UserClaim,
  //   userClaim => userClaim.user
  // )
  // userClaims: UserClaim[];

  @OneToMany(
    () => UserPermission,
    userPermission => userPermission.user
  )
  userPermissions: UserPermission[];

  @OneToMany(
    () => UserRole,
    userRole => userRole.user
  )
  userRoles: UserRole[];

  // @OneToMany(
  //   () => UserSpatialAdminUnit,
  //   userSpatialAdminUnit => userSpatialAdminUnit.user
  // )
  // userSpatialAdminUnits: UserSpatialAdminUnit[];
}
