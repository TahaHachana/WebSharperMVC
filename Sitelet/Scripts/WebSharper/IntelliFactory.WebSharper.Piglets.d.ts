declare module IntelliFactory {
    module WebSharper {
        module Piglets {
            module ErrorMessage {
                var Create : {
                    <_M1>(msg: string, reader: _Piglets.Reader<_M1>): _Piglets.ErrorMessage;
                };
            }
            module Result {
                var Failwith : {
                    (msg: string): _Piglets.Result<any>;
                };
                var Ap : {
                    <_M1>(r1: _Piglets.Result<{
                        (x: any): _M1;
                    }>, r2: _Piglets.Result<any>): _Piglets.Result<_M1>;
                };
                var Join : {
                    (r: _Piglets.Result<_Piglets.Result<any>>): _Piglets.Result<any>;
                };
                var Map : {
                    <_M1>(f: {
                        (x: any): _M1;
                    }, ra: _Piglets.Result<any>): _Piglets.Result<_M1>;
                };
                var Map2 : {
                    <_M1, _M2>(f: {
                        (x: any): {
                            (x: _M1): _M2;
                        };
                    }, ra: _Piglets.Result<any>, rb: _Piglets.Result<_M1>): _Piglets.Result<_M2>;
                };
                var Iter : {
                    (f: {
                        (x: any): void;
                    }): {
                        (x: _Piglets.Result<any>): void;
                    };
                };
                var Bind : {
                    <_M1>(f: {
                        (x: any): _Piglets.Result<_M1>;
                    }): {
                        (x: _Piglets.Result<any>): _Piglets.Result<_M1>;
                    };
                };
            }
            module Reader {
                var MapResult : {
                    <_M1>(f: {
                        (x: _Piglets.Result<_M1>): _Piglets.Result<any>;
                    }, r: _Piglets.Reader<_M1>): _Piglets.Reader<any>;
                };
                var MapResult2 : {
                    <_M1, _M2>(f: {
                        (x: _Piglets.Result<_M1>): {
                            (x: _Piglets.Result<_M2>): _Piglets.Result<any>;
                        };
                    }, rb: _Piglets.Reader<_M1>, rc: _Piglets.Reader<_M2>): _Piglets.Reader<any>;
                };
                var Map : {
                    <_M1>(f: {
                        (x: _M1): any;
                    }, r: _Piglets.Reader<_M1>): _Piglets.Reader<any>;
                };
                var Map2 : {
                    <_M1, _M2>(f: {
                        (x: _M1): {
                            (x: _M2): any;
                        };
                    }, rb: _Piglets.Reader<_M1>, rc: _Piglets.Reader<_M2>): _Piglets.Reader<any>;
                };
                var MapToResult : {
                    <_M1>(f: {
                        (x: _M1): _Piglets.Result<any>;
                    }, r: _Piglets.Reader<_M1>): _Piglets.Reader<any>;
                };
            }
            module Controls {
                var input : {
                    <_M1>(type: string, ofString: {
                        (x: string): _M1;
                    }, toString: {
                        (x: _M1): string;
                    }, stream: _Piglets.Stream<_M1>): _Html.Element;
                };
                var WithLabel : {
                    (label: string, element: _Html.Element): _Html.Element;
                };
                var WithLabelAfter : {
                    (label: string, element: _Html.Element): _Html.Element;
                };
                var IntInput : {
                    (stream: _Piglets.Stream<number>): _Html.Element;
                };
                var TextArea : {
                    (stream: _Piglets.Stream<string>): _Html.Element;
                };
                var CheckBox : {
                    (stream: _Piglets.Stream<boolean>): _Html.Element;
                };
                var Radio : {
                    <_M1>(stream: _Piglets.Stream<_M1>, values: _WebSharper.seq<any>): _Html.Element;
                };
                var Select : {
                    <_M1>(stream: _Piglets.Stream<_M1>, values: _WebSharper.seq<any>): _Html.Element;
                };
                var RenderMany : {
                    <_M1, _M2>(stream: _Many.UnitStream<_M1, _M2, _Html.Element>, renderOne: {
                        (x: _Many.Operations): _M2;
                    }, container: _Html.Element): _Html.Element;
                };
                var RenderChoice : {
                    <_M1, _M2, _M3, _M4, _M5>(stream: _Choose.Stream<_M1, _M2, _M3, _M4, _M5, _Html.Element>, renderOne: _M5, container: _Html.Element): _Html.Element;
                };
                var ShowResult : {
                    <_M1, _M2, _M3>(reader: _Piglets.Reader<_M1>, render: {
                        (x: _Piglets.Result<_M1>): _M2;
                    }, container: _Html.Element): _Html.Element;
                };
                var Show : {
                    <_M1, _M2, _M3>(reader: _Piglets.Reader<_M1>, render: {
                        (x: _M1): _M2;
                    }, container: _Html.Element): _Html.Element;
                };
                var ShowString : {
                    <_M1>(reader: _Piglets.Reader<_M1>, render: {
                        (x: _M1): string;
                    }, container: _Html.Element): _Html.Element;
                };
                var ShowErrors : {
                    <_M1, _M2, _M3>(reader: _Piglets.Reader<_M1>, render: {
                        (x: _List.T<string>): _M2;
                    }, container: _Html.Element): _Html.Element;
                };
                var EnableOnSuccess : {
                    <_M1>(reader: _Piglets.Reader<_M1>, element: _Html.Element): _Html.Element;
                };
                var Submit : {
                    (submit: _Piglets.Writer<void>): _Html.Element;
                };
                var SubmitValidate : {
                    <_M1>(submit: _Piglets.Submitter<_M1>): _Html.Element;
                };
                var Button : {
                    (submit: _Piglets.Writer<void>): _Html.Element;
                };
                var ButtonValidate : {
                    <_M1>(submit: _Piglets.Submitter<_M1>): _Html.Element;
                };
                var Link : {
                    (submit: _Piglets.Writer<void>): _Html.Element;
                };
                var Attr : {
                    <_M1>(reader: _Piglets.Reader<_M1>, attrName: string, render: {
                        (x: _M1): string;
                    }, element: _Html.Element): _Html.Element;
                };
                var AttrResult : {
                    <_M1>(reader: _Piglets.Reader<_M1>, attrName: string, render: {
                        (x: _Piglets.Result<_M1>): string;
                    }, element: _Html.Element): _Html.Element;
                };
                var Css : {
                    <_M1>(reader: _Piglets.Reader<_M1>, attrName: string, render: {
                        (x: _M1): string;
                    }, element: _Html.Element): _Html.Element;
                };
                var CssResult : {
                    <_M1>(reader: _Piglets.Reader<_M1>, attrName: string, render: {
                        (x: _Piglets.Result<_M1>): string;
                    }, element: _Html.Element): _Html.Element;
                };
                var nextId : {
                    (): {
                        (): string;
                    };
                };
            }
            module Many {
                interface UnitStream<_T1, _T2, _T3> {
                    get_Add(): _Piglets.Writer<void>;
                }
                interface Operations {
                    get_Delete(): _Piglets.Writer<void>;
                    get_MoveUp(): _Piglets.Submitter<void>;
                    get_MoveDown(): _Piglets.Submitter<void>;
                }
                interface Stream<_T1, _T2, _T3, _T4, _T5> {
                    Subscribe(f: {
                        (x: _Piglets.Result<_T1[]>): void;
                    }): _WebSharper.IDisposableProxy;
                    Render<_M1>(c: _Piglets.Container<_T3, _M1>, f: {
                        (x: _Many.Operations): _T2;
                    }): _M1;
                    AddRender(f: _T4): _T5;
                    update(): void;
                    get_Latest(): _Piglets.Result<_T1[]>;
                    get_Add(): _Piglets.Writer<_T1>;
                }
            }
            module Choose {
                interface Stream<_T1, _T2, _T3, _T4, _T5, _T6> {
                    Subscribe(f: {
                        (x: _Piglets.Result<_T1>): void;
                    }): _WebSharper.IDisposableProxy;
                    Chooser(f: _T3): _T4;
                    Choice<_M1>(c: _Piglets.Container<_T6, _M1>, f: _T5): _M1;
                    Dispose(): void;
                    get_Latest(): _Piglets.Result<_T1>;
                    get_ChooserStream(): _Piglets.Stream<_T2>;
                }
            }
            module Piglet1 {
                module Validation {
                    var Is_ : {
                        <_M1, _M2>(pred: {
                            (x: _M1): boolean;
                        }, msg: _Piglets.ErrorMessage, p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                    };
                    var Is : {
                        <_M1, _M2>(pred: {
                            (x: _M1): boolean;
                        }, msg: string, p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                    };
                    var NotEmpty : {
                        (value: string): boolean;
                    };
                    var Match : {
                        (regexp: string): {
                            (x: string): boolean;
                        };
                    };
                }
                interface Builder {
                    Bind<_M1, _M2, _M3, _M4, _M5, _M6, _M7>(p: _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>, f: {
                        (x: _M1): _Piglets.Piglet<_M4, {
                            (x: _M5): _M6;
                        }>;
                    }): _Piglets.Piglet<_M4, {
                        (x: {
                            (x: _Choose.Stream<_M4, _M1, _M2, _M3, _M5, _M6>): _M7;
                        }): _M7;
                    }>;
                    Return<_M1, _M2>(x: _M1): _Piglets.Piglet<_M1, {
                        (x: _M2): _M2;
                    }>;
                    ReturnFrom<_M1, _M2>(p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                    Yield<_M1, _M2>(x: _M1): _Piglets.Piglet<_M1, {
                        (x: {
                            (x: _Piglets.Stream<_M1>): _M2;
                        }): _M2;
                    }>;
                    YieldFrom<_M1, _M2>(p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                    Zero<_M1, _M2>(): _Piglets.Piglet<_M1, {
                        (x: _M2): _M2;
                    }>;
                }
                var Yield : {
                    <_M1, _M2>(x: _M1): _Piglets.Piglet<_M1, {
                        (x: {
                            (x: _Piglets.Stream<_M1>): _M2;
                        }): _M2;
                    }>;
                };
                var YieldFailure : {
                    <_M1, _M2>(): _Piglets.Piglet<_M1, {
                        (x: {
                            (x: _Piglets.Stream<_M1>): _M2;
                        }): _M2;
                    }>;
                };
                var Return : {
                    <_M1, _M2>(x: _M1): _Piglets.Piglet<_M1, {
                        (x: _M2): _M2;
                    }>;
                };
                var ReturnFailure : {
                    <_M1, _M2>(): _Piglets.Piglet<_M1, {
                        (x: _M2): _M2;
                    }>;
                };
                var WithSubmit : {
                    <_M1, _M2, _M3>(pin: _Piglets.Piglet<_M1, {
                        (x: _M2): {
                            (x: _Piglets.Submitter<_M1>): _M3;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>;
                };
                var WithSubmitClearError : {
                    <_M1, _M2, _M3>(pin: _Piglets.Piglet<_M1, {
                        (x: _M2): {
                            (x: _Piglets.Submitter<_M1>): _M3;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>;
                };
                var Choose : {
                    <_M1, _M2, _M3, _M4, _M5, _M6, _M7>(chooser: _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>, choices: {
                        (x: _M1): _Piglets.Piglet<_M4, {
                            (x: _M5): _M6;
                        }>;
                    }): _Piglets.Piglet<_M4, {
                        (x: {
                            (x: _Choose.Stream<_M4, _M1, _M2, _M3, _M5, _M6>): _M7;
                        }): _M7;
                    }>;
                };
                var ManyPiglet : {
                    <_M1, _M2, _M3, _M4, _M5, _M6>(inits: _M1[], create: _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>, p: {
                        (x: _M1): _Piglets.Piglet<_M1, {
                            (x: _M4): _M5;
                        }>;
                    }): _Piglets.Piglet<_M1[], {
                        (x: {
                            (x: _Many.Stream<_M1, _M4, _M5, _M2, _M3>): _M6;
                        }): _M6;
                    }>;
                };
                var ManyInit : {
                    <_M1, _M2, _M3, _M4>(inits: _M1[], init: _M1, p: {
                        (x: _M1): _Piglets.Piglet<_M1, {
                            (x: _M2): _M3;
                        }>;
                    }): _Piglets.Piglet<_M1[], {
                        (x: {
                            (x: _Many.UnitStream<_M1, _M2, _M3>): _M4;
                        }): _M4;
                    }>;
                };
                var Many : {
                    <_M1, _M2, _M3, _M4>(init: _M1, p: {
                        (x: _M1): _Piglets.Piglet<_M1, {
                            (x: _M2): _M3;
                        }>;
                    }): _Piglets.Piglet<_M1[], {
                        (x: {
                            (x: _Many.UnitStream<_M1, _M2, _M3>): _M4;
                        }): _M4;
                    }>;
                };
                var TransmitStream : {
                    <_M1, _M2, _M3>(p: _Piglets.Piglet<_M1, {
                        (x: _M2): {
                            (x: _Piglets.Stream<_M1>): _M3;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>;
                };
                var TransmitReaderMapResult : {
                    <_M1, _M2, _M3, _M4>(f: {
                        (x: _Piglets.Result<_M1>): _Piglets.Result<_M2>;
                    }, p: _Piglets.Piglet<_M1, {
                        (x: _M3): {
                            (x: _Piglets.Reader<_M2>): _M4;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M3): _M4;
                    }>;
                };
                var TransmitReaderMapToResult : {
                    <_M1, _M2, _M3, _M4>(f: {
                        (x: _M1): _Piglets.Result<_M2>;
                    }, p: _Piglets.Piglet<_M1, {
                        (x: _M3): {
                            (x: _Piglets.Reader<_M2>): _M4;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M3): _M4;
                    }>;
                };
                var TransmitReaderMap : {
                    <_M1, _M2, _M3, _M4>(f: {
                        (x: _M1): _M2;
                    }, p: _Piglets.Piglet<_M1, {
                        (x: _M3): {
                            (x: _Piglets.Reader<_M2>): _M4;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M3): _M4;
                    }>;
                };
                var TransmitReader : {
                    <_M1, _M2, _M3>(p: _Piglets.Piglet<_M1, {
                        (x: _M2): {
                            (x: _Piglets.Reader<_M1>): _M3;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>;
                };
                var TransmitWriter : {
                    <_M1, _M2, _M3>(p: _Piglets.Piglet<_M1, {
                        (x: _M2): {
                            (x: _Piglets.Writer<_M1>): _M3;
                        };
                    }>): _Piglets.Piglet<_M1, {
                        (x: _M2): _M3;
                    }>;
                };
                var MapResult : {
                    <_M1, _M2, _M3>(m: {
                        (x: _Piglets.Result<_M1>): _Piglets.Result<_M2>;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var MapToResult : {
                    <_M1, _M2, _M3>(m: {
                        (x: _M1): _Piglets.Result<_M2>;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var Map : {
                    <_M1, _M2, _M3>(m: {
                        (x: _M1): _M2;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var MapAsyncResult : {
                    <_M1, _M2, _M3>(m: {
                        (x: _Piglets.Result<_M1>): any;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var MapToAsyncResult : {
                    <_M1, _M2, _M3>(m: {
                        (x: _M1): any;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var MapAsync : {
                    <_M1, _M2, _M3>(m: {
                        (x: _M1): any;
                    }, p: _Piglets.Piglet<_M1, _M3>): _Piglets.Piglet<_M2, _M3>;
                };
                var FlushErrors : {
                    <_M1, _M2>(p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                };
                var RunResult : {
                    <_M1, _M2>(action: {
                        (x: _Piglets.Result<_M1>): void;
                    }, p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                };
                var Run : {
                    <_M1, _M2>(action: {
                        (x: _M1): void;
                    }, p: _Piglets.Piglet<_M1, _M2>): _Piglets.Piglet<_M1, _M2>;
                };
                var Render : {
                    <_M1, _M2, _M3>(view: _M1, p: _Piglets.Piglet<_M2, {
                        (x: _M1): _M3;
                    }>): _M3;
                };
                var MapViewArgs : {
                    <_M1, _M2, _M3, _M4>(view: _M1, p: _Piglets.Piglet<_M2, {
                        (x: _M1): _M3;
                    }>): _Piglets.Piglet<_M2, {
                        (x: {
                            (x: _M3): _M4;
                        }): _M4;
                    }>;
                };
                var YieldOption : {
                    <_M1, _M2>(init: _WebSharper.OptionProxy<_M1>, noneValue: _M1): _Piglets.Piglet<_WebSharper.OptionProxy<_M1>, {
                        (x: {
                            (x: _Piglets.Stream<_M1>): _M2;
                        }): _M2;
                    }>;
                };
                var Confirm : {
                    <_M1, _M2, _M3, _M4, _M5, _M6>(init: _M1, validate: {
                        (x: _Piglets.Piglet<_M1, {
                            (x: {
                                (x: _Piglets.Stream<_M1>): _M2;
                            }): _M2;
                        }>): _Piglets.Piglet<_M1, {
                            (x: {
                                (x: _M3): {
                                    (x: _M4): any;
                                };
                            }): {
                                (x: _Piglets.Stream<_M1>): _M5;
                            };
                        }>;
                    }, nomatch: string): _Piglets.Piglet<_M1, {
                        (x: {
                            (x: _M5): _M6;
                        }): _M6;
                    }>;
                };
            }
            module Pervasives {
                var op_LessMultiplyGreater : {
                    <_M1, _M2, _M3, _M4, _M5>(f: _Piglets.Piglet<{
                        (x: _M1): _M2;
                    }, {
                        (x: _M3): _M4;
                    }>, x: _Piglets.Piglet<_M1, {
                        (x: _M4): _M5;
                    }>): _Piglets.Piglet<_M2, {
                        (x: _M3): _M5;
                    }>;
                };
                var op_LessMultiplyQmarkGreater : {
                    <_M1, _M2, _M3, _M4, _M5>(f: _Piglets.Piglet<{
                        (x: _M1): _M2;
                    }, {
                        (x: _M3): _M4;
                    }>, x: _Piglets.Piglet<_Piglets.Result<_M1>, {
                        (x: _M4): _M5;
                    }>): _Piglets.Piglet<_M2, {
                        (x: _M3): _M5;
                    }>;
                };
            }
            module Stream1 {
                var Ap : {
                    <_M1, _M2>(sf: _Piglets.Stream<{
                        (x: _M1): _M2;
                    }>, sx: _Piglets.Stream<_M1>): _Piglets.Stream<_M2>;
                };
                var ApJoin : {
                    <_M1, _M2>(sf: _Piglets.Stream<{
                        (x: _M1): _M2;
                    }>, sx: _Piglets.Stream<_Piglets.Result<_M1>>): _Piglets.Stream<_M2>;
                };
                var Map : {
                    <_M1, _M2>(a2b: {
                        (x: _M1): _M2;
                    }, b2a: {
                        (x: _M2): _M1;
                    }, s: _Piglets.Stream<_M1>): _Piglets.Stream<_M2>;
                };
            }
            interface ErrorMessage {
                get_Message(): string;
                get_Source(): number;
            }
            interface Reader<_T1> {
                SubscribeImmediate(f: {
                    (x: _Piglets.Result<_T1>): void;
                }): _WebSharper.IDisposableProxy;
                Through<_M1>(r: _Piglets.Reader<_M1>): _Piglets.Reader<_T1>;
                get_Id(): number;
            }
            interface Result<_T1> {
                get_isSuccess(): boolean;
            }
            interface Writer<_T1> {
                Trigger(x0: _Piglets.Result<_T1>): void;
            }
            interface Stream<_T1> {
                Subscribe(f: {
                    (x: _Piglets.Result<_T1>): void;
                }): _WebSharper.IDisposableProxy;
                Trigger(x: _Piglets.Result<_T1>): void;
                Trigger1(x: _Piglets.Result<_T1>): void;
                Write(x: _T1): _Piglets.Writer<void>;
                get_Latest(): _Piglets.Result<_T1>;
            }
            interface Submitter<_T1> {
                Trigger(): void;
                Subscribe(f: {
                    (x: _Piglets.Result<_T1>): void;
                }): _WebSharper.IDisposableProxy;
                Trigger1(x: _Piglets.Result<void>): void;
                get_Input(): _Piglets.Reader<_T1>;
                get_Output(): _Piglets.Stream<_T1>;
                get_Latest(): _Piglets.Result<_T1>;
            }
            interface Piglet<_T1, _T2> {
                get_Stream(): _Piglets.Stream<_T1>;
                stream: _Piglets.Stream<_T1>;
                view: _T2;
            }
            interface Container<_T1, _T2> {
                Add(x0: _T1): void;
                Remove(x0: number): void;
                MoveUp(x0: number): void;
                get_Container(): _T2;
            }
        }
    }
    
    import _Piglets = IntelliFactory.WebSharper.Piglets;
    import _Html = IntelliFactory.WebSharper.Html;
    import _WebSharper = IntelliFactory.WebSharper;
    import _Many = IntelliFactory.WebSharper.Piglets.Many;
    import _Choose = IntelliFactory.WebSharper.Piglets.Choose;
    import _List = IntelliFactory.WebSharper.List;
}
