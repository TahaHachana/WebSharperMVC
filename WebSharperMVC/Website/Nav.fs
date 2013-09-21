module Website.Nav

open System
open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Model

let random url = url + "?d=" + Uri.EscapeUriString(DateTime.Now.ToString())

let loginInfo (ctx: Context<_>) =
    let userOption = UserSession.GetLoggedInUser()
    match userOption with
        | Some user ->
            A [
                Class "navbar-right btn btn-default navbar-btn"
                HRef (random (ctx.Link Action.Logout))
            ] -< [Text <| "Sign out (" + user + ")"]
        | None ->
            A [
                Class "navbar-right btn btn-default navbar-btn"
                HRef ("/login")
            ] -< [Text "Sign in"]

let navHeader =
    Div [Class "navbar-header"] -< [
        Button [
            Type "button"
            Class "navbar-toggle"
            HTML5.Data "toggle" "collapse"
            HTML5.Data "target" ".navbar-ex1-collapse"
        ] -< [
            Span [Class "sr-only"] -< [Text "Toggle navigation"]
            Span [Class "icon-bar"]
            Span [Class "icon-bar"]
            Span [Class "icon-bar"]
        ]
        A [Class "navbar-brand"; HRef "/"] -< [Text "Brand"]
    ]

let li activeLiOption href txt =
    match activeLiOption with
        | None -> LI [A [HRef href] -< [Text txt]]
        | Some activeLi ->
            if txt = activeLi then
                LI [Class "active"] -< [A [HRef href] -< [Text txt]]
            else
                LI [A [HRef href] -< [Text txt]]

let navDiv activeLi ctx =
    Div [Class "collapse navbar-collapse navbar-ex1-collapse"] -< [
        UL [Class "nav navbar-nav"] -< [
            li activeLi "/" "Home"
            li activeLi "/about" "About"
        ]
        loginInfo ctx
    ]

let nav activeLi ctx : Content.HtmlElement =
    HTML5.Nav [
        Class "navbar navbar-inverse navbar-fixed-top"
        NewAttribute "role" "navigation"
    ] -< [
        Div [Class "container"] -< [
            navHeader
            navDiv activeLi ctx
        ]
    ]