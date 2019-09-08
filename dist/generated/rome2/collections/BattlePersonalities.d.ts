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
        readonly soldierModel: WarscapeAnimated.Entry | undefined;
        readonly manAnimationsTable: BattleAnimationsTable.Entry | undefined;
        readonly missileType: Projectiles.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
    }
}
export default BattlePersonalities;
