class Api::ThingsController < ApplicationController
  def index
    render json: Thing.all
  end
end
