
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosNonCommandingCaptains } from "./StartPosNonCommandingCaptains";

export namespace StartPosCaptainRetinueUnitModifiers {
  export const KEY = new CollectionKey("start_pos_captain_retinue_unit_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _retinueCaptain: string;
    readonly _forceCommander: number;
    readonly retinueSlotIndex: number;
    readonly unitStartingHealthPercentage: number;
    readonly unitStartingExperienceLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._retinueCaptain = values["retinue_captain"];
      this._forceCommander = values["force_commander"];
      this.retinueSlotIndex = values["retinue_slot_index"];
      this.unitStartingHealthPercentage = values["unit_starting_health_percentage"];
      this.unitStartingExperienceLevel = values["unit_starting_experience_level"];
    }
    
    get retinueCaptain(): StartPosNonCommandingCaptains.Entry | undefined {
      const collection = <StartPosNonCommandingCaptains.Entry[]>this.collectionCache.getCollection(StartPosNonCommandingCaptains.KEY, StartPosNonCommandingCaptains.Entry);
      return collection.find(entry => entry._captainRetinue === this._retinueCaptain);
    }
    
    get forceCommander(): StartPosNonCommandingCaptains.Entry | undefined {
      const collection = <StartPosNonCommandingCaptains.Entry[]>this.collectionCache.getCollection(StartPosNonCommandingCaptains.KEY, StartPosNonCommandingCaptains.Entry);
      return collection.find(entry => entry._generalCommandingForce === this._forceCommander);
    }
  }
}

export default StartPosCaptainRetinueUnitModifiers;
