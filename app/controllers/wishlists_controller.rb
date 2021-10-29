class WishlistsController < ApplicationController
    skip_before_action :confirm_authentication

    def index
        render json: Wishlist.all
    end

    def create
        wishlist = current_user.wishlists.build(wishlist_params)
        if wishlist.save
            render json: wishlist
        else
            render json: {error: wishlist.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        wishlist = Wishlist.find(params[:id])
        wishlist.destroy
    end

    private
    def wishlist_params
        params.permit(:car_id)
    end
end
