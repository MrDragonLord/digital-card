import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Skill {
    @Field(() => String)
    name: string

    constructor(name: string) {
        this.name = name
    }
}
