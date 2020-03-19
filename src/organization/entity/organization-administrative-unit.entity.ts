import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
//import { AdministrativeUnit } from "./administrative-unit.entity";
import { Organization } from "./organization.entity";
import { BaseEntity } from "src/entity/base.entity";

// @Index(
//   "ix_organization_administrative_unit_administrative_unit_id",
//   ["administrative_unit_id"],
//   {}
// )
// @Index(
//   "ix_organization_administrative_unit_organization_id",
//   ["organization_id"],
//   {}
// )
@Index("pk_organization_administrative_unit", ["id"], { unique: true })
@Entity("organization_administrative_unit", { schema: "identity-server" })
export class OrganizationAdministrativeUnit extends BaseEntity {
  @Column("varchar", { name: "organization_id" })
  organizationId: string;

  @Column("varchar", { name: "administrative_unit_id" })
  administrativeUnitId: string;

  // @ManyToOne(
  //   () => AdministrativeUnit,
  //   administrativeUnit => administrativeUnit.organizationAdministrativeUnits,
  //   { onDelete: "CASCADE" }
  // )
  // @JoinColumn([{ name: "administrative_unit_id", referencedColumnName: "id" }])
  // administrativeUnit: AdministrativeUnit;

  @ManyToOne(
    () => Organization,
    organization => organization.organizationAdministrativeUnits,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "organization_id", referencedColumnName: "id" }])
  organization: Organization;
}
