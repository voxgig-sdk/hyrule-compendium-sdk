<?php
declare(strict_types=1);

// HyruleCompendium SDK utility: prepare_body

class HyruleCompendiumPrepareBody
{
    public static function call(HyruleCompendiumContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
