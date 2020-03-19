import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Role } from "./role.entity";
import { BaseEntity } from "src/entity/base.entity";
import { ClaimType } from "src/claim/entity/claim-type.entity";

//@Index("ix_role_claim_claim_type_id", ["claim_type_id"], {})
//@Index("ix_role_claim_role_id", ["role_id"], {})
@Index("pk_role_claim", ["id"], { unique: true })
@Entity("role_claim", { schema: "identity-server" })
export class RoleClaim extends BaseEntity{

  @Column("varchar", { name: "role_id" })
  roleId: string;

  @Column("varchar", { name: "claim_type_id" })
  claimTypeId: string;

  @ManyToOne(
    () => ClaimType,
    claimType => claimType.roleClaims,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "claim_type_id", referencedColumnName: "id" }])
  claimType: ClaimType;

  @ManyToOne(
    () => Role,
    role => role.roleClaims,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Role;
}
