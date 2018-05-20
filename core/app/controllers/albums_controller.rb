class AlbumsController < ApplicationController
  def index
    clan = current_user.clan
    @albums = clan.albums.order(:updated_at)
    render json: (Jbuilder.encode do |json|
      json.array! @albums do |album|
        json.extract! album, :id, :title, :description, :color, :created_at
        json.last_img album.photos.last ? album.photos.last.photo.url : nil
      end
    end)
  end

  def show
    album = Album.find(params[:id])
    render json: (Jbuilder.encode do |json|
      json.extract! album, :id, :title, :description, :color, :created_at
      json.photos album.photos
    end)
  end
end
