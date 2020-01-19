import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { EffectBundles } from "./EffectBundles";
export declare namespace BattleSetPieceArmiesEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleSetPieceArmy: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleSetPieceArmy(): BattleSetPieceArmies.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default BattleSetPieceArmiesEffectBundles;
