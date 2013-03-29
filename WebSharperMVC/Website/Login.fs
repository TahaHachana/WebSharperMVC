namespace Website

module Login =

    open IntelliFactory.WebSharper

    type LoginInfo =
        {
            Name     : string
            Password : string
        }

    module Server =
        
        open IntelliFactory.WebSharper.Sitelets

        [<Rpc>]
        let login loginInfo =
            async {
                if loginInfo.Password = "" then
                    UserSession.LoginUser loginInfo.Name
                    return true
                else
                    return false
            }

    module Client =
        
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Formlet

        [<JavaScript>]
        let loginForm (redirectUrl: string) =
            let userName =
                Controls.Input ""
                |> Enhance.WithTextLabel "Username"
            let password =
                Controls.Password ""
                |> Enhance.WithTextLabel "Password"
            let formlet =
                Formlet.Yield (fun n p -> {Name=n; Password=p})
                <*> userName <*> password
                |> Enhance.WithSubmitButton
                |> Enhance.WithFormContainer
            Formlet.Run (fun loginInfo ->
                async {
                    let! loggedIn = Server.login loginInfo
                    match loggedIn with
                            | false -> JavaScript.Alert "Login failed"
                            | true  -> Html5.Window.Self.Location.Href <- redirectUrl
                } |> Async.Start) formlet

        type Control(redirectUrl) =
        
            inherit Web.Control ()

            [<JavaScript>]
            override __.Body = loginForm redirectUrl