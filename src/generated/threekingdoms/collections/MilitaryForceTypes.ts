
import { CollectionCache, CollectionKey } from "../../../common";
import { SlotTemplates } from "./SlotTemplates";
import { SlotTypes } from "./SlotTypes";

export namespace MilitaryForceTypes {
  export const KEY = new CollectionKey("military_force_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _primarySlotTemplate: string;
    readonly _secondarySlotTemplate: string;
    readonly _primarySlotType: string;
    readonly _secondarySlotType: string;
    readonly generalCanBeReplaced: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._primarySlotTemplate = values["primary_slot_template"];
      this._secondarySlotTemplate = values["secondary_slot_template"];
      this._primarySlotType = values["primary_slot_type"];
      this._secondarySlotType = values["secondary_slot_type"];
      this.generalCanBeReplaced = !!values["general_can_be_replaced"];
    }
    
    get primarySlotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._primarySlotTemplate);
    }
    
    get secondarySlotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._secondarySlotTemplate);
    }
    
    get primarySlotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._primarySlotType);
    }
    
    get secondarySlotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._secondarySlotType);
    }
  }
}

export default MilitaryForceTypes;
