class UsersController < ApplicationController
    
  skip_before_action :authorized
  #,only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # def show
  #     if current_user
  #       render json: current_user, status: :ok
  #     else
  #       render json: "No current user", status: :unauthorized
  #     end
  # end

  def show
    current_user = User.find_by(id: session[:user_id])
    if current_user
    render json: current_user
    else 
      render json: "No current user", status: :unauthorized
    end
  end



  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
    
    #, status: :created
  end


    


    def index
      users = User.all
      render json: users
    end



    # def create
    #   user = User.create(user_params)
    #   if user.valid?
    #       render json: user, status: :created
    #     else
    #       render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    #     end



    private

    def render_unprocessable_entity(invalid)
      render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
      params.permit(:username, :password, :password_confirmation, :instrument_id, :first_name, :last_name, :profile_imageUrl)
    end


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