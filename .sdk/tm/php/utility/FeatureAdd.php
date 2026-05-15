<?php
declare(strict_types=1);

// HyruleCompendium SDK utility: feature_add

class HyruleCompendiumFeatureAdd
{
    public static function call(HyruleCompendiumContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
