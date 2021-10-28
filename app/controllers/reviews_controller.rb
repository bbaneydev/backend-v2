class ReviewsController < ApplicationController
    skip_before_action :confirm_authentication

    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = current_user.reviews.build(review_params)
        if review.save
            render json: review
        else
            render json: {error: review.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private
    def review_params
        params.permit(:car_id, :comment)
    end
end