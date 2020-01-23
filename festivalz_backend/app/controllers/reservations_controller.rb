class ReservationsController < ApplicationController
    def index
        @reservations = Reservation.all
        render :json => @reservations, include: [:user, :festival]
    end

    def create
        @reservation = Reservation.create(reservation_params)
        render json: @follow, status: :created
    end

    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :festival_id)
    end
end
