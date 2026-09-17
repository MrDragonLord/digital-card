import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => String)
  name: string

  @Field(() => String)
  url: string

  constructor(name: string, url: string) {
    this.name = name
    this.url = url
  }
}
