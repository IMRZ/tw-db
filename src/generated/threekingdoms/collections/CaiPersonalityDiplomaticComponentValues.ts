
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiDiplomacyComponentEvents } from "./CaiDiplomacyComponentEvents";
import { CaiPersonalityDiplomaticComponentTargets } from "./CaiPersonalityDiplomaticComponentTargets";

export namespace CaiPersonalityDiplomaticComponentValues {
  export const KEY = new CollectionKey("cai_personality_diplomatic_component_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personalityComponentId: string;
    readonly _diplomacyComponentId: string;
    readonly initialValue: number;
    readonly value1: number;
    readonly turn1: number;
    readonly value2: number;
    readonly turn2: number;
    readonly _target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personalityComponentId = values["personality_component_id"];
      this._diplomacyComponentId = values["diplomacy_component_id"];
      this.initialValue = values["initial_value"];
      this.value1 = values["value1"];
      this.turn1 = values["turn1"];
      this.value2 = values["value2"];
      this.turn2 = values["turn2"];
      this._target = values["target"];
    }
    
    get personalityComponentId(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._personalityComponentId);
    }
    
    get diplomacyComponentId(): CaiDiplomacyComponentEvents.Entry | undefined {
      const collection = <CaiDiplomacyComponentEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyComponentEvents.KEY, CaiDiplomacyComponentEvents.Entry);
      return collection.find(entry => entry._diplomaticComponent === this._diplomacyComponentId);
    }
    
    get target(): CaiPersonalityDiplomaticComponentTargets.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponentTargets.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponentTargets.KEY, CaiPersonalityDiplomaticComponentTargets.Entry);
      return collection.find(entry => entry.target === this._target);
    }
  }
}

export default CaiPersonalityDiplomaticComponentValues;
