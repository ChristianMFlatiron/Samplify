class InstrumentsController < ApplicationController


    skip_before_action :authorized, only: :index

    def index
        instruments = Instrument.all
        render json: instruments
    end

    def show
        instrument = Instrument.find_by(id:params[:id])
        render json: instrument
    end

    
end
