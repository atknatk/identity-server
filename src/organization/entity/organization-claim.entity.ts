import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Organization } from "./organization.entity";
import { ClaimType } from "src/claim/entity/claim-type.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("pk_organization_claim", ["id"], { unique: true })
//@Index("ix_organization_claim_claim_type_id", ["claim_type_id"], {})
//@Index("ix_organization_claim_organization_id", ["organization_id"], {})
@Entity("organizatiom_claim", { schema: "identity-server" })
export class OrganizationClaim extends BaseEntity{

  @Column("varchar", { name: "organization_id" })
  organizationId: string;

  @Column("varchar", { name: "claim_type_id" })
  claimTypeId: string;

  @Column("text", { name: "value", nullable: true })
  value: string | null;

  @ManyToOne(
    () => ClaimType,
    claimType => claimType.organizationClaims,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "claim_type_id", referencedColumnName: "id" }])
  claimType: ClaimType;

  @ManyToOne(
    () => Organization,
    organization => organization.organizationClaims,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "organization_id", referencedColumnName: "id" }])
  organization: Organization;
}
