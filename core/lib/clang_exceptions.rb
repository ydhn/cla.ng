module ClangExceptions
  class ClangError < StandardError
    attr_reader :code
    def initialize(message='', code=422)
      @code = code
      super(message)
    end
  end

  class BadRequest < ClangError
    def initialize(message=nil)
      super(message, 400)
    end
  end

  class UnauthorizedException < ClangError
    def initialize(message=nil)
      super(message, 401)
    end
  end

  class ForbiddenException < ClangError
    def initialize(message=nil)
      super(message, 403)
    end
  end

  class NotFoundException < ClangError
    def initialize(message=nil)
      super(message, 404)
    end
  end

  class GatewayTimeout < ClangError
    def initialize(message=nil)
      super(message, 504)
    end
  end

  class ValidationError < ClangError
    attr_reader :errors
    def initialize(message=nil, errors=nil)
      super(message, 422)
      @errors = errors
    end
  end
end
