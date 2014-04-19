(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Piglets,Piglet1,Sitelet,Login,Client,Concurrency,Remoting,window,alert,LoginInfo,Pervasives,Validation,Html,Operators,Default,List,Controls,HTML5,jQuery,EventsPervasives;
 Runtime.Define(Global,{
  Sitelet:{
   Login:{
    Client:{
     form:function(redirectUrl)
     {
      return Piglet1.Render(function(name)
      {
       return function(password)
       {
        return function(submit)
        {
         return Client.loginRender(name,password,submit);
        };
       };
      },Piglet1.Run(function(loginInfo)
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(Remoting.Async("Sitelet:0",[loginInfo]),function(_arg1)
        {
         if(_arg1.$==1)
          {
           window.location.assign(redirectUrl);
           return Concurrency.Return(null);
          }
         else
          {
           alert("Login failed");
           return Concurrency.Return(null);
          }
        });
       }));
      },Client.loginPiglet(Runtime.New(LoginInfo,{
       Username:"",
       Password:""
      }))));
     },
     loginPiglet:function(init)
     {
      return Piglet1.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(username)
      {
       return function(password)
       {
        return LoginInfo.New(username,password);
       };
      }),Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter your username.",Piglet1.Yield(init.Username))),Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter your password.",Piglet1.Yield(init.Password))));
     },
     loginRender:function(name,password,submit)
     {
      var arg10,arg101,x1,arg00;
      arg10=List.ofArray([Default.Attr().NewAttr("for","username"),Default.Text("Username")]);
      arg101=List.ofArray([Default.Attr().NewAttr("for","password"),Default.Text("Password")]);
      x1=Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },password),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","password")]));
      arg00=function()
      {
       return function(keyCode)
       {
        return keyCode.KeyCode===13?jQuery("#submit-btn").click():null;
       };
      };
      EventsPervasives.Events().OnKeyDown(arg00,x1);
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("well"),Default.Attr().NewAttr("id","login-form")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Default.Tags().NewTag("label",arg10),Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },name),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Default.Tags().NewTag("label",arg101),x1])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("id","submit-btn")]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client.form(this.redirectUrl);
     }
    }),
    LoginInfo:Runtime.Class({},{
     New:function(username,password)
     {
      return Runtime.New(LoginInfo,{
       Username:username,
       Password:password
      });
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Piglets=Runtime.Safe(WebSharper.Piglets);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Sitelet=Runtime.Safe(Global.Sitelet);
  Login=Runtime.Safe(Sitelet.Login);
  Client=Runtime.Safe(Login.Client);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  window=Runtime.Safe(Global.window);
  alert=Runtime.Safe(Global.alert);
  LoginInfo=Runtime.Safe(Login.LoginInfo);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  Validation=Runtime.Safe(Piglet1.Validation);
  Html=Runtime.Safe(WebSharper.Html);
  Operators=Runtime.Safe(Html.Operators);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Controls=Runtime.Safe(Piglets.Controls);
  HTML5=Runtime.Safe(Default.HTML5);
  jQuery=Runtime.Safe(Global.jQuery);
  return EventsPervasives=Runtime.Safe(Html.EventsPervasives);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
