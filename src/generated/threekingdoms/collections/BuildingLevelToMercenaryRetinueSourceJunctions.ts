
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MercenaryRetinueLevelSources } from "./MercenaryRetinueLevelSources";

export namespace BuildingLevelToMercenaryRetinueSourceJunctions {
  export const KEY = new CollectionKey("building_level_to_mercenary_retinue_source_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly autoId: number;
    readonly _buildingLevel: string;
    readonly _providesMercenaryRetinueSource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.autoId = values["auto_id"];
      this._buildingLevel = values["building_level"];
      this._providesMercenaryRetinueSource = values["provides_mercenary_retinue_source"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get providesMercenaryRetinueSource(): MercenaryRetinueLevelSources.Entry | undefined {
      const collection = <MercenaryRetinueLevelSources.Entry[]>this.collectionCache.getCollection(MercenaryRetinueLevelSources.KEY, MercenaryRetinueLevelSources.Entry);
      return collection.find(entry => entry.key === this._providesMercenaryRetinueSource);
    }
  }
}

export default BuildingLevelToMercenaryRetinueSourceJunctions;
