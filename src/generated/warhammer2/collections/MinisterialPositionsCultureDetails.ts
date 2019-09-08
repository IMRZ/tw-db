
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionsStrings } from "./MinisterialPositionsStrings";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";

export namespace MinisterialPositionsCultureDetails {
  export const KEY = new CollectionKey("ministerial_positions_culture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPositionKey: string;
    readonly _localisedStringKey: string;
    readonly _cultureKey: string;
    readonly _subcultureKey: string;
    readonly _factionKey: string;
    readonly uniqueId: number;
    readonly xCoordinate: number;
    readonly yCoordinate: number;
    readonly _localisedDescriptionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPositionKey = values["ministerial_position_key"];
      this._localisedStringKey = values["localised_string_key"];
      this._cultureKey = values["culture_key"];
      this._subcultureKey = values["subculture_key"];
      this._factionKey = values["faction_key"];
      this.uniqueId = values["unique_id"];
      this.xCoordinate = values["x_coordinate"];
      this.yCoordinate = values["y_coordinate"];
      this._localisedDescriptionKey = values["localised_description_key"];
    }
    
    get ministerialPositionKey(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPositionKey);
    }
    
    get localisedStringKey(): MinisterialPositionsStrings.Entry | undefined {
      const collection = <MinisterialPositionsStrings.Entry[]>this.collectionCache.getCollection(MinisterialPositionsStrings.KEY, MinisterialPositionsStrings.Entry);
      return collection.find(entry => entry.key === this._localisedStringKey);
    }
    
    get cultureKey(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._cultureKey);
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get localisedDescriptionKey(): MinisterialPositionsStrings.Entry | undefined {
      const collection = <MinisterialPositionsStrings.Entry[]>this.collectionCache.getCollection(MinisterialPositionsStrings.KEY, MinisterialPositionsStrings.Entry);
      return collection.find(entry => entry.key === this._localisedDescriptionKey);
    }
  }
}

export default MinisterialPositionsCultureDetails;
