class Report < ApplicationRecord
  broadcasts_to ->(report) { "reports" }
end
