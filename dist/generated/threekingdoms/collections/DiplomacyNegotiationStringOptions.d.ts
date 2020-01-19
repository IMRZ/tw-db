import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeyGroups } from "./DiplomacyKeyGroups";
import { DiplomacyStrings } from "./DiplomacyStrings";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace DiplomacyNegotiationStringOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _string: string;
        readonly option: number;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): DiplomacyKeyGroups.Entry | undefined;
        get string(): DiplomacyStrings.Entry | undefined;
        get group(): CampaignGroups.Entry | undefined;
    }
}
export default DiplomacyNegotiationStringOptions;
