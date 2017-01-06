class Panel < ApplicationRecord
  validates :colors_count, numericality:{greater_than:2, less_than: 7, only_integer: true}
end
