class FavoritesController < ApplicationController
    skip_before_action :confirm_authentication

    def index
        render json: Favorite.all
    end

    def create
        favorite = current_user.favorites.build(favorite_params)
        if favorite.save
            render json: favorite
        else
            render json: {error: favorite.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
    end

    private
    def favorite_params
        params.permit(:car_id)
    end
end
