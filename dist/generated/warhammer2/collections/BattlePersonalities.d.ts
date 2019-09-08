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
        readonly autonomousRiderHero: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly manAnimationsTable: BattleAnimationsTable.Entry | undefined;
        readonly missileType: Projectiles.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
        readonly battleEntity: BattleEntities.Entry | undefined;
        readonly battleEntityStats: BattleEntityStats.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default BattlePersonalities;
