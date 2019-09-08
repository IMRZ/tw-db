
import { CollectionCache, CollectionKey } from "../../../common";
import { AnimReferencePoses } from "./AnimReferencePoses";

export namespace CampaignWalkAnimSets {
  export const KEY = new CollectionKey("campaign_walk_anim_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _referencePose: string;
    readonly preStepTo: string;
    readonly stepTo: string;
    readonly postStepTo: string;
    readonly preStandToWalk: string;
    readonly standToWalk: string;
    readonly standToWalkDistance: number;
    readonly walk: string;
    readonly walkDistance: number;
    readonly walkToStand: string;
    readonly midWalkToStand: string;
    readonly walkToStandDistance: number;
    readonly postWalkToStand: string;
    readonly postMidWalkToStand: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._referencePose = values["reference_pose"];
      this.preStepTo = values["pre_step_to"];
      this.stepTo = values["step_to"];
      this.postStepTo = values["post_step_to"];
      this.preStandToWalk = values["pre_stand_to_walk"];
      this.standToWalk = values["stand_to_walk"];
      this.standToWalkDistance = values["stand_to_walk_distance"];
      this.walk = values["walk"];
      this.walkDistance = values["walk_distance"];
      this.walkToStand = values["walk_to_stand"];
      this.midWalkToStand = values["mid_walk_to_stand"];
      this.walkToStandDistance = values["walk_to_stand_distance"];
      this.postWalkToStand = values["post_walk_to_stand"];
      this.postMidWalkToStand = values["post_mid_walk_to_stand"];
    }
    
    get referencePose(): AnimReferencePoses.Entry | undefined {
      const collection = <AnimReferencePoses.Entry[]>this.collectionCache.getCollection(AnimReferencePoses.KEY, AnimReferencePoses.Entry);
      return collection.find(entry => entry.key === this._referencePose);
    }
  }
}

export default CampaignWalkAnimSets;
