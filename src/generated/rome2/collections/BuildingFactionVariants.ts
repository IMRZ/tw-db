
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Factions } from "./Factions";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";

export namespace BuildingFactionVariants {
  export const KEY = new CollectionKey("building_faction_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _faction: string;
    readonly onscreenName: string;
    readonly _artpiece: any;
    readonly _description: string;
    readonly icon: string;
    readonly _shortDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._faction = values["faction"];
      this.onscreenName = values["onscreen_name"];
      this._artpiece = values["artpiece"];
      this._description = values["description"];
      this.icon = values["icon"];
      this._shortDescription = values["short_description"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get description(): BuildingDescriptionTexts.Entry | undefined {
      const collection = <BuildingDescriptionTexts.Entry[]>this.collectionCache.getCollection(BuildingDescriptionTexts.KEY, BuildingDescriptionTexts.Entry);
      return collection.find(entry => entry.key === this._description);
    }
    
    get shortDescription(): BuildingShortDescriptionTexts.Entry | undefined {
      const collection = <BuildingShortDescriptionTexts.Entry[]>this.collectionCache.getCollection(BuildingShortDescriptionTexts.KEY, BuildingShortDescriptionTexts.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
  }
}

export default BuildingFactionVariants;
