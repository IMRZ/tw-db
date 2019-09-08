
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosDiplomacy {
  export const KEY = new CollectionKey("start_pos_diplomacy");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _faction1: number;
    readonly _faction2: number;
    readonly _stance: any;
    readonly grantsMilitaryAccess: boolean;
    readonly grantsTradeAgreement: boolean;
    readonly relationsModifier: number;
    readonly nonAggressionPact: boolean;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._faction1 = values["faction1"];
      this._faction2 = values["faction2"];
      this._stance = values["stance"];
      this.grantsMilitaryAccess = !!values["grants_military_access"];
      this.grantsTradeAgreement = !!values["grants_trade_agreement"];
      this.relationsModifier = values["relations_modifier"];
      this.nonAggressionPact = !!values["non_aggression_pact"];
      this.unique = !!values["unique"];
    }
    
    get faction1(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction1);
    }
    
    get faction2(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction2);
    }
  }
}

export default StartPosDiplomacy;
