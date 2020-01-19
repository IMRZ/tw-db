
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileBombardmentLaunchSources {
  export const KEY = new CollectionKey("projectile_bombardment_launch_sources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly suggestedLaunchSource: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.suggestedLaunchSource = values["suggested_launch_source"];
      this.description = values["description"];
    }
    
  }
}

export default ProjectileBombardmentLaunchSources;
