module Website.Controller

open IntelliFactory.WebSharper.Sitelets
open Model

let protect view =
    match UserSession.GetLoggedInUser() with
        | None -> Content.Redirect <| Login None
        | _ -> view

let logout() =
    UserSession.Logout()
    Content.Redirect Home
    
let controller =
    let handle = function
        | About        -> Views.about
        | Admin        -> protect Views.admin
        | Error    -> Views.error
        | Home         -> Views.home
        | Login action -> Views.login action
        | Logout       -> logout()
        | Sub pageId   -> Views.sub pageId

    { Handle = handle }