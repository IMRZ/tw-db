import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { Campaigns } from "./Campaigns";
export declare namespace PrologueChapters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly number: number;
        readonly title: string;
        readonly description: string;
        readonly isBattle: boolean;
        readonly _battleKey: string;
        readonly _campaignKey: string;
        readonly subtitle: string;
        readonly banner: string;
        readonly campaignFactionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleKey(): Battles.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default PrologueChapters;
