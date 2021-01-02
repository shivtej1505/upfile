class Upfile < ApplicationRecord
  has_one_attached :file

  before_create :generate_url

  def generate_url
    self.url = SecureRandom.hex[0..6]
  end
end
