import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { SlotSets } from "./SlotSets";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";
export declare namespace RitualRegionTargetCriterias {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _requiredSubculture: string;
        readonly _requireForeignSlotSetPresent: string;
        readonly _requireSubcultureForeignSlotsPresent: string;
        readonly _own: string;
        readonly _targetsRuins: string;
        readonly _uiInfo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requiredSubculture(): CulturesSubcultures.Entry | undefined;
        get requireForeignSlotSetPresent(): SlotSets.Entry | undefined;
        get requireSubcultureForeignSlotsPresent(): CulturesSubcultures.Entry | undefined;
        get own(): Tristates.Entry | undefined;
        get targetsRuins(): Tristates.Entry | undefined;
        get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined;
    }
}
export default RitualRegionTargetCriterias;
