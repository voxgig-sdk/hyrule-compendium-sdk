import { HyruleCompendiumEntityBase } from '../HyruleCompendiumEntityBase';
import type { HyruleCompendiumSDK } from '../HyruleCompendiumSDK';
import type { Control } from '../types';
import type { Category, CategoryLoadMatch } from '../HyruleCompendiumTypes';
declare class CategoryEntity extends HyruleCompendiumEntityBase<Category> {
    constructor(client: HyruleCompendiumSDK, entopts: any);
    make(this: CategoryEntity): CategoryEntity;
    load(this: any, reqmatch?: CategoryLoadMatch, ctrl?: Control): Promise<CategoryEntity>;
}
export { CategoryEntity };
