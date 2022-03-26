class DisciplinesController < ApplicationController
    # def index
    #     disciplines = Disciplines.all
    #     render json: disciplines
    # end
    def index
        disciplines = Discpline.all
        render json: disciplines 
    end
end
