
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendCharacters } from "./FrontendCharacters";

export namespace FrontendCampaignSelectionMapPins {
  export const KEY = new CollectionKey("frontend_campaign_selection_map_pins");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _faction: string;
    readonly locationX: number;
    readonly locationY: number;
    readonly _frontendCharacter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._faction = values["faction"];
      this.locationX = values["location_x"];
      this.locationY = values["location_y"];
      this._frontendCharacter = values["frontend_character"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get frontendCharacter(): FrontendCharacters.Entry | undefined {
      const collection = <FrontendCharacters.Entry[]>this.collectionCache.getCollection(FrontendCharacters.KEY, FrontendCharacters.Entry);
      return collection.find(entry => entry.key === this._frontendCharacter);
    }
  }
}

export default FrontendCampaignSelectionMapPins;
