import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { DataType } from "./data-type.entity";
import { ClaimType } from "./claim-type.entity";

@Index("ix_claim_group_data_type_id", ["data_type_id"], {})
@Index("pk_claim_group", ["id"], { unique: true })
@Entity("claim_group", { schema: "identity-server" })
export class ClaimGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "regex_pattern", nullable: true })
  regexPattern: string | null;

  @Column("integer", { name: "data_type_id" })
  dataTypeId: number;

  @ManyToOne(
    () => DataType,
    dataType => dataType.claimGroups,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "data_type_id", referencedColumnName: "id" }])
  dataType: DataType;

  @OneToMany(
    () => ClaimType,
    claimType => claimType.claimGroup
  )
  claimTypes: ClaimType[];
}
