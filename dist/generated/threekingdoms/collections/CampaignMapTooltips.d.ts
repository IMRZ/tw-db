import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapTooltipTexts } from "./CampaignMapTooltipTexts";
export declare namespace CampaignMapTooltips {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _selectContext: any;
        readonly _overContext: any;
        readonly _tooltipLine: string;
        readonly _adviceLine: string;
        readonly _mainLine: string;
        constructor(collectionCache: CollectionCache, values: any);
        get tooltipLine(): CampaignMapTooltipTexts.Entry | undefined;
        get adviceLine(): CampaignMapTooltipTexts.Entry | undefined;
        get mainLine(): CampaignMapTooltipTexts.Entry | undefined;
    }
}
export default CampaignMapTooltips;
