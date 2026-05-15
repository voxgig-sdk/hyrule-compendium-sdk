<?php
declare(strict_types=1);

// HyruleCompendium SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HyruleCompendiumMakeContext
{
    public static function call(array $ctxmap, ?HyruleCompendiumContext $basectx): HyruleCompendiumContext
    {
        return new HyruleCompendiumContext($ctxmap, $basectx);
    }
}
