class DisciplinesController < ApplicationController
    def index
        disciplines = Disciplines.all
        render json: disciplines
    end
end
