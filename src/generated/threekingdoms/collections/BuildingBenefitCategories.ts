
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingBenefitCategories {
  export const KEY = new CollectionKey("building_benefit_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly onscreenDescription: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.onscreenDescription = values["onscreen_description"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default BuildingBenefitCategories;
