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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdUnitMissileWeapons.Entry | undefined;
        get missileWeaponJunction(): UnitMissileWeaponJunctions.Entry | undefined;
    }
}
export default EffectBonusValueMissileWeaponJunctions;
