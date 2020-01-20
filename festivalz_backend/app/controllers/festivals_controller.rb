class FestivalsController < ApplicationController
    def index
        @festivals = Festival.all
        render :json => @festivals, include: [:performances, :reservations]

    end
end
