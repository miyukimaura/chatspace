$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'POST',
      url: '/users/iindex',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        appendErrMsgToHTML("ユーザー検索に失敗しました")
      }
    }

  });
});
