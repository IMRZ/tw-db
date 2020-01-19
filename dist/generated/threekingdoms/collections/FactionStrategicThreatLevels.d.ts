import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace FactionStrategicThreatLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minimumThreatPlayer: number;
        readonly minimumThreatAi: number;
        readonly _effectBundle: string;
        readonly _displayTitleAi: string;
        readonly _displayDescriptionAi: string;
        readonly _displayTitlePlayer: string;
        readonly _displayDescriptionPlayer: string;
        readonly minimumThreatAiDisplay: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectBundle(): EffectBundles.Entry | undefined;
        get displayTitleAi(): DiplomacyStrings.Entry | undefined;
        get displayDescriptionAi(): DiplomacyStrings.Entry | undefined;
        get displayTitlePlayer(): DiplomacyStrings.Entry | undefined;
        get displayDescriptionPlayer(): DiplomacyStrings.Entry | undefined;
    }
}
export default FactionStrategicThreatLevels;
