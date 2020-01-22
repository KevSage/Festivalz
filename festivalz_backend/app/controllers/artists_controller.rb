class ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render json: @artists, include: [:performances, :follows]
    end

    def show
        @artist = Artist.find(params[:id])
        render json: @artist, include: [:performances, :follows, :festivals]
    end
end
