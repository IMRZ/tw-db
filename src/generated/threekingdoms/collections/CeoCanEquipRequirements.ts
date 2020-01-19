
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";

export namespace CeoCanEquipRequirements {
  export const KEY = new CollectionKey("ceo_can_equip_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _equipCeo: string;
    readonly checkingIsCeoActiveOrIsCeoEquipped: boolean;
    readonly _requiredCeo1: string;
    readonly _requiredCeo2: string;
    readonly _requiredCeo3: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._equipCeo = values["equip_ceo"];
      this.checkingIsCeoActiveOrIsCeoEquipped = !!values["checking_is_ceo_active_or_is_ceo_equipped"];
      this._requiredCeo1 = values["required_ceo_1"];
      this._requiredCeo2 = values["required_ceo_2"];
      this._requiredCeo3 = values["required_ceo_3"];
      this.autoId = values["auto_id"];
    }
    
    get equipCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._equipCeo);
    }
    
    get requiredCeo1(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo1);
    }
    
    get requiredCeo2(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo2);
    }
    
    get requiredCeo3(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo3);
    }
  }
}

export default CeoCanEquipRequirements;
