import { Controller, Get } from '@nestjs/common';
import { Technology } from '@core';
import { TechnologyPrisma } from './technology.prisma';

@Controller('technology')
export class TechnologyController {
    constructor(private readonly repo: TechnologyPrisma) { }

    @Get()
    getTechnologies(): Promise<Technology[] | []> {
        return this.repo.getAll();
    }

    @Get('highlights')
    getHighlights(): Promise<Technology[] | []> {
        return this.repo.getHighlights();
    }
}
