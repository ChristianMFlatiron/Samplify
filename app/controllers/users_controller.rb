class UsersController < ApplicationController

    def new
        @user = User.new
    end
    
    #def index 
        #users = User.all
        #render json: users
    #end

    #def show
        #current_user = User.find_by(id: )
    #end
end

