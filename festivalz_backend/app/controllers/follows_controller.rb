class FollowsController < ApplicationController
    def index
        @follows = Follow.all
        render :json => @follows
    end

    def create
        @follow = Follow.create(follow_params)
        render json: @follow, status: :created
    end

    private
    def follow_params
        params.require(:follow).permit(:user_id, :artist_id)
    end
end
