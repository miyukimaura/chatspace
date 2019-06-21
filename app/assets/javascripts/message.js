$(function() {

  function buildHTML(message){
    var html = '<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.}miyuki
                      </div>
                      <div class="upper-message__date">
                      ${message.}2019/06/21 05:49
                      </div>
                    </div>
                    <div class="lower-meesage">
                      <div class="lower-message__content"></div>
                        ${message.}aaaaaa
                    </div>
                </div>'
    return html;
  }
  $('.form').on('submit', function(e) {
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
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.form__message-box').val('')

    })
    .fail(function() {
      alert('エラー')
    })
  })
});