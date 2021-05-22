import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [
    EquipmentModule,
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
