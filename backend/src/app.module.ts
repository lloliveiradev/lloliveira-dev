import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { DbModule } from "./db/db.module"
import { TechnologyModule } from "./technology/technology.module"
import { ProjectModule } from "./project/project.module"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"

@Module({
  imports: [
    DbModule,
    TechnologyModule,
    ProjectModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../frontend", "dist"),
      exclude: ["/api*"],
    }),
  ],
  controllers: [AppController],
})
export class AppModule { }
