import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";
import { Variants } from "./Variants";
export declare namespace BattlePersonalities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _soldierModel: string;
        readonly _manAnimationsTable: string;
        readonly _type: any;
        readonly _missileType: string;
        readonly _variant: string;
        constructor(collectionCache: CollectionCache, values: any);
        get soldierModel(): WarscapeAnimated.Entry | undefined;
        get manAnimationsTable(): BattleAnimationsTable.Entry | undefined;
        get missileType(): Projectiles.Entry | undefined;
        get variant(): Variants.Entry | undefined;
    }
}
export default BattlePersonalities;
