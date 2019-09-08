
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegionSlotSets } from "./StartPosRegionSlotSets";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingLevels } from "./BuildingLevels";

export namespace StartPosRegionSlotSetItems {
  export const KEY = new CollectionKey("start_pos_region_slot_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _startPosRegionSlotSet: string;
    readonly _slotType: string;
    readonly _slotTemplate: string;
    readonly _buildingLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._startPosRegionSlotSet = values["start_pos_region_slot_set"];
      this._slotType = values["slot_type"];
      this._slotTemplate = values["slot_template"];
      this._buildingLevel = values["building_level"];
    }
    
    get startPosRegionSlotSet(): StartPosRegionSlotSets.Entry | undefined {
      const collection = <StartPosRegionSlotSets.Entry[]>this.collectionCache.getCollection(StartPosRegionSlotSets.KEY, StartPosRegionSlotSets.Entry);
      return collection.find(entry => entry.key === this._startPosRegionSlotSet);
    }
    
    get slotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._slotType);
    }
    
    get slotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._slotTemplate);
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
  }
}

export default StartPosRegionSlotSetItems;
