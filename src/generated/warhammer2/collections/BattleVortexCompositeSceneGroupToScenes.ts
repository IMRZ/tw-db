
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";
import { CompositeSceneFiles } from "./CompositeSceneFiles";

export namespace BattleVortexCompositeSceneGroupToScenes {
  export const KEY = new CollectionKey("battle_vortex_composite_scene_group_to_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _groupId: string;
    readonly _compositeScene: string;
    readonly triggerDelay: number;
    readonly freezePosition: boolean;
    readonly freezeRotation: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._groupId = values["group_id"];
      this._compositeScene = values["composite_scene"];
      this.triggerDelay = values["trigger_delay"];
      this.freezePosition = !!values["freeze_position"];
      this.freezeRotation = !!values["freeze_rotation"];
    }
    
    get groupId(): BattleVortexCompositeSceneGroups.Entry | undefined {
      const collection = <BattleVortexCompositeSceneGroups.Entry[]>this.collectionCache.getCollection(BattleVortexCompositeSceneGroups.KEY, BattleVortexCompositeSceneGroups.Entry);
      return collection.find(entry => entry.groupId === this._groupId);
    }
    
    get compositeScene(): CompositeSceneFiles.Entry | undefined {
      const collection = <CompositeSceneFiles.Entry[]>this.collectionCache.getCollection(CompositeSceneFiles.KEY, CompositeSceneFiles.Entry);
      return collection.find(entry => entry.sceneFilepath === this._compositeScene);
    }
  }
}

export default BattleVortexCompositeSceneGroupToScenes;
