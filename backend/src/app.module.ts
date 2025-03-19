import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { TechnologyModule } from './technology/technology.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [DbModule, TechnologyModule, ProjectModule],
  controllers: [AppController],
})
export class AppModule { }
