class CreateInitialDatabase < ActiveRecord::Migration[5.1]
  def change
    create_table :clans do |t|
      t.string :title
      t.text :description

      t.timestamps
    end

    create_table :family_roles do |t|
      t.string :title
      t.text :description
      t.string :photo_id
    end

    create_table :relationships do |t|
      t.integer :family_role_id
      t.integer :user_id
      t.integer :clan_id
      t.string :nickname
    end


    create_table :users do |t|
      ## Database authenticatable
      t.integer :clan_id
      t.string :email,              default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :name
      t.string :profile_img
      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true

    create_table :albums do |t|
      t.integer :clan_id
      t.string :title
      t.string :color
      t.text :description
      t.datetime :timestamp

      t.timestamps
    end

    create_table :photos do |t|
      t.integer :user_id
      t.integer :album_id
      t.integer :question_id
      
      t.string :photo
      t.text :description
      t.string :title
      t.datetime :timestamp
      
      t.timestamps
    end

    create_table :questions do |t|
      t.string :title
      t.text :description
      t.integer :photo_id
      t.datetime :timestamp 

      t.timestamps
    end

    create_table :responses do |t|
      t.integer :question_id
      t.references :resource, polymorphic: true, index: true

      t.integer :user_id
      t.integer :clan_id

      t.timestamps
    end

    create_table :voice_records do |t|
      t.integer :user_id
      t.string :sound

      t.timestamps
    end

    create_table :articles do |t|
      t.string :title
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
