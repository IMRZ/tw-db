
import { CollectionCache, CollectionKey } from "../../../common";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingSuperchains } from "./BuildingSuperchains";

export namespace SlotTemplateToBuildingSuperchainJunctions {
  export const KEY = new CollectionKey("slot_template_to_building_superchain_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _slotTemplate: string;
    readonly _buildingSuperchain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._slotTemplate = values["slot_template"];
      this._buildingSuperchain = values["building_superchain"];
    }
    
    get slotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._slotTemplate);
    }
    
    get buildingSuperchain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._buildingSuperchain);
    }
  }
}

export default SlotTemplateToBuildingSuperchainJunctions;
