class UsersController < ApplicationController
    

    def index
        users = User.all
        render json: users
    end
    
    def create
        user = User.new(user_params)
        if user.save
            token = encode_token(user_id: user.id)
            render json: { user: UserSerializer.new(user), jwt: token }, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :not_acceptable
        end
    end

end

