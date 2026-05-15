package core

type HyruleCompendiumError struct {
	IsHyruleCompendiumError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHyruleCompendiumError(code string, msg string, ctx *Context) *HyruleCompendiumError {
	return &HyruleCompendiumError{
		IsHyruleCompendiumError: true,
		Sdk:              "HyruleCompendium",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HyruleCompendiumError) Error() string {
	return e.Msg
}
