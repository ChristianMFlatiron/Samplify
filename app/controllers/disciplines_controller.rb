class DisciplinesController < ApplicationController
    # def index
    #     disciplines = Disciplines.all
    #     render json: disciplines
    # end
    def new
        @discpline = Discipline.new
    end
end
