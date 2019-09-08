
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleVortexCompositeSceneGroups {
  export const KEY = new CollectionKey("battle_vortex_composite_scene_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupId = values["group_id"];
    }
    
  }
}

export default BattleVortexCompositeSceneGroups;
