import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";
import { Variants } from "./Variants";
import { BattleEntities } from "./BattleEntities";
import { BattleEntityStats } from "./BattleEntityStats";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace BattlePersonalities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _manAnimationsTable: string;
        readonly _type: any;
        readonly _missileType: string;
        readonly _variant: string;
        readonly _battleEntity: string;
        readonly riderAttachmentPoint: string;
        readonly _battleEntityStats: string;
        readonly _gameExpansionKey: string;
        readonly isHero: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get manAnimationsTable(): BattleAnimationsTable.Entry | undefined;
        get missileType(): Projectiles.Entry | undefined;
        get variant(): Variants.Entry | undefined;
        get battleEntity(): BattleEntities.Entry | undefined;
        get battleEntityStats(): BattleEntityStats.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default BattlePersonalities;
