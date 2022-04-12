class SessionsController < ApplicationController
    skip_before_action :authorized

    def new
    end

    def create
        user = User.find_by(username: session_params[:username])
        if user&.authenticate(session_params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end
    
      def destroy
        session.delete :user_id
        head :no_content
      end
end
