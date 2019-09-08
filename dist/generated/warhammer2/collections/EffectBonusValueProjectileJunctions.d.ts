import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Projectiles } from "./Projectiles";
import { CampaignBonusValueIdsProjectile } from "./CampaignBonusValueIdsProjectile";
export declare namespace EffectBonusValueProjectileJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _projectile: string;
        readonly _bonusValue: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly projectile: Projectiles.Entry | undefined;
        readonly bonusValue: CampaignBonusValueIdsProjectile.Entry | undefined;
    }
}
export default EffectBonusValueProjectileJunctions;
