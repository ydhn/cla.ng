require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Core
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    _API_ORIGIN_HOSTS = 'kauth.kakao.com,localhost:4000,localhost:4001,api.cla.ng,cla.ng'
    API_ORIGIN_HOSTS = _API_ORIGIN_HOSTS.split(',')
  
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.middleware.insert_after Rails::Rack::Logger, Rack::Cors, debug: Rails.env.development?, logger: (-> { Rails.logger }) do
      allow do
        origins *API_ORIGIN_HOSTS
        resource '*',
          headers: :any,
          credentials: true,
          methods: %i(options head get post put patch delete)
      end
    end
  end
end
