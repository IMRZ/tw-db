
import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { GroundTypeStatEffectGroups } from "./GroundTypeStatEffectGroups";

export namespace GroundTypeToStatEffects {
  export const KEY = new CollectionKey("ground_type_to_stat_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groundType: string;
    readonly _affectedStat: string;
    readonly multiplier: number;
    readonly _affectedGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groundType = values["ground_type"];
      this._affectedStat = values["affected_stat"];
      this.multiplier = values["multiplier"];
      this._affectedGroup = values["affected_group"];
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
    
    get affectedStat(): ModifiableUnitStats.Entry | undefined {
      const collection = <ModifiableUnitStats.Entry[]>this.collectionCache.getCollection(ModifiableUnitStats.KEY, ModifiableUnitStats.Entry);
      return collection.find(entry => entry.statKey === this._affectedStat);
    }
    
    get affectedGroup(): GroundTypeStatEffectGroups.Entry | undefined {
      const collection = <GroundTypeStatEffectGroups.Entry[]>this.collectionCache.getCollection(GroundTypeStatEffectGroups.KEY, GroundTypeStatEffectGroups.Entry);
      return collection.find(entry => entry.groupName === this._affectedGroup);
    }
  }
}

export default GroundTypeToStatEffects;
