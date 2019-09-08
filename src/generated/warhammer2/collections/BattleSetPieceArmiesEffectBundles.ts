
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { EffectBundles } from "./EffectBundles";

export namespace BattleSetPieceArmiesEffectBundles {
  export const KEY = new CollectionKey("battle_set_piece_armies_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleSetPieceArmy: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleSetPieceArmy = values["battle_set_piece_army"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get battleSetPieceArmy(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._battleSetPieceArmy);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default BattleSetPieceArmiesEffectBundles;
