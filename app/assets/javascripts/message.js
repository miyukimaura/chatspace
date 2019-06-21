$(function() {

  function buildHTML (params){
    var html = `<div class="message">
<div class="upper-message">
<div class="upper-message__user-name">
${params.name}
</div>
<div class="upper-message__date">
${params.created_at}
</div>
</div>
<div class="lower-meesage">
<div class="lower-message__content"></div>
${params.content}
<img src="${params.image}"></img>
</div>
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
    .done(function(params) {
      var html = buildHTML(params);
      $('.messages').append(html);
      $('#new_message').val('');
      $("form__message__submit").removeAttr("disabled");
    })
    .fail(function() {
      alert('エラー')
    })
  })
});