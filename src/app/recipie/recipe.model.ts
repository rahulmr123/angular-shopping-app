export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    constructor(name,desc,imagePath){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}