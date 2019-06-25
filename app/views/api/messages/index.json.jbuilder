json.array! @messages do |message|
  json.name       message.user.name
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
  json.content    message.content
  json.image      message.image.url
  json.id         message.id
  json.group_id   message.group.id
end