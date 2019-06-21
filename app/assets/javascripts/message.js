$(function() {

  function buildHTML(params){
    var html = '<div class="message">
    <div class="upper-message">
    <div class="upper-message__user-name">
    miyuki
    </div>
    <div class="upper-message__date">
    2019/06/21 05:49
    </div>
    </div>
    <div class="lower-meesage">
    <div class="lower-message__content"></div>
    aaaaaa
    
    </div>
    </div>
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
    .done(function(params) {
      var html = buildHTML(params);
      $('.messages').append(html);
      $('.form__message-box').val('')
      $('.form__message__submit').removeAttr('data-disable-with')

    })
    .fail(function() {
      alert('エラー')
    })
  })
});