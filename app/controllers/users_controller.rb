class UsersController < ApplicationController
    

    def index
        users = User.all
        render json: users
    end
    
    # def create
    #     user = User.new(user_params)
    #     if user.save
    #         token = encode_token(user_id: user.id)
    #         render json: { user: UserSerializer.new(user), jwt: token }, status: :created
    #     else
    #         render json: { error: user.errors.full_messages }, status: :not_acceptable
    #     end
    # end

    # def show
    #     current_user = User.find_by(id:session[:user_id])
    #     render json: current_user
    # end
    def create
        user = User.create!(user_params)
        render json:user
    end
    # def update
    #     current_user = User.find_by(id:session[:user_id])
    #     current_user.update!(user_update_params)
    #     render json: current_user
    # end
    # def update_contrib
    #   current_user = User.find_by(id:params[:id])
    #   current_user.update!(user_update_params)
    #   render json: current_user
    # end
    # private
    # def render_unprocessable_entity(invalid)
    #     render json:{error: invalid.record.errors}, status: :render_unprocessable_entity
    # end
    # def user_params
    #     params.permit(:email, :password)
    # end
    # def user_update_params
    #     params.permit(:id, :first_name, :last_name, :email, :phone, :img, :is_contributor)
    # end

end

