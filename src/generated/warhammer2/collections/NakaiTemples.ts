
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
import { CultureSettlementOccupationOptions } from "./CultureSettlementOccupationOptions";

export namespace NakaiTemples {
  export const KEY = new CollectionKey("nakai_temples");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly lore: string;
    readonly image: string;
    readonly _colour: string;
    readonly _cultureSettlementOccupationOption: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.lore = values["lore"];
      this.image = values["image"];
      this._colour = values["colour"];
      this._cultureSettlementOccupationOption = values["culture_settlement_occupation_option"];
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
    
    get cultureSettlementOccupationOption(): CultureSettlementOccupationOptions.Entry | undefined {
      const collection = <CultureSettlementOccupationOptions.Entry[]>this.collectionCache.getCollection(CultureSettlementOccupationOptions.KEY, CultureSettlementOccupationOptions.Entry);
      return collection.find(entry => entry.id === this._cultureSettlementOccupationOption);
    }
  }
}

export default NakaiTemples;
