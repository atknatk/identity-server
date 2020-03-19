import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "src/entity/base.entity";
import { Permission } from "src/permission/entity/permission.entity";
//import { UserApplicationAdministrativeUnit } from "./user-application-administrative-unit.entity";

@Index("pk_application", ["id"], { unique: true })
@Entity("application", { schema: "identity-server" })
export class Application extends BaseEntity{

  @Column("varchar", { name: "client_id" })
  clientId: string;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @OneToMany(
    () => Permission,
    permission => permission.application
  )
  permissions: Permission[];

  // @OneToMany(
  //   () => UserApplicationAdministrativeUnit,
  //   userApplicationAdministrativeUnit =>
  //     userApplicationAdministrativeUnit.application
  // )
  // userApplicationAdministrativeUnits: UserApplicationAdministrativeUnit[];
}
