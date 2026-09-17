import { Module } from '@nestjs/common'

import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { ProfileModule } from './profile/profile.module'


@Module({
    imports: [
        ProfileModule,

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
    ],
})
export class AppModule {}
