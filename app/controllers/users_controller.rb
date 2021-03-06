class UsersController < ApplicationController

  def index
    @users = User.where.not(id: current_user).where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end 

  # ↑インクリ追加

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private # ←いるかいらないか分からない

  def user_params
    params.require(:user).permit(:name,:email)
  end
end







