module Users
  class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
    include Devise::Controllers::Rememberable


    def redirect_callbacks

      # derive target redirect route from 'resource_class' param, which was set
      # before authentication.

      binding.pry
      devise_mapping = [request.env['omniauth.params']['namespace_name'],
                        request.env['omniauth.params']['resource_class'].underscore.gsub('/', '_')].compact.join('_')
      path = "#{Devise.mappings[devise_mapping.to_sym].fullpath}/#{params[:provider]}/callback"
      klass = request.scheme == 'https' ? URI::HTTPS : URI::HTTP
      redirect_route = klass.build(host: request.host, port: request.port, path: path).to_s

      # preserve omniauth info for success route. ignore 'extra' in twitter
      # auth response to avoid CookieOverflow.
      session['dta.omniauth.auth'] = request.env['omniauth.auth'].except('extra')
      session['dta.omniauth.params'] = request.env['omniauth.params']
      redirect_to redirect_route
    end

    def omniauth_success
      get_resource_from_auth_hash
      set_token_on_resource
      create_auth_params

      if confirmable_enabled?
        # don't send confirmation email!!!
        @resource.skip_confirmation!
      end

      sign_in(:user, @resource, store: false, bypass: false)

      @resource.save!
      binding.pry

      yield @resource if block_given?
      # render json: @resource
      # render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)
    end

    # def resource_class(mapping = nil)
    #   if omniauth_params['resource_class']
    #     omniauth_params['resource_class'].constantize
    #   elsif params['resource_class']
    #     params['resource_class'].constantize
    #   else
    #     raise "No resource_class found"
    #   end
    # end

    def create_auth_params
      @auth_params = {
        auth_token:     @token,
        client_id: @client_id,
        uid:       @resource.uid,
        expiry:    @expiry,
        config:    @config
      }
      @auth_params.merge!(oauth_registration: true) if @oauth_registration
      @auth_params
    end

    def set_token_on_resource
      @config = omniauth_params['config_name']
      @client_id, @token, @expiry = @resource.create_token
    end

    def whitelisted_params
      whitelist = params_for_resource(:sign_up)

      whitelist.inject({}){|coll, key|
        param = omniauth_params[key.to_s]
        if param
          coll[key] = param
        end
        coll
      }
    end

      # break out provider attribute assignment for easy method extension
    def assign_provider_attrs(user, auth_hash)
      attrs = auth_hash['info'].slice(*user.attributes.keys)
      user.assign_attributes(attrs)
    end


    def set_random_password
      #新しいユーザーならpasswordを作成するところ
        p = SecureRandom.urlsafe_base64(nil, false)
        @resource.password = p
        @resource.password_confirmation = p
    end


    def get_resource_from_auth_hash
      # find or create user by provider and provider uid
      @resource = resource_class.where({
        uid:      auth_hash['uid'],
        provider: auth_hash['provider'],
        nickname: auth_hash['info']['name'],
        provider_image:    auth_hash['info']['image']
      }).first_or_initialize

      if @resource.new_record?
        @oauth_registration = true
        set_random_password
      end

      # sync user info with provider, update/generate auth token
      # assign_provider_attrs(@resource, auth_hash)

      # assign any additional (whitelisted) attributes
      # extra_params = whitelisted_params
      # @resource.assign_attributes(extra_params) if extra_params

      @resource
    end

  end
end
