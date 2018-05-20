Rails.application.config.middleware.use OmniAuth::Builder do
  provider :kakao, ENV['KAKAO_API_KEY'], {:redirect_path => '/users/auth/kakao/callback'}
end