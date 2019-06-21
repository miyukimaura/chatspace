$(function() {

  function buildHTML (params){
    var html = `<div class="message" data-message_id="4611">
<div class="upper-message">
<p class="upper-message__user-name"></p>
${params.name}
<p class="upper-message__date"></p>
${params.created_at}
</div>
<div class="lower-message">
<p class="lower-message__content"></p>
${params.content}
<img src="${params.image}">
</div>`
    return html;
  }

  <div class="message">
<div class="upper-message">
<div class="upper-message__user-name">
@@@
</div>
<div class="upper-message__date">
2019/06/21 12:36
</div>
</div>
<div class="lower-meesage">
<div class="lower-message__content"></div>
a

</div>
</div>
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