import { Resolver, Query } from '@nestjs/graphql';
import { Profile } from './models/profile.model';
import { ProfileService } from './profile.service';
import { Inject } from '@nestjs/common';

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(
        @Inject(ProfileService)
        private readonly profileService: ProfileService,
    ) {}

    @Query(() => Profile)
    async profile(): Promise<Profile> {
        return this.profileService.getProfile()
    }
}