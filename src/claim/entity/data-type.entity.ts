import {
  Column,
  Entity,
  Index,
  OneToMany
} from "typeorm";
import { ClaimGroup } from "./claim-group.entity";
import { BaseEntity } from "src/entity/base.entity";

@Index("pk_data_type", ["id"], { unique: true })
@Entity("data_type", { schema: "identity-server" })
export class DataType extends BaseEntity{

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @OneToMany(
    () => ClaimGroup,
    claimGroup => claimGroup.dataType
  )
  claimGroups: ClaimGroup[];
}
