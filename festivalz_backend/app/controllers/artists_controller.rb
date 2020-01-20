class ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :json => @artists, include: [:performances, :follows]
    end
end
