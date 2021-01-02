class FileController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:upload]

  def index
  end

  def upload
    if params[:file]
      upfile = Upfile.new
      upfile.file = params[:file]
      upfile.save!
    end
    render json: {
      success: true
    }
  end
end
