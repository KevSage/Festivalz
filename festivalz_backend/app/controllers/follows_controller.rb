class FollowsController < ApplicationController
    def index
        @follows = Follow.all
        render :json => @follows, include: [:artists, :users]
    end

    def create
        @follow = Follow.create(follow_params)
        render json: @follow, include: [:artists, :users], status: :created
    end
     
    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
    end


    private
    def follow_params
        params.require(:follow).permit(:user_id, :artist_id)
    end
end
