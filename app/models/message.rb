class Message < ApplicationRecord
    belongs_to :user, foreign_key: "user_id"
    validates :body, presence: true
    scope :custom_display, -> { order(:created_at).last(5) }
end
