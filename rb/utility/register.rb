# HyruleCompendium SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HyruleCompendiumUtility.registrar = ->(u) {
  u.clean = HyruleCompendiumUtilities::Clean
  u.done = HyruleCompendiumUtilities::Done
  u.make_error = HyruleCompendiumUtilities::MakeError
  u.feature_add = HyruleCompendiumUtilities::FeatureAdd
  u.feature_hook = HyruleCompendiumUtilities::FeatureHook
  u.feature_init = HyruleCompendiumUtilities::FeatureInit
  u.fetcher = HyruleCompendiumUtilities::Fetcher
  u.make_fetch_def = HyruleCompendiumUtilities::MakeFetchDef
  u.make_context = HyruleCompendiumUtilities::MakeContext
  u.make_options = HyruleCompendiumUtilities::MakeOptions
  u.make_request = HyruleCompendiumUtilities::MakeRequest
  u.make_response = HyruleCompendiumUtilities::MakeResponse
  u.make_result = HyruleCompendiumUtilities::MakeResult
  u.make_point = HyruleCompendiumUtilities::MakePoint
  u.make_spec = HyruleCompendiumUtilities::MakeSpec
  u.make_url = HyruleCompendiumUtilities::MakeUrl
  u.param = HyruleCompendiumUtilities::Param
  u.prepare_auth = HyruleCompendiumUtilities::PrepareAuth
  u.prepare_body = HyruleCompendiumUtilities::PrepareBody
  u.prepare_headers = HyruleCompendiumUtilities::PrepareHeaders
  u.prepare_method = HyruleCompendiumUtilities::PrepareMethod
  u.prepare_params = HyruleCompendiumUtilities::PrepareParams
  u.prepare_path = HyruleCompendiumUtilities::PreparePath
  u.prepare_query = HyruleCompendiumUtilities::PrepareQuery
  u.graphql_body = HyruleCompendiumUtilities::GraphqlBody
  u.graphql_errors = HyruleCompendiumUtilities::GraphqlErrors
  u.result_basic = HyruleCompendiumUtilities::ResultBasic
  u.result_body = HyruleCompendiumUtilities::ResultBody
  u.result_headers = HyruleCompendiumUtilities::ResultHeaders
  u.transform_request = HyruleCompendiumUtilities::TransformRequest
  u.transform_response = HyruleCompendiumUtilities::TransformResponse
}
