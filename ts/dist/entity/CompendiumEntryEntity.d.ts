import { HyruleCompendiumEntityBase } from '../HyruleCompendiumEntityBase';
import type { HyruleCompendiumSDK } from '../HyruleCompendiumSDK';
import type { Control } from '../types';
import type { CompendiumEntry, CompendiumEntryLoadMatch } from '../HyruleCompendiumTypes';
declare class CompendiumEntryEntity extends HyruleCompendiumEntityBase<CompendiumEntry> {
    constructor(client: HyruleCompendiumSDK, entopts: any);
    make(this: CompendiumEntryEntity): CompendiumEntryEntity;
    load(this: any, reqmatch?: CompendiumEntryLoadMatch, ctrl?: Control): Promise<CompendiumEntryEntity>;
}
export { CompendiumEntryEntity };
