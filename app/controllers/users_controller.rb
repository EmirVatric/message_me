class UsersController < ApplicationController

    def index
        @user = User.all
    end
    
    def def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            flash[:success] = "Welcome to the chatroom #{@user.username}"
            redirect_to root_path
        else
            render 'new'
        end
    end
    

    private
    def user_params
        params.require(:users).permit(:username, :password)
    end
    

end