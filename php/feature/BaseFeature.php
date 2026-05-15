<?php
declare(strict_types=1);

// HyruleCompendium SDK base feature

class HyruleCompendiumBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HyruleCompendiumContext $ctx, array $options): void {}
    public function PostConstruct(HyruleCompendiumContext $ctx): void {}
    public function PostConstructEntity(HyruleCompendiumContext $ctx): void {}
    public function SetData(HyruleCompendiumContext $ctx): void {}
    public function GetData(HyruleCompendiumContext $ctx): void {}
    public function GetMatch(HyruleCompendiumContext $ctx): void {}
    public function SetMatch(HyruleCompendiumContext $ctx): void {}
    public function PrePoint(HyruleCompendiumContext $ctx): void {}
    public function PreSpec(HyruleCompendiumContext $ctx): void {}
    public function PreRequest(HyruleCompendiumContext $ctx): void {}
    public function PreResponse(HyruleCompendiumContext $ctx): void {}
    public function PreResult(HyruleCompendiumContext $ctx): void {}
    public function PreDone(HyruleCompendiumContext $ctx): void {}
    public function PreUnexpected(HyruleCompendiumContext $ctx): void {}
}
