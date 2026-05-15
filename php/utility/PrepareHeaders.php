<?php
declare(strict_types=1);

// HyruleCompendium SDK utility: prepare_headers

class HyruleCompendiumPrepareHeaders
{
    public static function call(HyruleCompendiumContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
