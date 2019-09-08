import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdUnitMissileWeapons } from "./CampaignBonusValueIdUnitMissileWeapons";
import { UnitMissileWeaponJunctions } from "./UnitMissileWeaponJunctions";
export declare namespace EffectBonusValueMissileWeaponJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _missileWeaponJunction: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdUnitMissileWeapons.Entry | undefined;
        readonly missileWeaponJunction: UnitMissileWeaponJunctions.Entry | undefined;
    }
}
export default EffectBonusValueMissileWeaponJunctions;
