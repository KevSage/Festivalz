class FestivalsController < ApplicationController
    def index
        @festivals = Festival.all
        render :json => @festivals, include: [:performances, :reservations]

    end

    def show
        @festival = Festival.find(params[:id])
        render json: @festival, include: [:performances, :reservations, :artists]
    end
end
