class RenameBandOwnerToBandPlayers < ActiveRecord::Migration[6.1]
  def change
    rename_table :band_owners, :band_players
  end
end
