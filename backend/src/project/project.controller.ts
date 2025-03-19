import { Controller, Get, Param } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { Project } from '@core';

@Controller('project')
export class ProjectController {
    constructor(private readonly repo: ProjectPrisma) { }

    @Get()
    getTechnologies(): Promise<Project[] | []> {
        return this.repo.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Project | null> {
        return this.repo.getById(Number(id));
    }
}
