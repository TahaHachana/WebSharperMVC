(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Sitelet,Login,Client,LoginInfo,WebSharper,Piglets,Piglet1,Remoting,window,Concurrency,alert,Pervasives,Validation,Html,Operators,Default,List,Controls,HTML5,jQuery,EventsPervasives;
 Runtime.Define(Global,{
  Sitelet:{
   Login:{
    Client:{
     form:function(redirectUrl)
     {
      var x,x1,f,f4;
      x=(x1=Client.loginPiglet(Runtime.New(LoginInfo,{
       Username:"",
       Password:""
      })),(f=function(_arg10_)
      {
       return Piglet1.Run(function(loginInfo)
       {
        var x2,f1,f3;
        x2=(f1=function()
        {
         var x3,f2;
         x3=Remoting.Async("Sitelet:0",[loginInfo]);
         f2=function(_arg1)
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
         };
         return Concurrency.Bind(x3,f2);
        },Concurrency.Delay(f1));
        f3=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f3(x2);
       },_arg10_);
      },f(x1)));
      f4=function(_arg10_)
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
       },_arg10_);
      };
      return f4(x);
     },
     loginPiglet:function(init)
     {
      var _arg00_,x,f,x1,f1;
      _arg00_=Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(username)
      {
       return function(password)
       {
        return LoginInfo.New(username,password);
       };
      }),(x=Piglet1.Yield(init.Username),(f=function(_arg20_)
      {
       return Validation.Is(function(value)
       {
        return Validation.NotEmpty(value);
       },"Please enter your username.",_arg20_);
      },f(x)))),(x1=Piglet1.Yield(init.Password),(f1=function(_arg20_)
      {
       return Validation.Is(function(value)
       {
        return Validation.NotEmpty(value);
       },"Please enter your password.",_arg20_);
      },f1(x1))));
      return Piglet1.WithSubmit(_arg00_);
     },
     loginRender:function(name,password,submit)
     {
      var _this,x,_this1,_this2,_this3,_this4,x2,_this5,_this6,x3,_this7,f,arg00,_this8;
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("well"),(_this=Default.Attr(),_this.NewAttr("id","login-form"))])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("for","username")),Default.Text("Username")]),(_this2=Default.Tags(),_this2.NewTag("label",x))),Operators.add(Controls.input("text",function(x1)
      {
       return x1;
      },function(x1)
      {
       return x1;
      },name),List.ofArray([Default.Attr().Class("form-control"),(_this3=Default.Attr(),_this3.NewAttr("type","text")),(_this4=HTML5.Attr(),_this4.NewAttr("autofocus","autofocus"))]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([(x2=List.ofArray([(_this5=Default.Attr(),_this5.NewAttr("for","password")),Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x2))),(x3=Operators.add(Controls.input("text",function(x1)
      {
       return x1;
      },function(x1)
      {
       return x1;
      },password),List.ofArray([Default.Attr().Class("form-control"),(_this7=Default.Attr(),_this7.NewAttr("type","password"))])),(f=(arg00=function()
      {
       return function(keyCode)
       {
        var matchValue;
        matchValue=keyCode.KeyCode;
        if(matchValue===13)
         {
          return jQuery("#submit-btn").click();
         }
        else
         {
          return null;
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyDown(arg00,arg10);
      }),(f(x3),x3)))])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),(_this8=Default.Attr(),_this8.NewAttr("id","submit-btn"))]))]));
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
  Sitelet=Runtime.Safe(Global.Sitelet);
  Login=Runtime.Safe(Sitelet.Login);
  Client=Runtime.Safe(Login.Client);
  LoginInfo=Runtime.Safe(Login.LoginInfo);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Piglets=Runtime.Safe(WebSharper.Piglets);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  window=Runtime.Safe(Global.window);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  alert=Runtime.Safe(Global.alert);
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
 });
}());
