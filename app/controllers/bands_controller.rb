class BandsController < ApplicationController

    def index
        bands = Band.all
        render json: bands
    end

    def show
        band = Band.find_by(id:params[:id])
        render json: band
    end

    def create
        band = Band.create!(band_params)
        session[:band_id] = band.id
        render json: band        
    end
private

    def band_params
        params.permit(:user, :band_players)
    end
end
