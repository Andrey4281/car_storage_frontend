import {Car} from "./car.model";
import {User} from "./user.model";
import {AttachedFile} from "./attached-file.model";

export class Advert {
  constructor(
    public id?: number,
    public created?: string,
    public description?: string,
    public status?: boolean,
    public user?: User,
    public car?: Car,
    public attachedFiles?: AttachedFile[]
  )
  {}
}
