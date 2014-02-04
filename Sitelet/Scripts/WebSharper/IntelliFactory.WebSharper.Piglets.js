(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Piglets,Choose,Stream,Reader,Collections,Dictionary,List,T,Enumerator,Seq,Operators,Stream1,Result,ConcreteReader,Id,ConcreteWriter,Html,Operators1,Default,EventsPervasives,Controls,Unchecked,jQuery,HtmlContainer,Arrays,ErrorMessage,Many,Stream2,Submitter,Operations,ResizeArray,ResizeArrayProxy,UnitStream,Piglet,Stream11,Piglet1,Pervasives,Validation,Concurrency,RegExp,Util,Reactive,HotStream;
 Runtime.Define(Global,{
  IntelliFactory:{
   WebSharper:{
    Piglets:{
     Choose:{
      Stream:Runtime.Class({
       Choice:function(c,f)
       {
        var renders,hasChild,_this=this;
        renders=Dictionary.New21();
        hasChild={
         contents:false
        };
        this.subscriptions.contents=Runtime.New(T,{
         $:1,
         $0:this.pStream.SubscribeImmediate(function(res)
         {
          var p,i,render;
          if(res.$==0)
           {
            p=res.$0[1];
            i=res.$0[0];
            render=renders.ContainsKey(i)?renders.get_Item(i):p.view.call(null,f);
            _this.out.Trigger(p.stream.get_Latest());
            if(hasChild.contents)
             {
              c.Remove(0);
             }
            hasChild.contents=true;
            return c.Add(render);
           }
          else
           {
            return null;
           }
         }),
         $1:_this.subscriptions.contents
        });
        return c.get_Container();
       },
       Chooser:function(f)
       {
        return this.chooser.view.call(null,f);
       },
       Dispose:function()
       {
        var inputSequence,enumerator,x,f;
        inputSequence=this.subscriptions.contents;
        enumerator=Enumerator.Get(inputSequence);
        Runtime.While(function()
        {
         return enumerator.MoveNext();
        },function()
        {
         var s;
         s=enumerator.get_Current(),s.Dispose();
        });
        x=this.choiceSubscriptions;
        f=function(source)
        {
         return Seq.iter(function(_arg3)
         {
          var activePatternResult,s;
          activePatternResult=Operators.KeyValue(_arg3);
          s=activePatternResult[1][1];
          return s.Dispose();
         },source);
        };
        return f(x);
       },
       Subscribe:function(f)
       {
        return this.out.Subscribe(f);
       },
       get_ChooserStream:function()
       {
        return this.chooser.stream;
       },
       get_Latest:function()
       {
        return this.out.get_Latest();
       }
      },{
       New:function(chooser,choice,out)
       {
        var r;
        r=Runtime.New(this,Reader.New(out.get_Id()));
        r.chooser=chooser;
        r.out=out;
        r.pStream=Stream1.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }),{
         $:0
        });
        r.choiceSubscriptions=Dictionary.New21();
        r.subscriptions={
         contents:List.ofArray([r.chooser.stream.SubscribeImmediate(function(res)
         {
          var x,f,arg00,f1,objectArg1;
          x=(f=(arg00=function(i)
          {
           var p,objectArg;
           return[i,r.choiceSubscriptions.ContainsKey(i)?(r.choiceSubscriptions.get_Item(i))[0]:(p=choice(i),(r.choiceSubscriptions.set_Item(i,[p,p.stream.Subscribe((objectArg=r.out,function(arg001)
           {
            return objectArg.Trigger(arg001);
           }))]),p))];
          },function(arg10)
          {
           return Result.Map(arg00,arg10);
          }),f(res));
          f1=(objectArg1=r.pStream,function(arg001)
          {
           return objectArg1.Trigger(arg001);
          });
          return f1(x);
         })])
        };
        return r;
       }
      })
     },
     ConcreteReader:Runtime.Class({
      Subscribe:function(f)
      {
       return this.subscribe.call(null,f);
      },
      get_Latest:function()
      {
       return this.latest.call(null,null);
      }
     },{
      New:function(latest,subscribe)
      {
       var r;
       r=Runtime.New(this,Reader.New((Id.next())(null)));
       r.latest=latest;
       r.subscribe=subscribe;
       return r;
      }
     }),
     ConcreteWriter:Runtime.Class({
      Trigger:function(x)
      {
       return this.trigger.call(null,x);
      }
     },{
      New:function(trigger)
      {
       return ConcreteWriter.New1(function(_arg1)
       {
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          return trigger(_arg1.$0);
         }
       });
      },
      New1:function(trigger)
      {
       var r;
       r=Runtime.New(this,{});
       r.trigger=trigger;
       return r;
      }
     }),
     Controls:{
      Attr:function(reader,attrName,render,element)
      {
       var f;
       f=function(w)
       {
        return Operators1.OnAfterRender(function(element1)
        {
         var set,x2,f1;
         set=function(x)
         {
          var x1,value,objectArg,arg00;
          if(x.$==0)
           {
            x1=x.$0;
            value=render(x1);
            objectArg=element1["HtmlProvider@32"];
            return((arg00=element1.Body,function(arg10)
            {
             return function(arg20)
             {
              return objectArg.SetAttribute(arg00,arg10,arg20);
             };
            })(attrName))(value);
           }
          else
           {
            return null;
           }
         };
         set(reader.get_Latest());
         x2=reader.Subscribe(set);
         f1=function(value)
         {
          value;
         };
         return f1(x2);
        },w);
       };
       f(element);
       return element;
      },
      AttrResult:function(reader,attrName,render,element)
      {
       var f;
       f=function(w)
       {
        return Operators1.OnAfterRender(function(element1)
        {
         var set,x1,f1;
         set=function(x)
         {
          var value,objectArg,arg00;
          value=render(x);
          objectArg=element1["HtmlProvider@32"];
          return((arg00=element1.Body,function(arg10)
          {
           return function(arg20)
           {
            return objectArg.SetAttribute(arg00,arg10,arg20);
           };
          })(attrName))(value);
         };
         set(reader.get_Latest());
         x1=reader.Subscribe(set);
         f1=function(value)
         {
          value;
         };
         return f1(x1);
        },w);
       };
       f(element);
       return element;
      },
      Button:function(submit)
      {
       var x,f,arg00;
       x=Default.Button(Runtime.New(T,{
        $:0
       }));
       f=(arg00=function()
       {
        return function()
        {
         return submit.Trigger(Runtime.New(Result,{
          $:0,
          $0:null
         }));
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(arg00,arg10);
       });
       f(x);
       return x;
      },
      ButtonValidate:function(submit)
      {
       var x,f,_arg00_;
       x=Controls.Button(submit);
       f=(_arg00_=submit.get_Input(),function(_arg10_)
       {
        return Controls.EnableOnSuccess(_arg00_,_arg10_);
       });
       return f(x);
      },
      CheckBox:function(stream)
      {
       var id,i,_this,_this1,matchValue,x,value;
       id=(Controls.nextId())(null);
       i=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox")),(_this1=Default.Attr(),_this1.NewAttr("id",id))]));
       matchValue=stream.get_Latest();
       if(matchValue.$==0)
        {
         x=matchValue.$0;
         i.Body.checked=x;
        }
       value=stream.Subscribe(function(_arg1)
       {
        var x1;
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          x1=_arg1.$0;
          if(!Unchecked.Equals(i.Body.checked,x1))
           {
            i.Body.checked=x1;
           }
          else
           {
            return null;
           }
         }
       });
       value;
       i.Body.addEventListener("change",function()
       {
        return stream.Trigger(Runtime.New(Result,{
         $:0,
         $0:i.Body.checked
        }));
       },true);
       return i;
      },
      Css:function(reader,attrName,render,element)
      {
       var f;
       f=function(w)
       {
        return Operators1.OnAfterRender(function(element1)
        {
         var set,x2,f1;
         set=function(x)
         {
          var x1,prop,objectArg,arg00;
          if(x.$==0)
           {
            x1=x.$0;
            prop=render(x1);
            objectArg=element1["HtmlProvider@32"];
            return((arg00=element1.Body,function(arg10)
            {
             return function(arg20)
             {
              return objectArg.SetCss(arg00,arg10,arg20);
             };
            })(attrName))(prop);
           }
          else
           {
            return null;
           }
         };
         set(reader.get_Latest());
         x2=reader.Subscribe(set);
         f1=function(value)
         {
          value;
         };
         return f1(x2);
        },w);
       };
       f(element);
       return element;
      },
      CssResult:function(reader,attrName,render,element)
      {
       var f;
       f=function(w)
       {
        return Operators1.OnAfterRender(function(element1)
        {
         var set,x1,f1;
         set=function(x)
         {
          var prop,objectArg,arg00;
          prop=render(x);
          objectArg=element1["HtmlProvider@32"];
          return((arg00=element1.Body,function(arg10)
          {
           return function(arg20)
           {
            return objectArg.SetCss(arg00,arg10,arg20);
           };
          })(attrName))(prop);
         };
         set(reader.get_Latest());
         x1=reader.Subscribe(set);
         f1=function(value)
         {
          value;
         };
         return f1(x1);
        },w);
       };
       f(element);
       return element;
      },
      EnableOnSuccess:function(reader,element)
      {
       var f;
       f=function(w)
       {
        return Operators1.OnAfterRender(function(el)
        {
         var x,f1;
         el.Body.disabled=!reader.get_Latest().get_isSuccess();
         x=reader.Subscribe(function(x1)
         {
          el.Body.disabled=!x1.get_isSuccess();
         });
         f1=function(value)
         {
          value;
         };
         return f1(x);
        },w);
       };
       f(element);
       return element;
      },
      HtmlContainer:Runtime.Class({
       Add:function(elt)
       {
        return this.container.AppendI(elt);
       },
       MoveUp:function(i)
       {
        var elt_i,elt_i_1,value,value1;
        elt_i=this.container.Body.childNodes[i];
        elt_i_1=this.container.Body.childNodes[i-1];
        value=this.container.Body.removeChild(elt_i);
        value;
        value1=this.container.Body.insertBefore(elt_i,elt_i_1);
        value1;
       },
       Remove:function(i)
       {
        var value;
        value=this.container.Body.removeChild(this.container.Body.childNodes[i]);
        value;
       },
       get_Container:function()
       {
        return this.container;
       }
      },{
       New:function(container)
       {
        var r;
        r=Runtime.New(this,{});
        r.container=container;
        return r;
       }
      }),
      IntInput:function(stream)
      {
       return Controls.input("number",function(value)
       {
        return value<<0;
       },function(value)
       {
        return Global.String(value);
       },stream);
      },
      Link:function(submit)
      {
       var x,_this,f;
       x=Default.A(List.ofArray([(_this=Default.Attr(),_this.NewAttr("href","#"))]));
       f=function(w)
       {
        return Operators1.OnAfterRender(function(e)
        {
         return jQuery(e.Body).on("click",function()
         {
          submit.Trigger(Runtime.New(Result,{
           $:0,
           $0:null
          }));
          return false;
         });
        },w);
       };
       f(x);
       return x;
      },
      Radio:function(stream,values)
      {
       var name,values1,elts,f,mapping,x4,f2;
       name=(Controls.nextId())(null);
       values1=List.ofSeq(values);
       elts=(f=(mapping=Runtime.Tupled(function(tupledArg)
       {
        var x,label,id,input,x1,_this,_this1,_this2,f1,x2,x3,_this3,_this4;
        x=tupledArg[0];
        label=tupledArg[1];
        id=(Controls.nextId())(null);
        input=(x1=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","radio")),(_this1=Default.Attr(),_this1.NewAttr("name",name)),(_this2=Default.Attr(),_this2.NewAttr("id",id))])),(f1=(x2=function(div)
        {
         if(div.Body.checked)
          {
           return stream.Trigger(Runtime.New(Result,{
            $:0,
            $0:x
           }));
          }
         else
          {
           return null;
          }
        },function(arg10)
        {
         return EventsPervasives.Events().OnChange(x2,arg10);
        }),(f1(x1),x1)));
        return[input,Default.Span(List.ofArray([input,(x3=List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("for",id)),Default.Text(label)]),(_this4=Default.Tags(),_this4.NewTag("label",x3)))]))];
       }),function(list)
       {
        return List.map(mapping,list);
       }),f(values1));
       x4=Default.Div(Seq.map(Runtime.Tupled(function(tuple)
       {
        return tuple[1];
       }),elts));
       f2=function(w)
       {
        return Operators1.OnAfterRender(function()
        {
         var set,x1,f3;
         set=function(_arg1)
         {
          var v,f1,action;
          if(_arg1.$==1)
           {
            return null;
           }
          else
           {
            v=_arg1.$0;
            f1=(action=Runtime.Tupled(function(tupledArg)
            {
             var x,_arg2;
             x=tupledArg[0];
             _arg2=tupledArg[1];
             return Runtime.Tupled(function(tupledArg1)
             {
              var input,_arg11;
              input=tupledArg1[0];
              _arg11=tupledArg1[1];
              input.Body.checked=Unchecked.Equals(x,v);
             });
            }),function(list1)
            {
             return function(list2)
             {
              return List.iter2(action,list1,list2);
             };
            });
            return(f1(values1))(elts);
           }
         };
         set(stream.get_Latest());
         x1=stream.Subscribe(set);
         f3=function(value)
         {
          value;
         };
         return f3(x1);
        },w);
       };
       f2(x4);
       return x4;
      },
      RenderChoice:function(choice,renderIt,container)
      {
       return choice.Choice(HtmlContainer.New(container),renderIt);
      },
      RenderMany:function(many,renderOne,container)
      {
       return many.Render(HtmlContainer.New(container),renderOne);
      },
      Select:function(stream,values)
      {
       var values1,elts,f,mapping,x2,x3,f1,arg00,f2;
       (Controls.nextId())(null);
       values1=Arrays.ofSeq(values);
       elts=(f=(mapping=Runtime.Tupled(function(tupledArg)
       {
        var x,label,id,_this,x1,_this1;
        x=tupledArg[0];
        label=tupledArg[1];
        id=(Controls.nextId())(null);
        return Operators1.add((_this=Default.Tags(),(x1=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("value",id))]),_this.NewTag("option",x1))),List.ofArray([Default.Text(label)]));
       }),function(array)
       {
        return array.map(function(x)
        {
         return mapping(x);
        });
       }),f(values1));
       x2=(x3=Default.Select(elts),(f1=(arg00=function(e)
       {
        if(e.Body.selectedIndex>=0)
         {
          return stream.Trigger(Runtime.New(Result,{
           $:0,
           $0:values1[e.Body.selectedIndex][0]
          }));
         }
        else
         {
          return null;
         }
       },function(arg10)
       {
        return EventsPervasives.Events().OnChange(arg00,arg10);
       }),(f1(x3),x3)));
       f2=function(w)
       {
        return Operators1.OnAfterRender(function()
        {
         var x,f3;
         x=stream.SubscribeImmediate(function(_arg1)
         {
          var v,matchValue,i,_this,objectArg,arg001;
          if(_arg1.$==1)
           {
            return null;
           }
          else
           {
            v=_arg1.$0;
            matchValue=Arrays.tryFindIndex(Runtime.Tupled(function(tupledArg)
            {
             var _v_,_arg11;
             _v_=tupledArg[0];
             _arg11=tupledArg[1];
             return Unchecked.Equals(v,_v_);
            }),values1);
            if(matchValue.$==0)
             {
              return null;
             }
            else
             {
              i=matchValue.$0;
              _this=elts[i];
              objectArg=_this["HtmlProvider@32"];
              return((arg001=_this.Body,function(arg10)
              {
               return function(arg20)
               {
                return objectArg.SetAttribute(arg001,arg10,arg20);
               };
              })("selected"))("");
             }
           }
         });
         f3=function(value)
         {
          value;
         };
         return f3(x);
        },w);
       };
       f2(x2);
       return x2;
      },
      Show:function(reader,render,container)
      {
       return Controls.ShowResult(reader,function(_arg1)
       {
        var x;
        if(_arg1.$==1)
         {
          return Seq.empty();
         }
        else
         {
          x=_arg1.$0;
          return render(x);
         }
       },container);
      },
      ShowErrors:function(reader,render,container)
      {
       return Controls.ShowResult(reader,function(_arg1)
       {
        var m,f,mapping,x;
        if(_arg1.$==1)
         {
          m=_arg1.$0;
          return render((f=(mapping=function(m1)
          {
           return m1.get_Message();
          },function(list)
          {
           return List.map(mapping,list);
          }),f(m)));
         }
        else
         {
          x=_arg1.$0;
          return Seq.empty();
         }
       },container);
      },
      ShowResult:function(reader,render,container)
      {
       var inputSequence,enumerator,value;
       inputSequence=render(reader.get_Latest());
       enumerator=Enumerator.Get(inputSequence);
       Runtime.While(function()
       {
        return enumerator.MoveNext();
       },function()
       {
        container.AppendI(enumerator.get_Current());
       });
       value=reader.Subscribe(function(x)
       {
        var inputSequence1,enumerator1;
        container["HtmlProvider@32"].Clear(container.Body);
        inputSequence1=render(x);
        enumerator1=Enumerator.Get(inputSequence1);
        Runtime.While(function()
        {
         return enumerator1.MoveNext();
        },function()
        {
         container.AppendI(enumerator1.get_Current());
        });
       });
       value;
       return container;
      },
      ShowString:function(reader,render,container)
      {
       return Controls.Show(reader,function(x)
       {
        return List.ofArray([Default.Text(render(x))]);
       },container);
      },
      Submit:function(submit)
      {
       var x,_this,f,arg00;
       x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","submit"))]));
       f=(arg00=function()
       {
        return function()
        {
         return submit.Trigger(Runtime.New(Result,{
          $:0,
          $0:null
         }));
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(arg00,arg10);
       });
       f(x);
       return x;
      },
      SubmitValidate:function(submit)
      {
       var x,f,_arg00_;
       x=Controls.Submit(submit);
       f=(_arg00_=submit.get_Input(),function(_arg10_)
       {
        return Controls.EnableOnSuccess(_arg00_,_arg10_);
       });
       return f(x);
      },
      TextArea:function(stream)
      {
       var i,matchValue,value,ev;
       i=Default.TextArea(Runtime.New(T,{
        $:0
       }));
       matchValue=stream.get_Latest();
       if(matchValue.$==0)
        {
         i.set_Value(matchValue.$0);
        }
       value=stream.Subscribe(function(_arg1)
       {
        var x;
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          x=_arg1.$0;
          if(i.get_Value()!==x)
           {
            return i.set_Value(x);
           }
          else
           {
            return null;
           }
         }
       });
       value;
       ev=function()
       {
        return stream.Trigger(Runtime.New(Result,{
         $:0,
         $0:i.get_Value()
        }));
       };
       i.Body.addEventListener("keyup",ev,true);
       i.Body.addEventListener("change",ev,true);
       return i;
      },
      WithLabel:function(label,element)
      {
       var id,x,_this,_this1,_this2;
       id=(Controls.nextId())(null);
       return Default.Span(List.ofArray([(x=List.ofArray([(_this=Default.Attr(),_this.NewAttr("for",id)),Default.Text(label)]),(_this1=Default.Tags(),_this1.NewTag("label",x))),Operators1.add(element,List.ofArray([(_this2=Default.Attr(),_this2.NewAttr("id",id))]))]));
      },
      WithLabelAfter:function(label,element)
      {
       var id,_this,x,_this1,_this2;
       id=(Controls.nextId())(null);
       return Default.Span(List.ofArray([Operators1.add(element,List.ofArray([(_this=Default.Attr(),_this.NewAttr("id",id))])),(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("for",id)),Default.Text(label)]),(_this2=Default.Tags(),_this2.NewTag("label",x)))]));
      },
      input:function(type,ofString,toString,stream)
      {
       var i,_this,matchValue,x,value,ev;
       i=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type",type))]));
       matchValue=stream.get_Latest();
       if(matchValue.$==0)
        {
         x=matchValue.$0;
         i.set_Value(toString(x));
        }
       value=stream.Subscribe(function(_arg1)
       {
        var x1,s;
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          x1=_arg1.$0;
          s=toString(x1);
          if(i.get_Value()!==s)
           {
            return i.set_Value(s);
           }
          else
           {
            return null;
           }
         }
       });
       value;
       ev=function()
       {
        return stream.Trigger(Runtime.New(Result,{
         $:0,
         $0:ofString(i.get_Value())
        }));
       };
       i.Body.addEventListener("keyup",ev,true);
       i.Body.addEventListener("change",ev,true);
       return i;
      },
      nextId:Runtime.Field(function()
      {
       var _current_25_2;
       _current_25_2={
        contents:0
       };
       return function()
       {
        Operators.Increment(_current_25_2);
        return"pl__"+Global.String(_current_25_2.contents);
       };
      })
     },
     ErrorMessage:Runtime.Class({
      get_Message:function()
      {
       return this.message;
      },
      get_Source:function()
      {
       return this.source;
      }
     },{
      Create:function(msg,reader)
      {
       return ErrorMessage.New(msg,reader.get_Id());
      },
      New:function(message,source)
      {
       var r;
       r=Runtime.New(this,{});
       r.message=message;
       r.source=source;
       return r;
      }
     }),
     Id:{
      next:Runtime.Field(function()
      {
       var _current_27_3;
       _current_27_3={
        contents:0
       };
       return function()
       {
        Operators.Increment(_current_27_3);
        return _current_27_3.contents;
       };
      })
     },
     Many:{
      Operations:Runtime.Class({
       get_Delete:function()
       {
        return ConcreteWriter.New(this["delete"]);
       },
       get_MoveDown:function()
       {
        return this.moveDown;
       },
       get_MoveUp:function()
       {
        return this.moveUp;
       }
      },{
       New:function(_delete,moveUp,moveDown)
       {
        var r;
        r=Runtime.New(this,{});
        r["delete"]=_delete;
        r.moveUp=moveUp;
        r.moveDown=moveDown;
        return r;
       }
      }),
      Stream:Runtime.Class({
       AddRender:function(f)
       {
        return this.adder.view.call(null,f);
       },
       Render:function(c,f)
       {
        var add,_this=this,matchValue,xs,value1;
        add=function(x)
        {
         var piglet,value,getThisIndex,moveUp,moveUp1,canMoveUp,canMoveDown,inMoveUp,inMoveDown,outSubscription,subMoveUp,subMoveDown,subUpSubscription,subDownSubscription,_delete;
         piglet=_this.p.call(null,x);
         _this.streams.Add(piglet.stream);
         value=piglet.stream.SubscribeImmediate(function()
         {
          return _this.update();
         });
         value;
         getThisIndex=function()
         {
          var x1,f1;
          x1=_this.streams;
          f1=function(source)
          {
           return Seq.findIndex(function(x2)
           {
            return x2.get_Id()===piglet.stream.get_Id();
           },source);
          };
          return f1(x1);
         };
         moveUp=function(i)
         {
          var s;
          if(i>0?i<_this.streams.get_Count():false)
           {
            s=_this.streams.get_Item(i);
            _this.streams.set_Item(i,_this.streams.get_Item(i-1));
            _this.streams.set_Item(i-1,s);
            c.MoveUp(i);
            return _this.update();
           }
          else
           {
            return null;
           }
         };
         moveUp1=function()
         {
          return moveUp(getThisIndex(null));
         };
         canMoveUp=function()
         {
          if(getThisIndex(null)>0)
           {
            return Runtime.New(Result,{
             $:0,
             $0:null
            });
           }
          else
           {
            return Runtime.New(Result,{
             $:1,
             $0:Runtime.New(T,{
              $:0
             })
            });
           }
         };
         canMoveDown=function()
         {
          if(getThisIndex(null)<_this.streams.get_Count()-1)
           {
            return Runtime.New(Result,{
             $:0,
             $0:null
            });
           }
          else
           {
            return Runtime.New(Result,{
             $:1,
             $0:Runtime.New(T,{
              $:0
             })
            });
           }
         };
         inMoveUp=Stream1.New(canMoveUp(null),{
          $:0
         });
         inMoveDown=Stream1.New(canMoveDown(null),{
          $:0
         });
         outSubscription=_this.out.Subscribe(function()
         {
          inMoveUp.Trigger(canMoveUp(null));
          return inMoveDown.Trigger(canMoveDown(null));
         });
         subMoveUp=Submitter.New(inMoveUp,false);
         subMoveDown=Submitter.New(inMoveDown,false);
         subUpSubscription=subMoveUp.Subscribe(Result.Iter(moveUp1));
         subDownSubscription=subMoveDown.Subscribe(Result.Iter(function()
         {
          return moveUp(getThisIndex(null)+1);
         }));
         _delete=function()
         {
          var i;
          i=getThisIndex(null);
          _this.streams.RemoveAt(i);
          c.Remove(i);
          outSubscription.Dispose();
          subUpSubscription.Dispose();
          subDownSubscription.Dispose();
          return _this.update();
         };
         return c.Add(piglet.view.call(null,f(Operations.New(_delete,subMoveUp,subMoveDown))));
        };
        matchValue=_this.out.get_Latest();
        if(matchValue.$==0)
         {
          xs=matchValue.$0;
          xs.forEach(function(x)
          {
           add(x);
          });
         }
        value1=_this.adder.stream.Subscribe(function(_arg1)
        {
         if(_arg1.$==0)
          {
           return add(_arg1.$0);
          }
         else
          {
           return null;
          }
        });
        value1;
        return c.get_Container();
       },
       Subscribe:function(f)
       {
        return this.out.Subscribe(f);
       },
       get_Add:function()
       {
        return this.adder.stream;
       },
       get_Latest:function()
       {
        return this.out.get_Latest();
       },
       update:function()
       {
        var x,x1,f,arg00,g,f1,objectArg;
        x=(x1=Seq.fold(function(acc)
        {
         return function(cur)
         {
          var matchValue,m1,m2,m,m3,l,x2;
          matchValue=[acc,cur.get_Latest()];
          if(matchValue[0].$==1)
           {
            if(matchValue[1].$==1)
             {
              m1=matchValue[0].$0;
              m2=matchValue[1].$0;
              return Runtime.New(Result,{
               $:1,
               $0:List.append(m2,m1)
              });
             }
            else
             {
              m=matchValue[0].$0;
              return Runtime.New(Result,{
               $:1,
               $0:m
              });
             }
           }
          else
           {
            if(matchValue[1].$==1)
             {
              m3=matchValue[1].$0;
              return Runtime.New(Result,{
               $:1,
               $0:m3
              });
             }
            else
             {
              l=matchValue[0].$0;
              x2=matchValue[1].$0;
              return Runtime.New(Result,{
               $:0,
               $0:Runtime.New(T,{
                $:1,
                $0:x2,
                $1:l
               })
              });
             }
           }
         };
        },Runtime.New(Result,{
         $:0,
         $0:Runtime.New(T,{
          $:0
         })
        }),this.streams),(f=(arg00=(g=function(list)
        {
         return Arrays.ofSeq(list);
        },function(x2)
        {
         return g(function(list)
         {
          return List.rev(list);
         }(x2));
        }),function(arg10)
        {
         return Result.Map(arg00,arg10);
        }),f(x1)));
        f1=(objectArg=this.out,function(arg001)
        {
         return objectArg.Trigger(arg001);
        });
        return f1(x);
       }
      },{
       New:function(p,out,adder)
       {
        var r;
        r=Runtime.New(this,Reader.New(out.get_Id()));
        r.p=p;
        r.out=out;
        r.adder=adder;
        r.streams=ResizeArrayProxy.New2();
        return r;
       }
      }),
      UnitStream:Runtime.Class({
       get_Add:function()
       {
        return this.submitStream;
       }
      },{
       New:function(p,out,init,_default)
       {
        var r,submitter,trigger,objectArg,value;
        r=Runtime.New(this,Stream2.New(p,out,init));
        r.submitStream=(submitter=Stream1.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }),{
         $:0
        }),(trigger=(objectArg=init.get_Stream(),function(arg00)
        {
         return objectArg.Trigger(arg00);
        }),(value=submitter.Subscribe(function(_arg1)
        {
         var msgs;
         if(_arg1.$==0)
          {
           return trigger(Runtime.New(Result,{
            $:0,
            $0:_default
           }));
          }
         else
          {
           msgs=_arg1.$0;
           return trigger(Runtime.New(Result,{
            $:1,
            $0:msgs
           }));
          }
        }),value,submitter)));
        return r;
       }
      })
     },
     Pervasives:{
      op_LessMultiplyGreater:function(f,x)
      {
       var f1,g;
       return Runtime.New(Piglet,{
        stream:Stream11.Ap(f.stream,x.stream),
        view:(f1=f.view,(g=x.view,function(x1)
        {
         return g(f1(x1));
        }))
       });
      },
      op_LessMultiplyQmarkGreater:function(f,x)
      {
       var f1,g;
       return Runtime.New(Piglet,{
        stream:Stream11.ApJoin(f.stream,x.stream),
        view:(f1=f.view,(g=x.view,function(x1)
        {
         return g(f1(x1));
        }))
       });
      }
     },
     Piglet:Runtime.Class({
      get_Stream:function()
      {
       return this.stream;
      }
     }),
     Piglet1:{
      Builder:Runtime.Class({
       Bind:function(p,f)
       {
        return Piglet1.Choose(p,f);
       },
       Return:function(x)
       {
        return Piglet1.Return(x);
       },
       ReturnFrom:function(p)
       {
        return p;
       },
       Yield:function(x)
       {
        return Piglet1.Yield(x);
       },
       YieldFrom:function(p)
       {
        return p;
       },
       Zero:function()
       {
        return Piglet1.ReturnFailure();
       }
      }),
      Choose:function(chooser,choices)
      {
       var s,c;
       s=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       c=Stream.New(chooser,choices,s);
       return Runtime.New(Piglet,{
        stream:s,
        view:function(f)
        {
         return f(c);
        }
       });
      },
      Confirm:function(init,validate,nomatch)
      {
       var second,x,x1,x2,f,pred,msg,arg10,f1,_arg00_,f2;
       second=Piglet1.Yield(init);
       x=(x1=(x2=Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(a)
       {
        return function(b)
        {
         return[a,b];
        };
       }),validate(Piglet1.Yield(init))),second),(f=(pred=Runtime.Tupled(function(tupledArg)
       {
        var a,b;
        a=tupledArg[0];
        b=tupledArg[1];
        return Unchecked.Equals(a,b);
       }),(msg=(arg10=second.get_Stream(),ErrorMessage.Create(nomatch,arg10)),function(_arg20_)
       {
        return Validation["Is'"](pred,msg,_arg20_);
       })),f(x2))),(f1=(_arg00_=Runtime.Tupled(function(tuple)
       {
        return tuple[0];
       }),function(_arg10_)
       {
        return Piglet1.Map(_arg00_,_arg10_);
       }),f1(x1)));
       f2=function(_arg10_)
       {
        return Piglet1.MapViewArgs(function(a)
        {
         return function(b)
         {
          return[a,b];
         };
        },_arg10_);
       };
       return f2(x);
      },
      FlushErrors:function(p)
      {
       return Piglet1.MapResult(function(_arg1)
       {
        if(_arg1.$==1)
         {
          return Runtime.New(Result,{
           $:1,
           $0:Runtime.New(T,{
            $:0
           })
          });
         }
        else
         {
          return _arg1;
         }
       },p);
      },
      Many:function(init,p)
      {
       return Piglet1.ManyInit([init],init,p);
      },
      ManyInit:function(inits,init,p)
      {
       var s,_init,m;
       s=Stream1.New(Runtime.New(Result,{
        $:0,
        $0:inits
       }),{
        $:0
       });
       _init=p(init);
       m=UnitStream.New(p,s,_init,init);
       return Runtime.New(Piglet,{
        stream:s,
        view:function(f)
        {
         return f(m);
        }
       });
      },
      ManyPiglet:function(inits,create,p)
      {
       var s,m;
       s=Stream1.New(Runtime.New(Result,{
        $:0,
        $0:inits
       }),{
        $:0
       });
       m=Stream2.New(p,s,create);
       return Runtime.New(Piglet,{
        stream:s,
        view:function(f)
        {
         return f(m);
        }
       });
      },
      Map:function(m,p)
      {
       var f,_arg00_;
       f=(_arg00_=function(_arg1)
       {
        var x,msg;
        if(_arg1.$==0)
         {
          x=_arg1.$0;
          return Runtime.New(Result,{
           $:0,
           $0:m(x)
          });
         }
        else
         {
          msg=_arg1.$0;
          return Runtime.New(Result,{
           $:1,
           $0:msg
          });
         }
       },function(_arg10_)
       {
        return Piglet1.MapResult(_arg00_,_arg10_);
       });
       return f(p);
      },
      MapAsync:function(m,p)
      {
       var f,_arg00_;
       f=(_arg00_=function(_arg1)
       {
        var x,f1,msg,x3;
        if(_arg1.$==0)
         {
          x=_arg1.$0;
          f1=function()
          {
           var x1,f2;
           x1=m(x);
           f2=function(_arg2)
           {
            var x2;
            x2=Runtime.New(Result,{
             $:0,
             $0:_arg2
            });
            return Concurrency.Return(x2);
           };
           return Concurrency.Bind(x1,f2);
          };
          return Concurrency.Delay(f1);
         }
        else
         {
          msg=_arg1.$0;
          x3=Runtime.New(Result,{
           $:1,
           $0:msg
          });
          return Concurrency.Return(x3);
         }
       },function(_arg10_)
       {
        return Piglet1.MapAsyncResult(_arg00_,_arg10_);
       });
       return f(p);
      },
      MapAsyncResult:function(m,p)
      {
       var out,value,arg001,clo11,t1;
       out=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       value=p.stream.Subscribe(function(v)
       {
        var arg00,clo1,t;
        arg00=Concurrency.Delay((clo1=function()
        {
         var x,f;
         x=m(v);
         f=function(_arg1)
         {
          var x1;
          x1=out.Trigger(_arg1);
          return Concurrency.Return(x1);
         };
         return Concurrency.Bind(x,f);
        },clo1));
        t={
         $:0
        };
        return Concurrency.Start(arg00);
       });
       value;
       arg001=Concurrency.Delay((clo11=function()
       {
        var x,f;
        x=m(p.stream.get_Latest());
        f=function(_arg2)
        {
         var x1;
         x1=out.Trigger(_arg2);
         return Concurrency.Return(x1);
        };
        return Concurrency.Bind(x,f);
       },clo11));
       t1={
        $:0
       };
       Concurrency.Start(arg001);
       return Runtime.New(Piglet,{
        stream:out,
        view:p.view
       });
      },
      MapResult:function(m,p)
      {
       var out,value;
       out=Stream1.New(m(p.stream.get_Latest()),{
        $:0
       });
       value=p.stream.Subscribe(function(x)
       {
        var arg00;
        arg00=m(x);
        return out.Trigger(arg00);
       });
       value;
       return Runtime.New(Piglet,{
        stream:out,
        view:p.view
       });
      },
      MapToAsyncResult:function(m,p)
      {
       var f,_arg00_;
       f=(_arg00_=function(_arg1)
       {
        var x,msg,x1;
        if(_arg1.$==0)
         {
          x=_arg1.$0;
          return m(x);
         }
        else
         {
          msg=_arg1.$0;
          x1=Runtime.New(Result,{
           $:1,
           $0:msg
          });
          return Concurrency.Return(x1);
         }
       },function(_arg10_)
       {
        return Piglet1.MapAsyncResult(_arg00_,_arg10_);
       });
       return f(p);
      },
      MapToResult:function(m,p)
      {
       var f,_arg00_;
       f=(_arg00_=function(_arg1)
       {
        var x,msg;
        if(_arg1.$==0)
         {
          x=_arg1.$0;
          return m(x);
         }
        else
         {
          msg=_arg1.$0;
          return Runtime.New(Result,{
           $:1,
           $0:msg
          });
         }
       },function(_arg10_)
       {
        return Piglet1.MapResult(_arg00_,_arg10_);
       });
       return f(p);
      },
      MapViewArgs:function(view,p)
      {
       var _arg00_;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(_arg00_=p.view,function(_arg20_)
        {
         return _arg20_(_arg00_(view));
        })
       });
      },
      Render:function(view,p)
      {
       return p.view.call(null,view);
      },
      Return:function(x)
      {
       return Runtime.New(Piglet,{
        stream:Stream1.New(Runtime.New(Result,{
         $:0,
         $0:x
        }),{
         $:0
        }),
        view:function(x1)
        {
         return x1;
        }
       });
      },
      ReturnFailure:function()
      {
       return Runtime.New(Piglet,{
        stream:Stream1.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }),{
         $:0
        }),
        view:function(x)
        {
         return x;
        }
       });
      },
      Run:function(action,p)
      {
       return Piglet1.RunResult(Result.Iter(action),p);
      },
      RunResult:function(action,p)
      {
       var value;
       value=p.stream.Subscribe(action);
       value;
       return p;
      },
      TransmitReader:function(p)
      {
       var v,a;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=p.stream,function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      TransmitReaderMap:function(f,p)
      {
       var v,a,arg10;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=(arg10=p.stream,Reader.Map(f,arg10)),function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      TransmitReaderMapResult:function(f,p)
      {
       var v,a,arg10;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=(arg10=p.stream,Reader.MapResult(f,arg10)),function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      TransmitReaderMapToResult:function(f,p)
      {
       var v,a,arg10;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=(arg10=p.stream,Reader.MapToResult(f,arg10)),function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      TransmitStream:function(p)
      {
       var v,a;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=p.stream,function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      TransmitWriter:function(p)
      {
       var v,a;
       return Runtime.New(Piglet,{
        stream:p.stream,
        view:(v=p.view,(a=p.stream,function(x)
        {
         return(v(x))(a);
        }))
       });
      },
      Validation:{
       Is:function(pred,msg,p)
       {
        var _s_,value;
        _s_=Stream1.New(p.stream.get_Latest(),{
         $:1,
         $0:p.stream.get_Id()
        });
        value=p.stream.Subscribe(function(_arg1)
        {
         var x,m;
         if(_arg1.$==0)
          {
           if(pred(_arg1.$0))
            {
             x=_arg1.$0;
             return _s_.Trigger(Runtime.New(Result,{
              $:0,
              $0:x
             }));
            }
           else
            {
             return _s_.Trigger(Runtime.New(Result,{
              $:1,
              $0:List.ofArray([ErrorMessage.New(msg,_s_.get_Id())])
             }));
            }
          }
         else
          {
           m=_arg1.$0;
           return _s_.Trigger(Runtime.New(Result,{
            $:1,
            $0:m
           }));
          }
        });
        value;
        return Runtime.New(Piglet,{
         stream:_s_,
         view:p.view
        });
       },
       "Is'":function(pred,msg,p)
       {
        var _s_,value;
        _s_=Stream1.New(p.stream.get_Latest(),{
         $:1,
         $0:p.stream.get_Id()
        });
        value=p.stream.Subscribe(function(_arg1)
        {
         var x,m;
         if(_arg1.$==0)
          {
           if(pred(_arg1.$0))
            {
             x=_arg1.$0;
             return _s_.Trigger(Runtime.New(Result,{
              $:0,
              $0:x
             }));
            }
           else
            {
             return _s_.Trigger(Runtime.New(Result,{
              $:1,
              $0:List.ofArray([msg])
             }));
            }
          }
         else
          {
           m=_arg1.$0;
           return _s_.Trigger(Runtime.New(Result,{
            $:1,
            $0:m
           }));
          }
        });
        value;
        return Runtime.New(Piglet,{
         stream:_s_,
         view:p.view
        });
       },
       Match:function(re)
       {
        var objectArg;
        objectArg=new RegExp(re);
        return function(arg00)
        {
         return objectArg.test(arg00);
        };
       },
       NotEmpty:function(x)
       {
        return x!=="";
       }
      },
      WithSubmit:function(pin)
      {
       var submitter,v;
       submitter=Submitter.New(pin.stream,false);
       return Runtime.New(Piglet,{
        stream:submitter.get_Output(),
        view:(v=pin.view,function(x)
        {
         return(v(x))(submitter);
        })
       });
      },
      WithSubmitClearError:function(pin)
      {
       var submitter,v;
       submitter=Submitter.New(pin.stream,true);
       return Runtime.New(Piglet,{
        stream:submitter.get_Output(),
        view:(v=pin.view,function(x)
        {
         return(v(x))(submitter);
        })
       });
      },
      Yield:function(x)
      {
       var s;
       s=Stream1.New(Runtime.New(Result,{
        $:0,
        $0:x
       }),{
        $:0
       });
       return Runtime.New(Piglet,{
        stream:s,
        view:function(f)
        {
         return f(s);
        }
       });
      },
      YieldFailure:function()
      {
       var s;
       s=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       return Runtime.New(Piglet,{
        stream:s,
        view:function(f)
        {
         return f(s);
        }
       });
      },
      YieldOption:function(x,none)
      {
       var x1,f,_arg00_,_arg10_;
       x1=Piglet1.Yield(x);
       f=(_arg00_=(_arg10_=function(x2)
       {
        if(Unchecked.Equals(x2,none))
         {
          return{
           $:0
          };
         }
        else
         {
          return{
           $:1,
           $0:x2
          };
         }
       },function(_arg20_)
       {
        return Stream11.Map(function(_arg1)
        {
         var s;
         if(_arg1.$==1)
          {
           s=_arg1.$0;
           return s;
          }
         else
          {
           return none;
          }
        },_arg10_,_arg20_);
       }),function(_arg10_1)
       {
        return Piglet1.MapViewArgs(_arg00_,_arg10_1);
       });
       return f(x1);
      }
     },
     Reader:Runtime.Class({
      SubscribeImmediate:function(f)
      {
       f(this.get_Latest());
       return this.Subscribe(f);
      },
      Through:function(r)
      {
       var out,value,_this=this;
       out=Stream1.New(this.get_Latest(),{
        $:0
       });
       value=r.Subscribe(function(_arg1)
       {
        var msgs,matchValue,f,predicate,_l_,l,l1;
        if(_arg1.$==1)
         {
          msgs=_arg1.$0;
          matchValue=[_this.get_Latest(),(f=(predicate=function(m)
          {
           return m.get_Source()===_this.get_Id();
          },function(list)
          {
           return List.filter(predicate,list);
          }),f(msgs))];
          if(matchValue[1].$==0)
           {
            return out.Trigger(_this.get_Latest());
           }
          else
           {
            if(matchValue[0].$==1)
             {
              _l_=matchValue[1];
              l=matchValue[0].$0;
              return out.Trigger(Runtime.New(Result,{
               $:1,
               $0:List.append(l,_l_)
              }));
             }
            else
             {
              matchValue[0].$0;
              l1=matchValue[1];
              return out.Trigger(Runtime.New(Result,{
               $:1,
               $0:l1
              }));
             }
           }
         }
        else
         {
          return out.Trigger(_this.get_Latest());
         }
       });
       value;
       return out;
      },
      get_Id:function()
      {
       return this.id;
      }
     },{
      Map:function(f,r)
      {
       return Reader.MapResult(function(arg10)
       {
        return Result.Map(f,arg10);
       },r);
      },
      Map2:function(f,rb,rc)
      {
       return function(arg20)
       {
        return Reader.MapResult2(function(b)
        {
         return function(c)
         {
          return function(arg201)
          {
           return Result.Map2(f,b,arg201);
          }(c);
         };
        },rb,arg20);
       }(rc);
      },
      MapResult:function(f,r)
      {
       var out,value;
       out=Stream1.New(f(r.get_Latest()),{
        $:0
       });
       value=r.Subscribe(function(x)
       {
        var arg00;
        arg00=f(x);
        return out.Trigger(arg00);
       });
       value;
       return out;
      },
      MapResult2:function(f,rb,rc)
      {
       var out,value,value1;
       out=Stream1.New((f(rb.get_Latest()))(rc.get_Latest()),{
        $:0
       });
       value=rb.Subscribe(function(b)
       {
        return out.Trigger((f(b))(rc.get_Latest()));
       });
       value;
       value1=rc.Subscribe(function(c)
       {
        return out.Trigger((f(rb.get_Latest()))(c));
       });
       value1;
       return out;
      },
      MapToResult:function(f,r)
      {
       return Reader.MapResult(Result.Bind(f),r);
      },
      New:function(id)
      {
       var r;
       r=Runtime.New(this,{});
       r.id=id;
       return r;
      }
     }),
     Result:Runtime.Class({
      get_isSuccess:function()
      {
       if(this.$==1)
        {
         return false;
        }
       else
        {
         return true;
        }
      }
     },{
      Ap:function(r1,r2)
      {
       var matchValue,m1,m2,m,m3,f,x;
       matchValue=[r1,r2];
       if(matchValue[0].$==1)
        {
         if(matchValue[1].$==1)
          {
           m1=matchValue[0].$0;
           m2=matchValue[1].$0;
           return Runtime.New(Result,{
            $:1,
            $0:List.append(m1,m2)
           });
          }
         else
          {
           m=matchValue[0].$0;
           return Runtime.New(Result,{
            $:1,
            $0:m
           });
          }
        }
       else
        {
         if(matchValue[1].$==1)
          {
           m3=matchValue[1].$0;
           return Runtime.New(Result,{
            $:1,
            $0:m3
           });
          }
         else
          {
           f=matchValue[0].$0;
           x=matchValue[1].$0;
           return Runtime.New(Result,{
            $:0,
            $0:f(x)
           });
          }
        }
      },
      Bind:function(f)
      {
       return function(_arg2)
       {
        var m;
        if(_arg2.$==1)
         {
          m=_arg2.$0;
          return Runtime.New(Result,{
           $:1,
           $0:m
          });
         }
        else
         {
          return f(_arg2.$0);
         }
       };
      },
      Failwith:function(msg)
      {
       return Runtime.New(Result,{
        $:1,
        $0:List.ofArray([ErrorMessage.New(msg,0)])
       });
      },
      Iter:function(f)
      {
       return function(_arg1)
       {
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          return f(_arg1.$0);
         }
       };
      },
      Join:function(r)
      {
       var x,m,m1;
       if(r.$==0)
        {
         if(r.$0.$==0)
          {
           x=r.$0.$0;
           return Runtime.New(Result,{
            $:0,
            $0:x
           });
          }
         else
          {
           m=r.$0.$0;
           return Runtime.New(Result,{
            $:1,
            $0:m
           });
          }
        }
       else
        {
         m1=r.$0;
         return Runtime.New(Result,{
          $:1,
          $0:m1
         });
        }
      },
      Map:function(f,ra)
      {
       var m,x;
       if(ra.$==1)
        {
         m=ra.$0;
         return Runtime.New(Result,{
          $:1,
          $0:m
         });
        }
       else
        {
         x=ra.$0;
         return Runtime.New(Result,{
          $:0,
          $0:f(x)
         });
        }
      },
      Map2:function(f,ra,rb)
      {
       var matchValue,ma,mb,m,m1,a,b;
       matchValue=[ra,rb];
       if(matchValue[0].$==1)
        {
         if(matchValue[1].$==1)
          {
           ma=matchValue[0].$0;
           mb=matchValue[1].$0;
           return Runtime.New(Result,{
            $:1,
            $0:List.append(ma,mb)
           });
          }
         else
          {
           m=matchValue[0].$0;
           return Runtime.New(Result,{
            $:1,
            $0:m
           });
          }
        }
       else
        {
         if(matchValue[1].$==1)
          {
           m1=matchValue[1].$0;
           return Runtime.New(Result,{
            $:1,
            $0:m1
           });
          }
         else
          {
           a=matchValue[0].$0;
           b=matchValue[1].$0;
           return Runtime.New(Result,{
            $:0,
            $0:(f(a))(b)
           });
          }
        }
      }
     }),
     Stream:Runtime.Class({
      Subscribe:function(f)
      {
       return Util.subscribeTo(this.s,f);
      },
      Trigger:function(x)
      {
       return this.s.Trigger(x);
      },
      Trigger1:function(x)
      {
       return this.Trigger(x);
      },
      Write:function(x)
      {
       var _this=this;
       return ConcreteWriter.New1(function(_arg1)
       {
        var m;
        if(_arg1.$==0)
         {
          return _this.Trigger(Runtime.New(Result,{
           $:0,
           $0:x
          }));
         }
        else
         {
          m=_arg1.$0;
          return _this.Trigger(Runtime.New(Result,{
           $:1,
           $0:m
          }));
         }
       });
      },
      get_Latest:function()
      {
       return this.s.Latest.contents.$0;
      }
     },{
      New:function(init,id)
      {
       var r,id1;
       r=Runtime.New(this,Reader.New(id.$==0?(Id.next())(null):(id1=id.$0,id1)));
       r.s=HotStream.New(init);
       return r;
      }
     }),
     Stream1:{
      Ap:function(sf,sx)
      {
       var out,value,value1;
       out=Stream1.New(Result.Ap(sf.get_Latest(),sx.get_Latest()),{
        $:0
       });
       value=sf.Subscribe(function(f)
       {
        return out.Trigger(Result.Ap(f,sx.get_Latest()));
       });
       value;
       value1=sx.Subscribe(function(x)
       {
        return out.Trigger(Result.Ap(sf.get_Latest(),x));
       });
       value1;
       return out;
      },
      ApJoin:function(sf,sx)
      {
       var out,value,value1;
       out=Stream1.New(Result.Ap(sf.get_Latest(),Result.Join(sx.get_Latest())),{
        $:0
       });
       value=sf.Subscribe(function(f)
       {
        return out.Trigger(Result.Ap(f,Result.Join(sx.get_Latest())));
       });
       value;
       value1=sx.Subscribe(function(x)
       {
        return out.Trigger(Result.Ap(sf.get_Latest(),Result.Join(x)));
       });
       value1;
       return out;
      },
      Map:function(a2b,b2a,s)
      {
       var _s_,arg10,pa,pb,value,value1;
       _s_=Stream1.New((arg10=s.get_Latest(),Result.Map(a2b,arg10)),{
        $:1,
        $0:s.get_Id()
       });
       pa={
        contents:s.get_Latest()
       };
       pb={
        contents:_s_.get_Latest()
       };
       value=s.Subscribe(function(a)
       {
        if(pa.contents!==a)
         {
          pb.contents=Result.Map(a2b,a);
          return _s_.Trigger(pb.contents);
         }
        else
         {
          return null;
         }
       });
       value;
       value1=_s_.Subscribe(function(b)
       {
        if(pb.contents!==b)
         {
          pa.contents=Result.Map(b2a,b);
          return s.Trigger(pa.contents);
         }
        else
         {
          return null;
         }
       });
       value1;
       return _s_;
      }
     },
     Submitter:Runtime.Class({
      Subscribe:function(f)
      {
       return this.output.Subscribe(f);
      },
      Trigger:function()
      {
       return this.writer.Trigger(Runtime.New(Result,{
        $:0,
        $0:null
       }));
      },
      Trigger1:function(x)
      {
       return this.writer.Trigger(x);
      },
      get_Input:function()
      {
       return this.input;
      },
      get_Latest:function()
      {
       return this.output.get_Latest();
      },
      get_Output:function()
      {
       return this.output;
      }
     },{
      New:function(input,clearError)
      {
       var r,value;
       r=Runtime.New(this,Reader.New((Id.next())(null)));
       r.input=input;
       r.output=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       r.writer=ConcreteWriter.New1(function(unitIn)
       {
        var matchValue,x,m,m1,m11,m2;
        matchValue=[unitIn,r.input.get_Latest()];
        if(matchValue[0].$==0)
         {
          if(matchValue[1].$==0)
           {
            x=matchValue[1].$0;
            return r.output.Trigger(Runtime.New(Result,{
             $:0,
             $0:x
            }));
           }
          else
           {
            m=matchValue[1].$0;
            return r.output.Trigger(Runtime.New(Result,{
             $:1,
             $0:m
            }));
           }
         }
        else
         {
          if(matchValue[1].$==0)
           {
            m1=matchValue[0].$0;
            return r.output.Trigger(Runtime.New(Result,{
             $:1,
             $0:m1
            }));
           }
          else
           {
            m11=matchValue[0].$0;
            m2=matchValue[1].$0;
            return r.output.Trigger(Runtime.New(Result,{
             $:1,
             $0:List.append(m11,m2)
            }));
           }
         }
       });
       if(clearError)
        {
         value=r.input.Subscribe(function()
         {
          return r.output.Trigger(Runtime.New(Result,{
           $:1,
           $0:Runtime.New(T,{
            $:0
           })
          }));
         });
         value;
        }
       return r;
      }
     })
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Piglets=Runtime.Safe(WebSharper.Piglets);
  Choose=Runtime.Safe(Piglets.Choose);
  Stream=Runtime.Safe(Choose.Stream);
  Reader=Runtime.Safe(Piglets.Reader);
  Collections=Runtime.Safe(WebSharper.Collections);
  Dictionary=Runtime.Safe(Collections.Dictionary);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  Enumerator=Runtime.Safe(WebSharper.Enumerator);
  Seq=Runtime.Safe(WebSharper.Seq);
  Operators=Runtime.Safe(WebSharper.Operators);
  Stream1=Runtime.Safe(Piglets.Stream);
  Result=Runtime.Safe(Piglets.Result);
  ConcreteReader=Runtime.Safe(Piglets.ConcreteReader);
  Id=Runtime.Safe(Piglets.Id);
  ConcreteWriter=Runtime.Safe(Piglets.ConcreteWriter);
  Html=Runtime.Safe(WebSharper.Html);
  Operators1=Runtime.Safe(Html.Operators);
  Default=Runtime.Safe(Html.Default);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Controls=Runtime.Safe(Piglets.Controls);
  Unchecked=Runtime.Safe(WebSharper.Unchecked);
  jQuery=Runtime.Safe(Global.jQuery);
  HtmlContainer=Runtime.Safe(Controls.HtmlContainer);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  ErrorMessage=Runtime.Safe(Piglets.ErrorMessage);
  Many=Runtime.Safe(Piglets.Many);
  Stream2=Runtime.Safe(Many.Stream);
  Submitter=Runtime.Safe(Piglets.Submitter);
  Operations=Runtime.Safe(Many.Operations);
  ResizeArray=Runtime.Safe(Collections.ResizeArray);
  ResizeArrayProxy=Runtime.Safe(ResizeArray.ResizeArrayProxy);
  UnitStream=Runtime.Safe(Many.UnitStream);
  Piglet=Runtime.Safe(Piglets.Piglet);
  Stream11=Runtime.Safe(Piglets.Stream1);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  Validation=Runtime.Safe(Piglet1.Validation);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  RegExp=Runtime.Safe(Global.RegExp);
  Util=Runtime.Safe(WebSharper.Util);
  Reactive=Runtime.Safe(Global.IntelliFactory.Reactive);
  return HotStream=Runtime.Safe(Reactive.HotStream);
 });
 Runtime.OnLoad(function()
 {
  Runtime.Inherit(Stream,Reader);
  Runtime.Inherit(ConcreteReader,Reader);
  Runtime.Inherit(Stream2,Reader);
  Runtime.Inherit(Stream2,Reader);
  Runtime.Inherit(UnitStream,Stream2);
  Runtime.Inherit(Stream1,Reader);
  Runtime.Inherit(Submitter,Reader);
  Id.next();
  Controls.nextId();
 });
}());
