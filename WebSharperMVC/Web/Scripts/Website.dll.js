(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List,HTML5,Operators,Remoting,Website,Login,Client,window,Concurrency,alert,EventsPervasives,jQuery;
 Runtime.Define(Global,{
  Website:{
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,_this,_this1,_this2,submitBtn,x,_this3,f,x1,_this4,x4,_this5,x5,_this6,_this7,x6,_this8,_this9,x7,_thisa;
      userInput=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","autofocus")),Default.Attr().Class("form-control"),(_this2=Default.Attr(),_this2.NewAttr("id","username"))]));
      submitBtn=(x=Operators.add(Default.Button(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("type","button")),Default.Attr().Class("btn btn-primary btn-block"),Default.Id("login-btn")])),List.ofArray([Default.Text("Submit")])),(f=(x1=function()
      {
       return function()
       {
        var x2,f1,f3;
        x2=(f1=function()
        {
         var x3,f2;
         x3=Remoting.Async("Website:0",[{
          Name:userInput.get_Value(),
          Password:Client.passInput().get_Value()
         }]);
         f2=function(_arg11)
         {
          if(_arg11.$==1)
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
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      }),(f(x),x)));
      return Operators.add(Default.Form(List.ofArray([Default.Attr().NewAttr("role","form"),(_this4=Default.Attr(),_this4.NewAttr("id","signin"))])),List.ofArray([Default.H2(List.ofArray([Default.Text("Please sign in")])),Operators.add((x4=List.ofArray([Default.Attr().Class("form-group")]),(_this5=Default.Tags(),_this5.NewTag("fieldset",x4))),List.ofArray([(x5=List.ofArray([Default.Text("Username"),(_this6=Default.Attr(),_this6.NewAttr("for","username"))]),(_this7=Default.Tags(),_this7.NewTag("label",x5))),userInput,(x6=List.ofArray([Default.Text("Password"),(_this8=Default.Attr(),_this8.NewAttr("for","password"))]),(_this9=Default.Tags(),_this9.NewTag("label",x6))),Client.passInput()])),(x7=List.ofArray([submitBtn]),(_thisa=Default.Tags(),_thisa.NewTag("fieldset",x7)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","password")),Default.Attr().Class("form-control"),(_this1=Default.Attr(),_this1.NewAttr("id","password"))]));
      f=(x1=function()
      {
       return function(keyCode)
       {
        var matchValue;
        matchValue=keyCode.KeyCode;
        if(matchValue===13)
         {
          return jQuery("#login-btn").click();
         }
        else
         {
          return null;
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyDown(x1,arg10);
      });
      f(x);
      return x;
     })
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client.loginForm(this.redirectUrl);
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  HTML5=Runtime.Safe(Default.HTML5);
  Operators=Runtime.Safe(Html.Operators);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Website=Runtime.Safe(Global.Website);
  Login=Runtime.Safe(Website.Login);
  Client=Runtime.Safe(Login.Client);
  window=Runtime.Safe(Global.window);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  alert=Runtime.Safe(Global.alert);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  return jQuery=Runtime.Safe(Global.jQuery);
 });
 Runtime.OnLoad(function()
 {
  Client.passInput();
 });
}());
