
import { ObjectType, Field  } from 'type-graphql';

@ObjectType()
export class UserCreateDto {
  
  @Field()
  readonly firstName: string;
  
  @Field()
  readonly lastName: string;
  
  @Field()
  readonly username: string;

  @Field()
  readonly password: string;

}