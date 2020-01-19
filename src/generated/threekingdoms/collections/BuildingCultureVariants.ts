
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Cultures } from "./Cultures";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";
import { BuildingFlavourTexts } from "./BuildingFlavourTexts";

export namespace BuildingCultureVariants {
  export const KEY = new CollectionKey("building_culture_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _culture: string;
    readonly name: string;
    readonly _description: string;
    readonly icon: string;
    readonly _subculture: string;
    readonly _faction: string;
    readonly disables: boolean;
    readonly _shortDescription: string;
    readonly _flavour: string;
    readonly displayTooltip: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._culture = values["culture"];
      this.name = values["name"];
      this._description = values["description"];
      this.icon = values["icon"];
      this._subculture = values["subculture"];
      this._faction = values["faction"];
      this.disables = !!values["disables"];
      this._shortDescription = values["short_description"];
      this._flavour = values["flavour"];
      this.displayTooltip = !!values["display_tooltip"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get description(): BuildingDescriptionTexts.Entry | undefined {
      const collection = <BuildingDescriptionTexts.Entry[]>this.collectionCache.getCollection(BuildingDescriptionTexts.KEY, BuildingDescriptionTexts.Entry);
      return collection.find(entry => entry.key === this._description);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get shortDescription(): BuildingShortDescriptionTexts.Entry | undefined {
      const collection = <BuildingShortDescriptionTexts.Entry[]>this.collectionCache.getCollection(BuildingShortDescriptionTexts.KEY, BuildingShortDescriptionTexts.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get flavour(): BuildingFlavourTexts.Entry | undefined {
      const collection = <BuildingFlavourTexts.Entry[]>this.collectionCache.getCollection(BuildingFlavourTexts.KEY, BuildingFlavourTexts.Entry);
      return collection.find(entry => entry.key === this._flavour);
    }
  }
}

export default BuildingCultureVariants;
