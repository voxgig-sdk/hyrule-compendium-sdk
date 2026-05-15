<?php
declare(strict_types=1);

// HyruleCompendium SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class HyruleCompendiumFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HyruleCompendiumBaseFeature();
            case "test":
                return new HyruleCompendiumTestFeature();
            default:
                return new HyruleCompendiumBaseFeature();
        }
    }
}
