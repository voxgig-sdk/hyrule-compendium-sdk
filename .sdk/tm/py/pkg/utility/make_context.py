# HyruleCompendium SDK utility: make_context

from projectname_sdk.core.context import HyruleCompendiumContext


def make_context_util(ctxmap, basectx):
    return HyruleCompendiumContext(ctxmap, basectx)
