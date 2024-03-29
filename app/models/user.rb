class User < ApplicationRecord
    validates :username, presence: true, length: { minimum: 3, maximum: 5 }, uniqueness: { case_sensitive: false }
    has_many :messages
    has_secure_password
end
