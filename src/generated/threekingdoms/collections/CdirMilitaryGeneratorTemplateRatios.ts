
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorTemplates } from "./CdirMilitaryGeneratorTemplates";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";

export namespace CdirMilitaryGeneratorTemplateRatios {
  export const KEY = new CollectionKey("cdir_military_generator_template_ratios");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateKey: string;
    readonly _unitGroupKey: string;
    readonly ratio: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateKey = values["template_key"];
      this._unitGroupKey = values["unit_group_key"];
      this.ratio = values["ratio"];
    }
    
    get templateKey(): CdirMilitaryGeneratorTemplates.Entry | undefined {
      const collection = <CdirMilitaryGeneratorTemplates.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorTemplates.KEY, CdirMilitaryGeneratorTemplates.Entry);
      return collection.find(entry => entry.key === this._templateKey);
    }
    
    get unitGroupKey(): CdirMilitaryGeneratorUnitGroups.Entry | undefined {
      const collection = <CdirMilitaryGeneratorUnitGroups.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorUnitGroups.KEY, CdirMilitaryGeneratorUnitGroups.Entry);
      return collection.find(entry => entry.key === this._unitGroupKey);
    }
  }
}

export default CdirMilitaryGeneratorTemplateRatios;
