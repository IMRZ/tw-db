
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Cultures } from "./Cultures";
import { GovernmentTypes } from "./GovernmentTypes";
import { WarscapeRigid } from "./WarscapeRigid";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";

export namespace BuildingCultureGovTypeVariants {
  export const KEY = new CollectionKey("building_culture_gov_type_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _culture: string;
    readonly _governmentType: string;
    readonly name: string;
    readonly _artpiece: string;
    readonly _artpieceAnimated: string;
    readonly _description: string;
    readonly icon: string;
    readonly _shortDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._culture = values["culture"];
      this._governmentType = values["government_type"];
      this.name = values["name"];
      this._artpiece = values["artpiece"];
      this._artpieceAnimated = values["artpiece_animated"];
      this._description = values["description"];
      this.icon = values["icon"];
      this._shortDescription = values["short_description"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get artpiece(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._artpiece);
    }
    
    get artpieceAnimated(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._artpieceAnimated);
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

export default BuildingCultureGovTypeVariants;
