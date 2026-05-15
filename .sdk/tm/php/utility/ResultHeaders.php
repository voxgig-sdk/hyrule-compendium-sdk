<?php
declare(strict_types=1);

// HyruleCompendium SDK utility: result_headers

class HyruleCompendiumResultHeaders
{
    public static function call(HyruleCompendiumContext $ctx): ?HyruleCompendiumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
