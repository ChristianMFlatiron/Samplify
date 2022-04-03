class UserInstrumentsController < ApplicationController
    def index
        userinstruments = UserInstrument.all
        render json: userinstruments
    end
end
