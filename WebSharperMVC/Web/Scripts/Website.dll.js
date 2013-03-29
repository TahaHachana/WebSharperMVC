(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Forkme,WebSharper,Html,Operators,Default,List,Login,Client,Formlet,Controls,Enhance,Data,Formlet1,Remoting,window,Concurrency,alert;
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
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client.loginForm(this.redirectUrl);
      }
     }),
     loginForm:function(redirectUrl)
     {
      var userName,x,f,password,x1,f1,formlet1,x2,x3,x4,f2,f3;
      userName=(x=Controls.Input(""),(f=function(formlet)
      {
       return Enhance.WithTextLabel("Username",formlet);
      },f(x)));
      password=(x1=Controls.Password(""),(f1=function(formlet)
      {
       return Enhance.WithTextLabel("Password",formlet);
      },f1(x1)));
      formlet1=(x2=(x3=Data.$(Data.$((x4=function(n)
      {
       return function(p)
       {
        return{
         Name:n,
         Password:p
        };
       };
      },Formlet1.Return(x4)),userName),password),(f2=function(formlet)
      {
       return Enhance.WithSubmitButton(formlet);
      },f2(x3))),(f3=function(formlet)
      {
       return Enhance.WithFormContainer(formlet);
      },f3(x2)));
      return Formlet1.Run(function(loginInfo)
      {
       var x5,f4,f6;
       x5=(f4=function()
       {
        var x6,f5;
        x6=Remoting.Async("Website:0",[loginInfo]);
        f5=function(_arg1)
        {
         if(_arg1)
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
        return Concurrency.Bind(x6,f5);
       },Concurrency.Delay(f4));
       f6=function(arg00)
       {
        var t;
        t={
         $:0
        };
        return Concurrency.Start(arg00);
       };
       return f6(x5);
      },formlet1);
     }
    }
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
  Login=Runtime.Safe(Website.Login);
  Client=Runtime.Safe(Login.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  window=Runtime.Safe(Global.window);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  return alert=Runtime.Safe(Global.alert);
 });
 Runtime.OnLoad(function()
 {
 });
}());
