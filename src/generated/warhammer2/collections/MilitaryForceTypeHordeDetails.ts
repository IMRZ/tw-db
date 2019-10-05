
import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
import { SlotTemplates } from "./SlotTemplates";
import { SlotTypes } from "./SlotTypes";

export namespace MilitaryForceTypeHordeDetails {
  export const KEY = new CollectionKey("military_force_type_horde_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _forceType: string;
    readonly _primarySlotTemplate: string;
    readonly _primarySlotType: string;
    readonly _secondarySlotTemplate: string;
    readonly _secondarySlotType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._forceType = values["force_type"];
      this._primarySlotTemplate = values["primary_slot_template"];
      this._primarySlotType = values["primary_slot_type"];
      this._secondarySlotTemplate = values["secondary_slot_template"];
      this._secondarySlotType = values["secondary_slot_type"];
    }
    
    get forceType(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._forceType);
    }
    
    get primarySlotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._primarySlotTemplate);
    }
    
    get primarySlotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._primarySlotType);
    }
    
    get secondarySlotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._secondarySlotTemplate);
    }
    
    get secondarySlotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._secondarySlotType);
    }
  }
}

export default MilitaryForceTypeHordeDetails;
