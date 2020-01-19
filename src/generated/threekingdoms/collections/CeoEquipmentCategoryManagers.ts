
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoCategories } from "./CeoCategories";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CeoEquipmentCategoryManagers {
  export const KEY = new CollectionKey("ceo_equipment_category_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly minimumSlots: number;
    readonly maximumSlots: number;
    readonly slotsCanBeEmpty: boolean;
    readonly slotsAllowEquippedInactiveCeos: boolean;
    readonly slotCeosArePermanentOnceEquipped: boolean;
    readonly slotCeosAreSelectable: boolean;
    readonly _ceoSourceLocation1: string;
    readonly _ceoSourceLocation2: string;
    readonly _ceoSourceLocation3: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this.minimumSlots = values["minimum_slots"];
      this.maximumSlots = values["maximum_slots"];
      this.slotsCanBeEmpty = !!values["slots_can_be_empty"];
      this.slotsAllowEquippedInactiveCeos = !!values["slots_allow_equipped_inactive_ceos"];
      this.slotCeosArePermanentOnceEquipped = !!values["slot_ceos_are_permanent_once_equipped"];
      this.slotCeosAreSelectable = !!values["slot_ceos_are_selectable"];
      this._ceoSourceLocation1 = values["ceo_source_location_1"];
      this._ceoSourceLocation2 = values["ceo_source_location_2"];
      this._ceoSourceLocation3 = values["ceo_source_location_3"];
    }
    
    get category(): CeoCategories.Entry | undefined {
      const collection = <CeoCategories.Entry[]>this.collectionCache.getCollection(CeoCategories.KEY, CeoCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get ceoSourceLocation1(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._ceoSourceLocation1);
    }
    
    get ceoSourceLocation2(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._ceoSourceLocation2);
    }
    
    get ceoSourceLocation3(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._ceoSourceLocation3);
    }
  }
}

export default CeoEquipmentCategoryManagers;
