class InstrumentsController < ApplicationController

    def index
        instruments = Instrument.all
        render json: instruments
    end

    def show
        instrument = Instrument.find_by(id:params[:id])
        render json: instrument
    end

end
