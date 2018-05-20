class PhotosController < ApplicationController
  def create
    album = Album.find(params[:id])
    params[:photos].each do |file|
      photo = album.photos.create title: params[:title], description: params[:description]
      photo.user = current_user
      photo.photo = file
      photo.save!
    end

    render json: {success: 'true'}
  end

  def show
    photo = Photo.find(params[:photo_id])
    user = photo.user
    album = photo.album
    
    render json: {photo: photo, album: album, user: user}
  end
end
