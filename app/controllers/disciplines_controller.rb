class DisciplinesController < ApplicationController
    
    def index
        disciplines = Discipline.all
        render json: disciplines 
    end
end
