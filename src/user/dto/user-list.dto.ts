
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class AddUserDto {
  
  @Field(() => ID)
  readonly id?: string;
  
  @Field()
  readonly fullName: string;
  
  @Field()
  readonly username: string;

}