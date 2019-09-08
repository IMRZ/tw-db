
import { CollectionCache, CollectionKey } from "../../../common";
import { SlotSets } from "./SlotSets";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace SlotSetItems {
  export const KEY = new CollectionKey("slot_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _slotSet: string;
    readonly _slotType: string;
    readonly _slotTemplate: string;
    readonly _buildingLevel: string;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._slotSet = values["slot_set"];
      this._slotType = values["slot_type"];
      this._slotTemplate = values["slot_template"];
      this._buildingLevel = values["building_level"];
      this._compositeScene = values["composite_scene"];
    }
    
    get slotSet(): SlotSets.Entry | undefined {
      const collection = <SlotSets.Entry[]>this.collectionCache.getCollection(SlotSets.KEY, SlotSets.Entry);
      return collection.find(entry => entry.key === this._slotSet);
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
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default SlotSetItems;
