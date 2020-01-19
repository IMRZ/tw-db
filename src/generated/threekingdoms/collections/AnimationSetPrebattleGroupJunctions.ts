
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { AnimationSetPrebattleGroups } from "./AnimationSetPrebattleGroups";

export namespace AnimationSetPrebattleGroupJunctions {
  export const KEY = new CollectionKey("animation_set_prebattle_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _animSet: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._animSet = values["anim_set"];
      this._group = values["group"];
    }
    
    get animSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._animSet);
    }
    
    get group(): AnimationSetPrebattleGroups.Entry | undefined {
      const collection = <AnimationSetPrebattleGroups.Entry[]>this.collectionCache.getCollection(AnimationSetPrebattleGroups.KEY, AnimationSetPrebattleGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default AnimationSetPrebattleGroupJunctions;
