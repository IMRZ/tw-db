
import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { UnitCastes } from "./UnitCastes";

export namespace UnitRegimentNames {
  export const KEY = new CollectionKey("unit_regiment_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _nameGroup: number;
    readonly _unitCaste: string;
    readonly _unitName: any;
    readonly nameOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._nameGroup = values["name_group"];
      this._unitCaste = values["unit_caste"];
      this._unitName = values["unit_name"];
      this.nameOrder = values["name_order"];
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
    
    get unitCaste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._unitCaste);
    }
  }
}

export default UnitRegimentNames;
