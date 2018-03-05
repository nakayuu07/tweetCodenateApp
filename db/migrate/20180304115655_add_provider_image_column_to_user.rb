class AddProviderImageColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :provider_image, :string
  end
end
