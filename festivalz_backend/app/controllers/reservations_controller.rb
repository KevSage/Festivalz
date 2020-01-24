class ReservationsController < ApplicationController
    def index
        @reservations = Reservation.all
        render :json => @reservations, include: [:user, :festival]
    end

    def show
        @reservation = Reservation.find(params[:id])
        render json: @reservation, include: [:user, :festival]
    end

    def create
        @reservation = Reservation.create(reservation_params)
        render json: @follow, status: :created
    end

    def destroy
        @reservation = Follow.find(params[:id])
        @reservation.destroy
        render @reservation
    end

    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :festival_id)
    end
end
