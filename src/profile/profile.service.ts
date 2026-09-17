import { Injectable, NotFoundException } from '@nestjs/common'
import { db } from '../prisma/db'
import { Profile } from './models/profile.model'
import { Skill } from './models/skill.model'
import { Experience } from './models/experience.model'
import { Project } from './models/project.model'

@Injectable()
export class ProfileService {
    async getProfile() {
        const profile = await db
            .orm
            .public
            .Profile
            .include('skills')
            .include('experience', (query) =>
                query.orderBy((row) => row.startDate.desc())
            )
            .include('projects')
            .first()

        if (!profile) {
            throw new NotFoundException('Profile not found')
        }

        return new Profile(
            profile.name,
            profile.description,
            profile.github ?? '',
            profile.linkedin ?? '',
            profile.skills.map(
                (skill) => new Skill(skill.name),
            ),
            profile.experience.map(
                (experience) =>
                    new Experience(
                        experience.company,
                        experience.position,
                        experience.startDate
                            .toZonedDateTimeISO('Europe/Moscow')
                            .toPlainDate()
                            .toString(),
                        experience.endDate
                            ?.toZonedDateTimeISO('Europe/Moscow')
                            .toPlainDate()
                            .toString(),
                        [...experience.achievements],
                    )
            ),
            profile.projects.map(
                (project) =>
                    new Project(
                        project.name,
                        project.url,
                    ),
            ),
        )
    }
}