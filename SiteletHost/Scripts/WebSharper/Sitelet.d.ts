declare module Sitelet {
    module Site {
        interface Website {
        }
    }
    module Model {
        interface Action {
        }
    }
    module Login {
        module LoginInfo {
            var New : {
                (username: string, password: string): _Login.LoginInfo;
            };
        }
        module Client {
            var loginPiglet : {
                <_M1>(init: _Login.LoginInfo): _Piglets.Piglet<_Login.LoginInfo, {
                    (x: {
                        (x: _Piglets.Stream<string>): {
                            (x: _Piglets.Stream<string>): {
                                (x: _Piglets.Submitter<_Login.LoginInfo>): _M1;
                            };
                        };
                    }): _M1;
                }>;
            };
            var loginRender : {
                <_M1>(name: _Piglets.Stream<string>, password: _Piglets.Stream<string>, submit: _Piglets.Submitter<_M1>): _Html.Element;
            };
            var form : {
                (redirectUrl: string): _Html.Element;
            };
        }
        interface LoginInfo {
            Username: string;
            Password: string;
        }
        interface Access {
        }
        interface Control {
            get_Body(): _Html.IPagelet;
        }
    }
    module Skin {
        interface Page {
            MetaDescription: string;
            Title: string;
            Nav: _Html1.Element<_Web.Control>;
            Body: _Html1.Element<_Web.Control>;
        }
    }
    
    import _Login = Sitelet.Login;
    import _Piglets = IntelliFactory.WebSharper.Piglets;
    import _Html = IntelliFactory.WebSharper.Html;
    import _Html1 = IntelliFactory.Html.Html;
    import _Web = IntelliFactory.WebSharper.Web;
}
