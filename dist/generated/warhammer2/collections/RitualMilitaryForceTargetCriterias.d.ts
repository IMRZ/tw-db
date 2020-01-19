import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";
export declare namespace RitualMilitaryForceTargetCriterias {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _requiredSubculture: string;
        readonly _onSea: string;
        readonly _own: string;
        readonly _uiInfo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requiredSubculture(): CulturesSubcultures.Entry | undefined;
        get onSea(): Tristates.Entry | undefined;
        get own(): Tristates.Entry | undefined;
        get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined;
    }
}
export default RitualMilitaryForceTargetCriterias;
