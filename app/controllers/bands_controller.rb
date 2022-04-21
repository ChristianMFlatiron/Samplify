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
        user_id = band[:user_id]
        band_id = band[:id]
        band_player = BandPlayer.create!(user_id: user_id, band_id: band_id)
        
        band.band_players = [band_player]
        render json: band        
    end

    def update
        
        band = Band.find_by(id:params[:id])
        band_id = band[:id]
        band_player = BandPlayer.create!(user_id: params[:player_id], band_id: band_id)
        band.band_players += [band_player]
        render json: band        
    end
private

    def band_params
        params.permit(:user_id, :band_name, :band_players, :player_id)
    end
end
