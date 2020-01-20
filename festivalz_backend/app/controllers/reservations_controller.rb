class ReservationsController < ApplicationController
    def index
        @resvations = Reservation.all
        render :json => @resrvations
    end
end
