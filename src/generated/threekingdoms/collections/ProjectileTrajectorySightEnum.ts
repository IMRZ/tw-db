
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileTrajectorySightEnum {
  export const KEY = new CollectionKey("projectile_trajectory_sight_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ProjectileTrajectorySightEnum;
