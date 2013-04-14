(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Forkme,WebSharper,Html,Operators,Default,List,HTML5,Remoting,Login,Client,window,Concurrency,alert,EventsPervasives,jQuery;
 Runtime.Define(Global,{
  Website:{
   Forkme:{
    Control:Runtime.Class({
     get_Body:function()
     {
      return Forkme.main();
     }
    }),
    main:function()
    {
     return Operators.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WebSharperMVC")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme")]))]));
    }
   },
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,_this,_this1,_this2,submitBtn,x,_this3,f,x1,x4,x5,_this4,x6,_this5,x7,_this6,_this7,x8,_this8;
      userInput=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","autofocus")),(_this2=HTML5.Attr(),_this2.NewAttr("placeholder","username"))]));
      submitBtn=(x=Operators.add(Default.Button(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("type","button")),Default.Attr().Class("btn"),Default.Id("login-btn")])),List.ofArray([Default.Text("Submit")])),(f=(x1=function()
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
            window.location.href=redirectUrl;
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
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Client.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("placeholder","password"))]));
      f=(x1=function()
      {
       return function(key)
       {
        var matchValue;
        matchValue=key.KeyCode;
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
  Website=Runtime.Safe(Global.Website);
  Forkme=Runtime.Safe(Website.Forkme);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Operators=Runtime.Safe(Html.Operators);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  HTML5=Runtime.Safe(Default.HTML5);
  Remoting=Runtime.Safe(WebSharper.Remoting);
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
