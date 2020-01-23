class UsersController < ApplicationController
    def index
        @users = User.all
        render :json => @users, include: [:follows, :reservations, :artists]
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: [:follows, :reservations, :festivals, :artists]
    end

    def create
        @user = User.create(user_params)
        render json: @user, status: :created
    end

    private
    def user_params
        params.require(:user).permit(:username, :image, :region)
    end
end
