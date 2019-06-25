$(function() {
  function buildHTML (message){
    var addContent = (message.content)? `${message.content}` : '';
    var addImage = (message.image)? `<img class = "lower-message__image" src="${message.image}"></img>` : '';    
    var html = `<div class="message">
  <div class="upper-message">
  <div class="upper-message__user-name">
  ${message.name}
  </div>
  <div class="upper-message__date">
  ${message.created_at}
  </div>
  </div>
  <div class="lower-meesage">
  <div class="lower-message__content"></div>
  ${addContent}
  ${addImage}
  </div>`
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(messages) {
      var html = buildHTML(messages);
      $('.messages').append(html);
      $(".form__message__submit").removeAttr("disabled");
      $("#new_message")[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function() {
      alert('エラー')
    });
  });

  var reloadMessages = function() {
    if (location.href.match(/\/groups\/d+\/messages/)) {

      var last_message_id = $('.message').last().data('id')

      $.ajax({
        url: '/api/messages',
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        console.log(messages)
        var insertHTML = '';
        messages.forEach(function (message) {
          if (message.id > last_message_id) {
          insertHTML += buildHTML(message);
        }
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: ('.messages')[0].scrollHeight});
      })
      .fail(function() {
      alert("自動更新に失敗しました")
    });
  };
  setInterval(reloadMessages, 5000);
});
});
})