class CarsController < ApplicationController
    skip_before_action :confirm_authentication, only: [:index, :show, :create]

    def index
        render json: Car.all.to_json(:except => [:reviews])
    end

    def show
        car = Car.find(params[:id])
        render json: car
    end

    def create
        car = current_user.cars.build(car_params)
        if car.save
            render json: car
        else
            render json: {error: car.errors}, status: :unprocessable_entity
        end
    end

    private
    def car_params
        params.permit(:make, :model, :engine, :horsepower, :time, :price, :image)
    end
end
