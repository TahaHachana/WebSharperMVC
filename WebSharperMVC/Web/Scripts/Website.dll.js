(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List,HTML5,Operators,Website,Login,Client,Remoting,window,Concurrency,alert,EventsPervasives,jQuery;
 Runtime.Define(Global,{
  Website:{
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,_this,_this1,_this2,submitBtn,x,el,_this3,_this4,inner,f,x1,_this5,x4,_this6,x5,_this7,_this8,x6,_this9,_thisa,x7,_thisb;
      userInput=Default.Input(List.ofArray([Default.Attr().Class("form-control"),(_this=Default.Attr(),_this.NewAttr("id","username")),(_this1=Default.Attr(),_this1.NewAttr("type","text")),(_this2=HTML5.Attr(),_this2.NewAttr("autofocus","autofocus"))]));
      submitBtn=(x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-block"),(_this3=Default.Attr(),_this3.NewAttr("id","login-btn")),(_this4=Default.Attr(),_this4.NewAttr("type","button"))])),(inner=Default.Text("Submit"),Operators.add(el,List.ofArray([inner])))),(f=(x1=function()
      {
       return function()
       {
        var x2,f1,f3;
        x2=(f1=function()
        {
         var info,x3,f2;
         info={
          Name:userInput.get_Value(),
          Password:Client.passInput().get_Value()
         };
         x3=Remoting.Async("Website:0",[info]);
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
      return Operators.add(Default.Form(List.ofArray([Default.Attr().NewAttr("role","form"),(_this5=Default.Attr(),_this5.NewAttr("id","signin"))])),List.ofArray([Default.H2(List.ofArray([Default.Text("Please sign in")])),Operators.add((x4=List.ofArray([Default.Attr().Class("form-group")]),(_this6=Default.Tags(),_this6.NewTag("fieldset",x4))),List.ofArray([(x5=List.ofArray([Default.Text("Username"),(_this7=Default.Attr(),_this7.NewAttr("for","username"))]),(_this8=Default.Tags(),_this8.NewTag("label",x5))),userInput,(x6=List.ofArray([Default.Text("Password"),(_this9=Default.Attr(),_this9.NewAttr("for","password"))]),(_thisa=Default.Tags(),_thisa.NewTag("label",x6))),Client.passInput()])),(x7=List.ofArray([submitBtn]),(_thisb=Default.Tags(),_thisb.NewTag("fieldset",x7)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([Default.Attr().Class("form-control"),(_this=Default.Attr(),_this.NewAttr("id","password")),(_this1=Default.Attr(),_this1.NewAttr("type","password"))]));
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
  Website=Runtime.Safe(Global.Website);
  Login=Runtime.Safe(Website.Login);
  Client=Runtime.Safe(Login.Client);
  Remoting=Runtime.Safe(WebSharper.Remoting);
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
