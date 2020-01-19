
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianBehaviourGroups } from "./BattlefieldCivilianBehaviourGroups";
import { BattlefieldCivilianBehaviours } from "./BattlefieldCivilianBehaviours";

export namespace BattlefieldCivilianBehaviourGroupsBehaviourProportions {
  export const KEY = new CollectionKey("battlefield_civilian_behaviour_groups_behaviour_proportions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _behaviourGroup: string;
    readonly _behaviour: string;
    readonly proportion: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._behaviourGroup = values["behaviour_group"];
      this._behaviour = values["behaviour"];
      this.proportion = values["proportion"];
    }
    
    get behaviourGroup(): BattlefieldCivilianBehaviourGroups.Entry | undefined {
      const collection = <BattlefieldCivilianBehaviourGroups.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianBehaviourGroups.KEY, BattlefieldCivilianBehaviourGroups.Entry);
      return collection.find(entry => entry.key === this._behaviourGroup);
    }
    
    get behaviour(): BattlefieldCivilianBehaviours.Entry | undefined {
      const collection = <BattlefieldCivilianBehaviours.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianBehaviours.KEY, BattlefieldCivilianBehaviours.Entry);
      return collection.find(entry => entry.key === this._behaviour);
    }
  }
}

export default BattlefieldCivilianBehaviourGroupsBehaviourProportions;
