$(function() {

  function buildHTML (params){
    var addImage = (params.image)? `<img class = "lower-message__image" src="${params.image}"></img>` : '';
    
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
    .done(function(params) {
      var html = buildHTML(params);

      $('.messages').append(html);
      
      $(".form__message__submit").removeAttr("disabled");
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $("#new_message")[0].reset();
    })
    .fail(function() {
      alert('エラー')
    })
  })
});