
  $(function (){
    function statusChangeCallback(response,callback) {  // Called with the results from FB.getLoginStatus().
        console.log(response);                   // The current login status of the person.
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
          getFacebookData();  
        } else {                                 // Not logged into your webpage or we are unable to tell.
          callbak(false);
        }
      }
    
      function checkLoginState() {               // Called when a person is finished with the Login Button.
        FB.getLoginStatus(function(response) {   // See the onlogin handler
          statusChangeCallback(response);
        });
      }
    
    
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '751152982359821',
          cookie     : true,                     // Enable cookies to allow the server to access the session.
          xfbml      : true,                     // Parse social plugins on this webpage.
          version    : '2.1'           // Use this Graph API version for this call.
        });
    
    
        FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
          statusChangeCallback(response,function(){
               
          });        // Returns the login status.
        });
      };
  });
  
  