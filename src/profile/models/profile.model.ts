import { Field, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.model';
import { Experience } from './experience.model';
import { Project } from './project.model';

@ObjectType()
export class Profile {
    @Field(() => String)
    name: string

    @Field(() => String)
    description: string

    @Field(() => String)
    github: string

    @Field(() => String, { nullable: true })
    linkedin: string

    @Field(() => [Skill])
    skills: Skill[]

    @Field(() => [Experience])
    experience: Experience[]

    @Field(() => [Project])
    projects: Project[]

    constructor(
        name: string,
        description: string,
        github: string,
        linkedin: string,
        skills: Skill[],
        experience: Experience[],
        projects: Project[],
    ) {
        this.name = name
        this.description = description
        this.github = github
        this.linkedin = linkedin
        this.skills = skills
        this.experience = experience
        this.projects = projects
    }
}
