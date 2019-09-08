
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";

export namespace CaiPersonalityDiplomaticEventValues {
  export const KEY = new CollectionKey("cai_personality_diplomatic_event_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _eventId: string;
    readonly value: number;
    readonly falloff: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._eventId = values["event_id"];
      this.value = values["value"];
      this.falloff = values["falloff"];
    }
    
    get componentId(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get eventId(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._eventId);
    }
  }
}

export default CaiPersonalityDiplomaticEventValues;
