import Technology from "../technology/Technology";
import { Level } from "./Level";
import { Type } from "./Type";

export default interface Project {
    id: number;
    name: string;
    description: string;
    images: string[];
    level: Level;
    type: Type;
    highlight: boolean;
    repository: string;
    technologies: Technology[];
}