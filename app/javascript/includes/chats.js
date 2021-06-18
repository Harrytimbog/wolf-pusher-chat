const updateChat = (() => {
  $(document).ready((function(_this) {
    return function() {
      var updateChat, username;
      username = '';
      $('.sidebar-form').keyup(function(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
          username = event.target.value;
          $('.username').append(username);
          $('#username').val(username);
          $('.username').removeClass('d-none');
          $('.sidebar-form').addClass('d-none');
          $('#message').removeAttr("disabled");
          $('#message').focus();
        }
      });
      $('#chat-form').on('ajax:success', function(data) {
        $('#chat-form')[0].reset();
        updateChat(data.detail[0]);
      });
      return updateChat = function(data) {
        $('.chat-box').append("<div class=\"col-12\">\n  <div class=\"chat bg-secondary d-inline-block text-left text-white mb-2\">\n    <div class=\"chat-bubble\">\n      <small class=\"chat-username\">" + data.username + "</small>\n      <p class=\"m-0 mt-2 chat-message\">" + data.message + "</p>\n    </div>\n  </div>\n</div>");
      };
    };
  })(this));

});

export { updateChat };
