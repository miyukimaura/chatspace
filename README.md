# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true, add_index|
|email|string|null: false, unique: true|

### Association

- has_many :members
- has_many :groups, through: :members
- has_many :messages

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, add_index|

### Association

- has_many :members
- has_many :users, through: :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## emailテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|user_id|integer|nill: false, foreign_key: true|

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|nill: false|
|image|string||
|user_id|integer|nill :false, foreign_key: true|
|group_id|integer|nill :false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

## imageテーブル

|Column|Type|Options|
|------|----|-------|
|url|string|null: false|
|message_id|integer|nill: false, foreign_key: true|
|user_id|integer|nill: false, foreign_key: true|
|group_id|integer|nill: false, foreign_key: true|
