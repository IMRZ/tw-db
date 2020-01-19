import { CollectionCache, CollectionKey } from "../../../common";
import { FactionSets } from "./FactionSets";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";
export declare namespace RitualFactionTargetCriterias {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _permittedFactionSet: string;
        readonly _isHumanOnly: string;
        readonly _uiInfo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get permittedFactionSet(): FactionSets.Entry | undefined;
        get isHumanOnly(): Tristates.Entry | undefined;
        get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined;
    }
}
export default RitualFactionTargetCriterias;
