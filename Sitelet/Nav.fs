module Sitelet.Nav

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Sitelet.Model
open System

let randomize url = url + "?d=" + Uri.EscapeUriString(DateTime.Now.ToString())

let loginInfo (ctx:Context<_>) =
    let userOption = UserSession.GetLoggedInUser()
    match userOption with
        | Some user ->
            A [
                Class "navbar-right btn btn-default navbar-btn"
                HRef (randomize <| ctx.Link Action.Logout)
            ] -< [Text <| "Sign out (" + user + ")"]
        | None ->
            A [
                Class "navbar-right btn btn-default navbar-btn"
                HRef ("/login")
            ] -< [Text "Sign in"]

let navToggle =
    Button [
        Attributes.Type "button"
        Class "navbar-toggle"
        HTML5.Data "toggle" "collapse"
        HTML5.Data "target" ".navbar-collapse"
    ] -< [
        Span [Class "sr-only"] -< [Text "Toggle navigation"]
        Span [Class "icon-bar"]
        Span [Class "icon-bar"]
        Span [Class "icon-bar"]
    ]

let navHeader =
    Div [Class "navbar-header"] -< [
        navToggle
        A [Class "navbar-brand"; HRef "/"] -< [Text "Brand"]
    ]

let li activeLiOption href txt =
    match activeLiOption with
        | Some activeLi when txt = activeLi ->
            LI [Class "active"] -< [
                A [HRef href] -< [Text txt]
            ]
        | _ -> LI [A [HRef href] -< [Text txt]]

let navDiv activeLi ctx =
    Div [Class "collapse navbar-collapse"] -< [
        UL [Class "nav navbar-nav"] -< [
            li activeLi "/" "Home"
            li activeLi "/about" "About"
        ]
        loginInfo ctx
    ]

let navElt activeLi ctx : Content.HtmlElement =
    HTML5.Nav [
        Class "navbar navbar-default"
        NewAttribute "role" "navigation"
    ] -< [
        Div [Class "container"] -< [
            navHeader
            navDiv activeLi ctx
        ]
    ]