import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Experience {
    @Field(() => String)
    company: string

    @Field(() => String)
    position: string

    @Field(() => String)
    startDate: string

    @Field(() => String, { nullable: true })
    endDate: string

    @Field(() => [String])
    achievements: string[];

    constructor(
        company: string,
        position: string,
        startDate: string,
        endDate: string,
        achievements: string[],
    ) {
        this.company = company
        this.position = position
        this.startDate = startDate
        this.endDate = endDate
        this.achievements = achievements
    }
}
