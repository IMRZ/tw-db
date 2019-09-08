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
        readonly key: DiplomacyKeyGroups.Entry | undefined;
        readonly string: DiplomacyStrings.Entry | undefined;
        readonly group: CampaignGroups.Entry | undefined;
    }
}
export default DiplomacyNegotiationStringOptions;
