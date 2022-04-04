class UsersController < ApplicationController
    

    def index
        users = User.all
        render json: users
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
    end



    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
    # def show
    #     user = User.find(params[:id])
    #     render json: user
    # end

    # def new
    #     user = User.new
    # end

    # def create
    #     user = User.create(user_params)
    #     redirect_to user_path(user)
    # end

    # def edit
    #     user = User.find(params[:id])
    # end

    # def update
    #     user = User.find(params[:id])
    #     user.update(user_params)
    #     redirect_to user_path(user)
    # end



    # # @user = user find by whatever


end